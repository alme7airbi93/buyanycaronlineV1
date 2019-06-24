import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MakeModel } from './make.model';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getMakeById(id: string){
    return this.http.get<MakeModel>(this.commonService.baseurl + '/makes/' + id);
  }

  getAllMakes(){
    return this.http.get<MakeModel[]>(this.commonService.baseurl + '/makes');
  }
}