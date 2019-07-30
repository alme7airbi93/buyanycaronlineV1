import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from './user.model';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getUserById(id: string){
    return this.http.get(this.commonService.baseurl + '/users/' + id);
  }

  getAllUser(){
    return this.http.get(this.commonService.baseurl + '/users');
  }
  
  addUser(user: UserModel){
    return this.http.post(this.commonService.baseurl + '/users', user);
  }

  updateUser(user_id:string, fname:string, fvalue:string){
    return this.http.put(this.commonService.baseurl + '/users/' + user_id, {fname:fname, fvalue:fvalue});
  }

  updateUser2(user_id:string, user:UserModel){
    return this.http.put(this.commonService.baseurl + '/users2/' + user_id, {user:user});
  }
}