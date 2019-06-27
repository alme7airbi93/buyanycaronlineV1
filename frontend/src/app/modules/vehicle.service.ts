import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VehicleModel } from './vehicle.model';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getVehicleById(id: string){
    return this.http.get<VehicleModel>(this.commonService.baseurl + '/vehicles/' + id);
  }

  getAllVehicle(){
    return this.http.get<VehicleModel[]>(this.commonService.baseurl + '/vehicles');
  }

  addVehicle(vehicle:VehicleModel){
    return this.http.post(this.commonService.baseurl + '/vehicles', vehicle);
  }

  updateVehicle(id:string, fname:string, fvalue:string){
    return this.http.put(this.commonService.baseurl + '/vehicles/' + id, {fname:fname, fvalue:fvalue});
  }

  deleteVehicle(id: string){
    return this.http.delete(this.commonService.baseurl + '/vehicles/' + id);
  }

  deleteVehicleByAdId(ad_id: string){
    return this.http.delete(this.commonService.baseurl + '/vehicles/ad/' + ad_id);
  }
}