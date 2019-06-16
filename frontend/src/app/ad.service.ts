import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AdModel } from './ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000";

  getAdById(id: string){
    return this.http.get<AdModel>(this.baseurl + '/ads/' + id);
  }

  getAllAd(){
    return this.http.get<AdModel[]>(this.baseurl + '/ads');
  }

  getAllAdByUserId(user_id: string){
    return this.http.get<AdModel[]>(this.baseurl + '/ads/userid/' + user_id);
  }

  addAd(ad:AdModel){
    return this.http.post(this.baseurl + '/ads', ad);
  }

  updateAd(id:string, fname:string, fvalue:string){
    return this.http.put(this.baseurl + '/ads/' + id, {fname:fname, fvalue:fvalue});
  }

  deleteAd(id: string){
    return this.http.delete(this.baseurl + '/ads/' + id);
  }
}