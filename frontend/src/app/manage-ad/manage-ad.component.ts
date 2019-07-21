import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";
import { ActivatedRoute }     from "@angular/router";
import { FormBuilder}         from "@angular/forms";
import { FormGroup}           from "@angular/forms";

import { AdModel }            from '../modules/ad.model';
import { AdService }          from '../modules/ad.service';
import { VehicleModel }       from '../modules/vehicle.model';
import { VehicleService }     from '../modules/vehicle.service';
import { CarModel }           from '../modules/car.model';
import { CarService }         from '../modules/car.service';
import { MakeModel }          from '../modules/make.model';
import { MakeService }        from '../modules/make.service';
import { ModelService }       from '../modules/model.service';
import { ModelModel }         from '../modules/model.model';
import { CommonService }      from '../modules/config'

declare var $: any;

@Component({
  selector    : 'app-manage-ad',
  templateUrl : './manage-ad.component.html',
  styleUrls   : ['./manage-ad.component.css']
})

export class ManageAdComponent implements OnInit {

  car         : any;
  car_id      : string;
  ads         : AdModel[];
  findForm    : FormGroup;
  //submitted = false;
  
  makes       : MakeModel[];
  models      : ModelModel[];
  colors        : {};
  transmissions : {};
  years         : number[];
  fueltypes     : {};
  conditions    : {};
  features      : {};

  imgFiles      : string[];
  previewImgFile: string;

  constructor(private formBuilder: FormBuilder, 
              private adService: AdService,
              private vehicleService: VehicleService,
              private carService: CarService,
              private makeService   : MakeService, 
              private modelService  : ModelService,
              private commonService : CommonService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {

    this.car = {};
    
    this.years        = this.commonService.years;
    this.fueltypes    = this.commonService.fueltypes;
    this.conditions   = this.commonService.conditions;
    this.transmissions= this.commonService.transmissions;
    this.colors       = this.commonService.colors;
    this.features     = this.commonService.features;

    let ad_id = this.route.snapshot.paramMap.get('ad_id');
    this.getCarByAdId(ad_id);
    this.getAllMakes();

    var self = this;
    
    $(document).ready(function() {
     
      $(".ba-input").change(function() {
        
        var fname = $(this).attr('id');
        var fvalue = $(this).val();
        
        $(this).parent("div").prev().find("a").text(fvalue);

        $(".fa-check").click();

        if( fname == 'title' || fname == 'price' || fname == 'description') {
          var id = $("#ad_id").val();
          self.updateAd(id, fname, fvalue);
        }
      });
      
      $(".ba-select").change(function() {
        
        var fname = $(this).attr('id');
        var fvalue = $(this).val();
        var text = fvalue;

        if(fname == 'make_id' || fname == 'model_id')
          text = $(this).find("option:selected").text();

        $(this).parent("div").prev().find("a").text(text);

        $(".fa-check").click();

        if(fname == 'make_id'  ||
           fname == 'model_id' ||
           fname == 'year'     ||
           fname == 'condition') {
              var id = $("#vehicle_id").val();
              self.updateVehicle(id, fname, fvalue);
        } else if (
           fname == 'color'        ||
           fname == 'transmission' ||
           fname == 'fueltype') {
              var id = $("#car_id").val();
              self.updateCar(id, fname, fvalue);
        }
      });

      $(".fa-pencil").click(function() {
        $(this).parent("div").removeClass("d-block");
        $(this).parent("div").addClass("d-none");

        $(this).parent("div").next().removeClass("d-none");
        $(this).parent("div").next().addClass("d-block");
        $(this).parent("div").next().find("input").focus();
        $(this).parent("div").next().find("select").focus();
      });
      
      $(".fa-check").click(function() {
        $(this).parent("div").removeClass("d-block");
        $(this).parent("div").addClass("d-none");

        $(this).parent("div").prev().removeClass("d-none");
        $(this).parent("div").prev().addClass("d-block");
      })

      $(".PhotoBox-image").click(function() {
        $("#PhotoBox-preview").html($(this).html());
      });

      $(".PhotoBox-delete").click(function() {
        $(this).parent(".PhotoBox-item").css('display', 'none');
      });

      $("body").on("click", ".PhotoBox-image", function() {
        var imageSrc= $(this).find('img').attr('src');
        $("#PhotoBox-preview").find('img').attr('src',imageSrc);
      });

    });

  }

  onMakeChange(event:Event) {
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    this.getModelByMakeId(value);
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
    this.adService.updateAd(this.car.ad_id, 'publish', 'true').subscribe(
      data => {
      }
    );   
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
  getCarByAdId(ad_id : string){
    this.carService.getCarByAdId(ad_id).subscribe((data:any)=>{
      this.car = data;
      this.car_id = data.id;
      this.getCarAloneById(this.car_id);    
    });
  }
  
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

  updateAd(id:string, fname:string, fvalue:string){
    this.adService.updateAd(id, fname, fvalue)
      .subscribe( data => {
      });
  }

  updateVehicle(id:string, fname:string, fvalue:string){
    this.vehicleService.updateVehicle(id, fname, fvalue)
      .subscribe( data => {
      });
  }

  updateCar(id:string, fname:string, fvalue:string){
    this.carService.updateCar(id, fname, fvalue)
      .subscribe( data => {
      });
  }

}
