import { Component, OnInit } from '@angular/core';

import { Router }            from "@angular/router";

import { AdModel }           from '../ad.model';
import { AdService }         from '../ad.service';
import { VehicleModel }      from '../vehicle.model';
import { VehicleService }    from '../vehicle.service';
import { CarModel }          from '../car.model';
import { CarService }        from '../car.service';

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

  features   : string[];

  constructor(private adService      : AdService,
              private vehicleService : VehicleService, 
              private carService     : CarService, 
              private router         : Router) { }
  ngOnInit() {

    let car_id = localStorage.getItem("car_id");
    if(!car_id){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }
    this.car = {};

    this.getAllAd();
    //this.getAllVehicle();

    //this.getCarById(car_id);

    $(document).ready(function() {
      
      /*var slideIndex=0;
      var imageContainer=$(".adSelectedItem-image");
      function previewImageLeft(){
        slideIndex-=1;
        if(slideIndex<0)slideIndex=imageContainer.length-1;
        setImage();        
      }
      function previewImageRight(){
        slideIndex+=1;
        if(slideIndex>imageContainer.length-1)slideIndex=0;
        setImage();
      }
      function setImage(){
        var imageSrc= imageContainer.eq(slideIndex).find('img').attr('src');
        $("#adSelected-previewImage").find('img').attr('src',imageSrc);
      }*/
      var slideIndex=0;
      var imageContainer=$(".adSelectedItem-image");
      
      $(".adSelectedItem-image").click(function() {
        var imageSrc= $(this).find('img').attr('src');
        $("#adSelected-previewImage").find('img').attr('src',imageSrc);
      });
      
      $("#vd-previewImageLeft").click(function() {
        slideIndex-=1;
        if(slideIndex<0)slideIndex=imageContainer.length-1;
        setImage();
      });

      $("#vd-previewImageRight").click(function() {
        slideIndex+=1;
        if(slideIndex>imageContainer.length-1)slideIndex=0;
        setImage();
      });
      
      function setImage(){
        var imageSrc= imageContainer.eq(slideIndex).find('img').attr('src');
        $("#adSelected-previewImage").find('img').attr('src',imageSrc);
      }
    });
  }

  getAllAd(): void {
    this.adService.getAllAd().subscribe(data=>{
      this.ads = data;
      console.log(data);
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
      this.features = JSON.parse(data.features);
      //location.reload();
      console.log(data);
    });
  }

  deleteAd(ad: AdModel){
    this.adService.deleteAd(ad.id).subscribe(data=>{
      console.log(data);
      this.deleteVehicleByAdId(ad.id);
      this.getAllAd();
    });
  }

  /*getAllVehicle(): void {
    this.vehicleService.getAllVehicle().subscribe(data=>{
      this.vehicles = data;
      console.log(data);
    });
  };

  deleteVehicle(vehicle: VehicleModel){
    this.vehicleService.deleteVehicle(vehicle.id).subscribe(data=>{
      console.log(data);
      this.getAllVehicle();
    });
  }*/

  deleteVehicleByAdId(ad_id:string){
    this.vehicleService.deleteVehicleByAdId(ad_id).subscribe((data:any)=>{
      console.log(data);
      this.deleteCarByVehicleId(data.id);
    });
  }

  /*getAllCar(): void {
    this.carService.getAllCar().subscribe(data=>{
      this.cars = data;
      console.log(data);
    });
  };

  deleteCar(car: CarModel){
    this.carService.deleteCar(car.id).subscribe(data=>{
      console.log(data);
      this.getAllCar();
    });
  }*/

  deleteCarByVehicleId(vehicle_id:string){
    this.carService.deleteCarByVehicleId(vehicle_id).subscribe(data=>{
      console.log(data);
    });
  }

}
