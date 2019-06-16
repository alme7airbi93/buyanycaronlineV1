import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModelModel } from './model.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000";

  getModelById(id: string){
    return this.http.get<ModelModel>(this.baseurl + '/models/' + id);
  }

  getAllModels(){
    return this.http.get<ModelModel[]>(this.baseurl + '/models');
  }

  getAllModelByMakeId(make_id: string){
    return this.http.get<ModelModel[]>(this.baseurl + '/models/makeid/' + make_id);
  }
}