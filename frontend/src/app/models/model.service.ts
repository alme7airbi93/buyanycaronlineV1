import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModelModel } from './model.model';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getModelById(id: string){
    return this.http.get<ModelModel>(this.commonService.baseurl + '/models/' + id);
  }

  getAllModels(){
    return this.http.get<ModelModel[]>(this.commonService.baseurl + '/models');
  }

  getAllModelByMakeId(make_id: string){
    return this.http.get<ModelModel[]>(this.commonService.baseurl + '/models/makeid/' + make_id);
  }
}