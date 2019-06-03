import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CarModel } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})

export class CarDetailsComponent implements OnInit {

  car: CarModel;
  row: any;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.getCarById('-Lg0ae0f-ovBtrTVPDIH');
  }

  getCarById(id : String){
    this.carService.getCarById(id).subscribe(data=>{
      console.log("Helo"); console.log(data);
      this.row = data;
    });
  }

  /*getAllCars(): void {
    this.carService.getAllCars().subscribe(data=>{
      this.cars = data;
    });
  };

  addCar(): void {
    this.router.navigate(['add-car']);
  }

  deleteCar(car: CarModel){
    
    this.carService.deleteCar(car.id).subscribe(data=>{
      console.log(data);
      this.getAllCars();
    });
  }

  updateCar(car: CarModel){
    localStorage.removeItem("carId");
    localStorage.setItem("carId", car.id);
    this.router.navigate(['edit-car']);
  }*/

}
