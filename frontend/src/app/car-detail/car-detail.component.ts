import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CarService } from '../car.service';

declare var $: any;

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {

  car : any;
  slideIndex : number;

  constructor(private carService: CarService, 
              private router: Router) { }
  ngOnInit() {

    let car_id = localStorage.getItem("car_id");
    if(!car_id){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }
    this.car = {};

    this.getCarById(car_id);

    $(document).ready(function() {
      
      var slideIndex=0;
      var imageContainer=$(".vdItem-image");
      
      $(".vdItem-image").click(function() {
        var imageSrc= $(this).find('img').attr('src');
        $("#vd-previewImage").find('img').attr('src',imageSrc);
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

      $("#vd-previewImageFullScreen").click(function() {
        $("#popupImage").attr('src',$("#vd-previewImage").find('img').attr('src'));
        $("#imagePopupContainer").css('display','block');
        $("body").css('overflow','hidden');console.log("image");
      });

      $("#closeImagePopupContainer").click(function() {
        $("#imagePopupContainer").css('display','none');
        $("body").css('overflow','auto');
      });
  
      function setImage(){
        var imageSrc= imageContainer.eq(slideIndex).find('img').attr('src');
        $("#vd-previewImage").find('img').attr('src',imageSrc);
      }      
    });
  }

  getCarById(id : string){
    this.carService.getCarById(id).subscribe(data=>{
      this.car = data;
    });
  }
}
