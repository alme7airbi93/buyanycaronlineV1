import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VehicleModel } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  /*getAllVehicles(){
    return this.http.get<VehicleModel[]>(this.baseurl + 'Vehicles');
  }*/
  
  getVehicleById(id: string){
    console.log("getVehicle..." + this.baseurl + 'vehicledetails/list' + '/' + id);
    
    return this.http.get<VehicleModel[]>(this.baseurl + 'vehicledetails/list' + '/' + id);
  }

  /*addVehicle(vehicle: VehicleModel){
    return this.http.post(this.baseurl + 'Vehicles', vehicle);
  }

  deleteVehicle(id: string){
    return this.http.delete(this.baseurl + 'Vehicles' + '/' + id);
  }

  updateVehicle(vehicle: VehicleModel){
    return this.http.put(this.baseurl + 'Vehicles' + '/' + vehicle.id, vehicle);
  }*/
}