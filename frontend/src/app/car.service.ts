import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CarModel } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  getCarById(id: String){
    return this.http.get(this.baseurl + 'cardetails/list/' + id);
  }

  /*getAllCars(){
    return this.http.get<CarModel[]>(this.baseurl + 'Cars');
  }
  
  addCar(car: CarModel){
    return this.http.post(this.baseurl + 'Cars', car);
  }

  deleteCar(id: String){
    return this.http.delete(this.baseurl + 'Cars' + '/' + id);
  }

  updateCar(car: CarModel){
    return this.http.put(this.baseurl + 'Cars' + '/' + car.id, car);
  }*/
}