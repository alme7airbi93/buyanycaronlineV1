import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './car.model';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient,
              private commonService: CommonService) { }

  getCarById(id: string){
    return this.http.get(this.commonService.baseurl + '/cars/' + id);
  }

  getCarByAdId(ad_id: string){
    return this.http.get(this.commonService.baseurl + '/cars/ad/' + ad_id);
  }
  
  getAllCar(){
    return this.http.get(this.commonService.baseurl + '/cars');
  }
  
  getSearchAllCar(search: any) {
    return this.http.post(this.commonService.baseurl + '/cars/search', search);
  }

  getSearchAllCarOnIndex(search: any) {
    return this.http.post(this.commonService.baseurl + '/cars/search-index', search);
  }

  getCarAloneById(id: string){
    return this.http.get(this.commonService.baseurl + '/cars/alone/' + id);
  }

  addCar(car:CarModel){
    return this.http.post(this.commonService.baseurl + '/cars', car);
  }
  
  updateCar(id:string, fname:string, fvalue:string){
    return this.http.put(this.commonService.baseurl + '/cars/' + id, {fname:fname, fvalue:fvalue});
  }

  updateCarImageById(id:string, imgFile:string){
    return this.http.put(this.commonService.baseurl + '/cars/img/' + id, {imgFile:imgFile});
  }

  deleteCarByVehicleId(vehicle_id: string){
    return this.http.delete(this.commonService.baseurl + '/cars/vehicle/' + vehicle_id);
  }
}