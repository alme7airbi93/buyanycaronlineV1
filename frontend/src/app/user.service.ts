import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000";

  getUserById(id: string){
    return this.http.get(this.baseurl + '/users/' + id);
  }

  getAllUser(){
    return this.http.get(this.baseurl + '/users');
  }
  
  addUser(user: UserModel){
    return this.http.post(this.baseurl + '/users', user);
  }

  updateUser(user_id:string, fname:string, fvalue:string){
    return this.http.put(this.baseurl + '/users/' + user_id, {fname:fname, fvalue:fvalue});
  }

  /*getSearchAllUser(search: any) {
    return this.http.post(this.baseurl + '/users/search', search);
  }

  getSearchAllUserOnIndex(search: any) {
    return this.http.post(this.baseurl + '/users/search-index', search);
  }

  addUser(user: UserModel){
    return this.http.post(this.baseurl + 'User', user);
  }

  deleteUser(id: string){
    return this.http.delete(this.baseurl + 'User' + '/' + id);
  }

  updateUser(user: UserModel){
    return this.http.put(this.baseurl + 'User' + '/' + user.id, user);
  }*/
}