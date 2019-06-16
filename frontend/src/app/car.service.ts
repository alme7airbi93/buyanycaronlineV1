import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000";

  getCarById(id: string){
    return this.http.get(this.baseurl + '/cars/' + id);
  }

  getCarByAdId(ad_id: string){
    console.log(ad_id);
    return this.http.get(this.baseurl + '/cars/ad/' + ad_id);
  }
  
  getAllCar(){
    return this.http.get(this.baseurl + '/cars');
  }
  
  getSearchAllCar(search: any) {
    return this.http.post(this.baseurl + '/cars/search', search);
  }

  getSearchAllCarOnIndex(search: any) {
    return this.http.post(this.baseurl + '/cars/search-index', search);
  }

  addCar(car:CarModel){
    return this.http.post(this.baseurl + '/cars', car);
  }
  
  updateCar(id:string, fname:string, fvalue:string){
    return this.http.put(this.baseurl + '/cars/' + id, {fname:fname, fvalue:fvalue});
  }

  deleteCarByVehicleId(vehicle_id: string){
    return this.http.delete(this.baseurl + '/cars/vehicle/' + vehicle_id);
  }

  /*addCar(car: CarModel){
    return this.http.post(this.baseurl + 'Car', car);
  }

  deleteCar(id: string){
    return this.http.delete(this.baseurl + 'Car' + '/' + id);
  }

  updateCar(car: CarModel){
    return this.http.put(this.baseurl + 'Car' + '/' + car.id, car);
  }*/
}