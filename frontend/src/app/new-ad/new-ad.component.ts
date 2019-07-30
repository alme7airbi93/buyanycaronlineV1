import { Component, OnInit, ChangeDetectorRef }      from '@angular/core';
import { Router, ActivatedRoute}  from "@angular/router";
import { FormBuilder, FormGroup}  from "@angular/forms";
import { FormControl, Validators} from "@angular/forms";

import { AdModel }                from '../modules/ad.model';
import { AdService }              from '../modules/ad.service';
import { VehicleModel }           from '../modules/vehicle.model';
import { VehicleService }         from '../modules/vehicle.service';
import { CarModel }               from '../modules/car.model';
import { CarService }             from '../modules/car.service';
import { MakeModel }              from '../modules/make.model';
import { MakeService }            from '../modules/make.service';
import { ModelService }           from '../modules/model.service';
import { ModelModel }             from '../modules/model.model';
import { UploadService }          from '../modules/upload.service';
import { CommonService }          from '../modules/config'

declare var $: any;

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})

export class NewAdComponent implements OnInit {

  user_id       : string;
  car_id        : string;
  ad            : AdModel;
  vehicle       : VehicleModel;
  car           : CarModel;

  makes         : MakeModel[];
  models        : ModelModel[];
  colors        : {};
  transmissions : {};
  years         : number[];
  fueltypes     : {};
  conditions    : {};
  features      : {};
  selectedMake  : string;
  selFeatures   : any [];

  newForm       : FormGroup;
  uploadForm    : FormGroup;

  imgFiles      : string[];
  previewImgFile: string;
  
  submitted = false;
  
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };
  
  constructor(private formBuilder   : FormBuilder, 
              private adService     : AdService, 
              private vehicleService: VehicleService, 
              private carService    : CarService, 
              private makeService   : MakeService, 
              private modelService  : ModelService,
              private uploadService : UploadService,
              private commonService : CommonService,
              private cdRef         : ChangeDetectorRef,
              private route         : ActivatedRoute,
              private router        : Router) { }
  ngOnInit() {

    this.getAllMakes();

    this.years        = this.commonService.years;
    this.fueltypes    = this.commonService.fueltypes;
    this.conditions   = this.commonService.conditions;
    this.transmissions= this.commonService.transmissions;
    this.colors       = this.commonService.colors;
    this.features     = this.commonService.features;

    this.newForm = this.formBuilder.group({
      title:       ['', Validators.required],
      price:       ['', Validators.required],
      description: ['', Validators.required],
      make_id:     ['', Validators.required],
      model_id:    ['', Validators.required],
      color:       ['', Validators.required],
      transmission:['', Validators.required],
      year:        ['', Validators.required],
      fueltype:    ['', Validators.required],
      condition:   ['', Validators.required]
    });

    this.uploadForm = this.formBuilder.group({
      carimg:     ['']
    });

    this.user_id = this.route.snapshot.paramMap.get('user_id');

    let self = this;

    $(document).ready(function() {
      
      $("body").find("#newForm").submit(function(e) {
        
        e.preventDefault();
        if (!self.onSaveSubmit())
          return;      
        
        $("#uploadPhoto-box").css("display","block");
        $("#publishButton-container").css("display","block");
        $("#uploadPhotoBox-container").css("opacity","1");

        self.selFeatures = [];
        var index = 0;
        $('input[type="checkbox"]:checked').each(function() {
          self.selFeatures[index] = this.value; index++;
        });

        /*$("body").on("click", ".uploadPhotoBox-delete", function() {
          $(this).closest('.uploadPhotoBox-item').css('display', 'none');
        });*/
      });
    });
  }

  get fNew() { return this.newForm.controls; }

  ngAfterViewInit() {
    $('.selectpicker').selectpicker('refresh');
  }
  
  getAllMakes(): void {
    this.makeService.getAllMakes().subscribe(data=>{

      this.makes = data;
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);

    });
  };

  getModelByMakeId(make_id : string){
    this.modelService.getAllModelByMakeId(make_id).subscribe(data=>{

      this.models = data;
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);

    });
  }
  
  onMakeChange(event:Event) {
    
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    this.getModelByMakeId(value);

  }

  onSaveSubmit(){
    this.submitted = true;
    
    if (this.newForm.invalid) {
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
      return false;
    }

    this.ad = {
        id          : '',
        title       : this.newForm.value.title, 
        price       : this.newForm.value.price,
        description : this.newForm.value.description,
        user_id     : this.user_id,
        city        : '',
        no          : 0,
        approve     : 0,
        publish     : false,
        visitcount  : 0
    }
    
    this.addAd();

    return true;
    
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('carimg').setValue(file);
    }
  }

  onUploadSubmit() {
    $('.loader').show();
    const formData = new FormData();

    formData.append('file', this.uploadForm.get('carimg').value);
    
    this.uploadService.upload(formData, this.car_id).subscribe(
      data => {
        if(data.success == true) {
          $('.loader').hide();
          this.getCarAloneById(this.car_id);          
        }
      }
    );   
  }

  onDeleteSubmit(imgFile:string){
    let pathArray = imgFile.split("/");
    let imgFileName = pathArray[pathArray.length - 1];

    this.carService.updateCarImageById(this.car_id, imgFileName)
      .subscribe( (data) => {
        this.getCarAloneById(this.car_id);
      });
  }
  
  onPublishSubmit() {
    
    this.adService.updateAd(this.vehicle.ad_id, 'publish', 'true').subscribe(
      data => {
        this.router.navigate(["/car-search"]);
      }
    );   
  }
  // get the form short name to access the form fields
  get f() { return this.newForm.controls; }
  
  getCarAloneById(car_id:string) {
    this.carService.getCarAloneById(car_id)
    .subscribe( (data:CarModel) => {
      let imgFiles = [];
      this.imgFiles = [];
      this.previewImgFile = "";

      imgFiles = JSON.parse(data.imgfiles);
      for(let i = 0; i < imgFiles.length; i++) {
        this.imgFiles[i] = this.commonService.baseurl + "/uploads/cars/" + imgFiles[i];
        if(i == 0) this.previewImgFile = this.imgFiles[0];
      }
    });
  }

  addAd(){
    this.adService.addAd(this.ad)
      .subscribe( (data:AdModel) => {
        
        this.vehicle = {
          id          : '',
          ad_id       : data.id,
          make_id     : this.newForm.value.make_id, 
          model_id    : this.newForm.value.model_id,
          warrenty    : true,
          cylinders   : 0,
          condition   : this.newForm.value.condition,
          year        : Number(this.newForm.value.year),
          fueltype    : this.newForm.value.fueltype
        }

        this.addVehicle();
      });
  }

  addVehicle(){
    this.vehicleService.addVehicle(this.vehicle)
      .subscribe( (data:VehicleModel) => {
        
        this.car = {
          id           : '',
          vehicle_id   : data.id,
          distance     : '', 
          bodytype     : 0,
          doors        : 0,
          features     : JSON.stringify(this.selFeatures),
          horsepower   : 0,
          transmission : this.newForm.value.transmission,
          color        : this.newForm.value.color,
          fueltype     : this.newForm.value.fueltype,
          regionalspecs: 0,
          imgincrement : 0,
          imgfiles     : '[]'
        }
        this.addCar()
      });
  }

  addCar(){
    this.carService.addCar(this.car)
      .subscribe( (data:CarModel) => {
        this.car_id = data.id;
      });
  }

}
