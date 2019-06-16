import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute}  from "@angular/router";
import { FormBuilder, FormGroup}  from "@angular/forms";
import { FormControl, Validators} from "@angular/forms";

import { AdModel }                from '../ad.model';
import { AdService }              from '../ad.service';
import { VehicleModel }           from '../vehicle.model';
import { VehicleService }         from '../vehicle.service';
import { CarModel }               from '../car.model';
import { CarService }             from '../car.service';
import { MakeModel }              from '../make.model';
import { MakeService }            from '../make.service';
import { ModelService }           from '../model.service';
import { ModelModel }             from '../model.model';
import { UploadService }          from '../upload.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})

export class NewAdComponent implements OnInit {

  user_id      : string;
  car_id       : string;
  ad           : AdModel;
  vehicle      : VehicleModel;
  car          : CarModel;

  makes        : MakeModel[];
  models       : ModelModel[];
  colors       : {};
  transmissions: {};
  years        : number[];
  fueltypes    : {};
  conditions   : {};
  features     : {};
  selectedMake : string;
  selFeatures  : any [];

  newForm      : FormGroup;
  uploadForm   : FormGroup;

  imgfile      : string;
  
  submitted = false;
  
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };
  
  baseurl: string = "http://localhost:3000";

  constructor(private formBuilder   : FormBuilder, 
              private adService     : AdService, 
              private vehicleService: VehicleService, 
              private carService    : CarService, 
              private makeService   : MakeService, 
              private modelService  : ModelService,
              private uploadService : UploadService,
              private route         : ActivatedRoute,
              private router        : Router) { }
  ngOnInit() {

    this.makes   = [
      {
        "id"    : "-Lg0ae0f-ovBtrTVPDIH",
        "value" : "MakeValue1"
      },
      {
        "id"    : "-Lg0ae0f-ovBtrTVPDII",
        "value" : "MakeValue2"
      }
    ];

    this.models   = [
      {
        "id"         : "-Lg0ae0f-ovBtrTVPDIH",
        "make_id"    : "-Lg0ae0f-ovBtrTVPDIH",
        "modelvalue" : "ModelModelValue11"
      },
      {
        "id"         : "-Lg0ae0f-ovBtrTVPDII",
        "make_id"    : "-Lg0ae0f-ovBtrTVPDII",
        "modelvalue" : "ModelModelValue21"
      },
      {
        "id"         : "-Lg0ae0f-ovBtrTVPDIJ",
        "make_id"    : "-Lg0ae0f-ovBtrTVPDII",
        "modelvalue" : "ModelModelValue22"
      }
    ];
    
    this.colors   = [
      {
        "id"         : "Red",
        "value"      : "Red"
      },
      {
        "id"         : "Blue",
        "value"      : "Blue"
      },
      {
        "id"         : "Green",
        "value"      : "Green"
      },
    ];

    this.transmissions   = [
      {
        "id"         : "Transmission1",
        "value"      : "Transmission1"
      },
      {
        "id"         : "Transmission2",
        "value"      : "Transmission2"
      }
    ];

    this.years   = [
      2017,
      2018,
      2019,
      2020
    ];
    
    this.fueltypes   = [
      {
        "id"         : "Fueltype1",
        "value"      : "Fueltype1"
      },
      {
        "id"         : "Fueltype2",
        "value"      : "Fueltype2"
      }
    ];
    
    this.conditions   = [
      {
        "id"         : "Condition1",
        "value"      : "Condition1"
      },
      {
        "id"         : "Condition2",
        "value"      : "Condition2"
      }
    ];

    this.features   = [
      {
        "id"         : "4 Wheel Drive",
        "value"      : "4 Wheel Drive"
      },
      {
        "id"         : "Cruise Control",
        "value"      : "Cruise Control"
      },
      {
        "id"         : "Bluetooth System",
        "value"      : "Bluetooth System"
      },
      {
        "id"         : "Air Conditioner",
        "value"      : "Air Conditioner"
      },
      {
        "id"         : "Other Feature",
        "value"      : "Other Feature"
      }
    ];

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

    //this.getAllMakes();

    let self = this;

    $(document).ready(function() {
      
      $("body").find("#newForm").submit(function(e) {
        
        e.preventDefault();
        
        $("#uploadPhoto-box").css("display","block");
        $("#publishButton-container").css("display","block");
        $("#uploadPhotoBox-container").css("opacity","1");

        self.selFeatures = [];
        var index = 0;
        $('input[type="checkbox"]:checked').each(function() {
          self.selFeatures[index] = this.value; index++;
        });
        self.onSubmit();

        /*

        var form_action = $(this).attr("action");

        var type = $(this).find("#type").val();
        var make = $(this).find("#make").val();
        var model = $(this).find("#model").val();
        var color = $(this).find("#color").val();
        var mile = $(this).find("#mile").val();
        var fuel = $(this).find("#fuel").val();
        var trans = $(this).find("#trans").val();
        var engine = $(this).find("#engine").val();
        var description = $(this).find("#description").val();
        
        var features_4wheel = $(this).find(".features_4wheel").prop('checked');
        var features_cruise = $(this).find(".features_cruise").prop('checked');
        var features_bluetooth = $(this).find(".features_bluetooth").prop('checked');
        var features_air = $(this).find(".features_air").prop('checked');
        
        $.ajax({
          dataType: 'json',
          type:'POST',
          url: form_action,
          data:{type:type, make:make, model:model, color:color, mile:mile, fuel:fuel, trans:trans, engine:engine, description: description,features_4wheel:features_4wheel,features_cruise:features_cruise,features_bluetooth:features_bluetooth,features_air:features_air}
        }).done(function(data){ alert('success');
          //toastr.success('Created Successfully.', 'Success Alert', {timeOut: altTimeOut});
        });*/

      });
    });
  }

  ngAfterViewInit() {
    $('.selectpicker').selectpicker('refresh');
  }
  
  getAllMakes(): void {
    this.makeService.getAllMakes().subscribe(data=>{

      this.makes = data;

    });
  };

  getModelByMakeId(make_id : string){
    this.modelService.getAllModelByMakeId(make_id).subscribe(data=>{

      this.models = data;

    });
  }
  
  onMakeChange(event:Event) {
    
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    this.getModelByMakeId(value);

  }

  onSubmit(){
    this.submitted = true;
    
    this.ad = {
        id          : '',
        title       : this.newForm.value.title, 
        price       : this.newForm.value.price,
        description : this.newForm.value.description,
        user_id     : this.user_id,
        city        : '',
        no          : 0,
        approve     : 0
    }
    
    this.addAd();

  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //console.log(file);
      this.uploadForm.get('carimg').setValue(file);
    }
  }

  onUploadSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('carimg').value);
    
    console.log(this.car_id);
    this.uploadService.upload(formData, this.car_id).subscribe(
      data => {
        if(data.success == true) {
          
          this.imgfile = this.baseurl + "/uploads/cars/" + data.filename;

          //data.filename = "nwpSgvkbVn4p1FEzGonj-1.png";
          //this.imgfile = "http://localhost:4200/assets/uploads/cars/BnnZnul0fjB2fkLLTAIB-1.png";
          console.log(this.imgfile);
          /*var html =`
            <div class="uploadPhotoBox-item">
							<div class="uploadPhotoBox-image">
								<img src="` + this.imgfile + `" />
							</div>
							<button class="uploadPhotoBox-delete">Delete</button>
						</div>
          `;*/

          //$("#uploadPhotoBoxItem-container").html(html);
          //$("#uploadPhotoBox-preview").find("img").attr('src', this.imgfile);
          
        }
      }
            
      //(res) => this.uploadResponse = res,
      //(err) => this.error = err
    );   
  }

  // get the form short name to access the form fields
  get f() { return this.newForm.controls; }
  
  addAd(){
    this.adService.addAd(this.ad)
      .subscribe( (data:AdModel) => {
        //console.log(data);
        
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
        //console.log(data);

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
          imgcount     : 0
        }
        console.log(this.car);

        this.addCar()
      });
  }

  addCar(){
    this.carService.addCar(this.car)
      .subscribe( (data:CarModel) => {
        console.log(data);
        this.car_id = data.id;
      });
  }

  /*addCar(): void {
    this.router.navigate(['add-car']);
  }

  deleteCar(car: CarModel){
    
    this.carService.deleteCar(car.id).subscribe(data=>{
      console.log(data);
      this.getAllCar();
    });
  }

  updateCar(car: CarModel){
    localStorage.removeItem("carId");
    localStorage.setItem("carId", car.id);
    this.router.navigate(['edit-car']);
  }*/

}
