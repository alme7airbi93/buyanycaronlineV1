import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})
export class BillingInfoService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getBillingInfoById(id: string){
    return this.http.get(this.commonService.baseurl + '/billinginfos/' + id);
  }

  getAllBillingInfo(){
    return this.http.get(this.commonService.baseurl + '/billinginfos');
  }

  updateBillingInfo(user_id:string, fname:string, fvalue:string){
    return this.http.put(this.commonService.baseurl + '/billinginfos/' + user_id, {fname:fname, fvalue:fvalue});
  }

}