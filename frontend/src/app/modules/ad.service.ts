import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AdModel } from './ad.model';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getAdById(id: string){
    return this.http.get<AdModel>(this.commonService.baseurl + '/ads/' + id);
  }

  getAllAd(){
    return this.http.get<AdModel[]>(this.commonService.baseurl + '/ads');
  }

  getAllAdByUserId(user_id: string){
    return this.http.get<AdModel[]>(this.commonService.baseurl + '/ads/userid/' + user_id);
  }

  addAd(ad:AdModel){
    return this.http.post(this.commonService.baseurl + '/ads', ad);
  }

  updateAd(id:string, fname:string, fvalue:string){
    return this.http.put(this.commonService.baseurl + '/ads/' + id, {fname:fname, fvalue:fvalue});
  }

  increaseVisitCount(id:string){
    return this.http.put(this.commonService.baseurl + '/ads/increase/' + id, {fname:'visitcount', fvalue:''});
  }

  deleteAd(id: string){
    return this.http.delete(this.commonService.baseurl + '/ads/' + id);
  }
}