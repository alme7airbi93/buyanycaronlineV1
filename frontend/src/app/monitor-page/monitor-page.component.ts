import { Component, OnInit } from '@angular/core';

import { Router }            from "@angular/router";

import { AdModel }           from '../modules/ad.model';
import { AdService }         from '../modules/ad.service';
import { VehicleModel }      from '../modules/vehicle.model';
import { VehicleService }    from '../modules/vehicle.service';
import { CarModel }          from '../modules/car.model';
import { CarService }        from '../modules/car.service';
import { CommonService }          from '../modules/config'

declare var $: any;

@Component({
  selector      : 'app-monitor-page',
  templateUrl   : './monitor-page.component.html',
  styleUrls     : ['./monitor-page.component.css']
})

export class MonitorPageComponent implements OnInit {

  ads        : AdModel[];
  vehicles   : VehicleModel[];
  cars       : CarModel[];
  car        : any;
  slideIndex : number;
  imgFiles   : string[];
  previewImgFile : string;

  features   : string[];

  constructor(private adService      : AdService,
              private vehicleService : VehicleService, 
              private carService     : CarService,
              private commonService : CommonService,
              private router         : Router) { }
  ngOnInit() {

    /*let car_id = localStorage.getItem("car_id");
    if(!car_id){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }*/

    this.car = {};

    this.getAllAd();
    //this.getCarById('4CqIoK3oZrbVxPsffotO');

    $(document).ready(function() {
      
      var slideIndex=0;
      
      $("body").on("click", ".adSelectedItem-image", function() {
        var imageSrc= $(this).find('img').attr('src');
        $("#adSelected-previewImage").find('img').attr('src',imageSrc);
      });
      
      $("#vd-previewImageLeft").click(function() {
        slideIndex-=1;
        if(slideIndex<0)slideIndex=$(".adSelectedItem-image").length-1;
        setImage();
      });

      $("#vd-previewImageRight").click(function() {
        slideIndex+=1;
        if(slideIndex>$(".adSelectedItem-image").length-1)slideIndex=0;
        setImage();
      });
      
      function setImage(){
        var imageSrc= $(".adSelectedItem-image").eq(slideIndex).find('img').attr('src');
        $("#adSelected-previewImage").find('img').attr('src',imageSrc);
      }
    });
  }

  getAllAd(): void {
    this.adService.getAllAd().subscribe(data=>{
      this.ads = data;
      if(data[0])
        this.getCarByAdId(data[0].id);
      else
        this.car = {};
    });
  };

  getCarById(id : string){
    this.carService.getCarById(id).subscribe(data=>{
      this.car = data;
    });
  }

  getCarByAdId(ad_id : string){
    this.carService.getCarByAdId(ad_id).subscribe((data:any)=>{
      this.car = data;

      let imgFiles = [];
      this.imgFiles = [];
      this.previewImgFile = "";

      imgFiles = JSON.parse(data.imgfiles);
      for(let i = 0; i < imgFiles.length; i++) {
        this.imgFiles[i] = this.commonService.baseurl + "/uploads/cars/" + imgFiles[i];
        if(i == 0) this.previewImgFile = this.imgFiles[0];
      }

      this.features = JSON.parse(data.features);
    });
  }

  deleteAd(ad: AdModel){
    this.adService.deleteAd(ad.id).subscribe(data=>{
      this.deleteVehicleByAdId(ad.id);
      this.getAllAd();
    });
  }

  deleteVehicleByAdId(ad_id:string){
    this.vehicleService.deleteVehicleByAdId(ad_id).subscribe((data:any)=>{
      this.deleteCarByVehicleId(data.id);
    });
  }

  deleteCarByVehicleId(vehicle_id:string){
    this.carService.deleteCarByVehicleId(vehicle_id).subscribe(data=>{
    });
  }

}
