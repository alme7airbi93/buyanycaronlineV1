import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MakeModel } from './make.model';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000";

  getMakeById(id: string){
    return this.http.get<MakeModel>(this.baseurl + '/makes/' + id);
  }

  getAllMakes(){
    return this.http.get<MakeModel[]>(this.baseurl + '/makes');
  }
}