import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingInfoService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000";

  getBillingInfoById(id: string){
    return this.http.get(this.baseurl + '/billinginfos/' + id);
  }

  getAllBillingInfo(){
    return this.http.get(this.baseurl + '/billinginfos');
  }

  updateBillingInfo(user_id:string, fname:string, fvalue:string){
    return this.http.put(this.baseurl + '/billinginfos/' + user_id, {fname:fname, fvalue:fvalue});
  }

}