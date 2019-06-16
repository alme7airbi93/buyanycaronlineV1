import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VehicleModel } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000";

  getVehicleById(id: string){
    return this.http.get<VehicleModel>(this.baseurl + '/vehicles/' + id);
  }

  getAllVehicle(){
    return this.http.get<VehicleModel[]>(this.baseurl + '/vehicles');
  }

  addVehicle(vehicle:VehicleModel){
    return this.http.post(this.baseurl + '/vehicles', vehicle);
  }

  updateVehicle(id:string, fname:string, fvalue:string){
    return this.http.put(this.baseurl + '/vehicles/' + id, {fname:fname, fvalue:fvalue});
  }

  deleteVehicle(id: string){
    return this.http.delete(this.baseurl + '/vehicles/' + id);
  }

  deleteVehicleByAdId(ad_id: string){
    return this.http.delete(this.baseurl + '/vehicles/ad/' + ad_id);
  }
}