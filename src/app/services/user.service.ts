
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { tokenNotExpired } from 'angular2-jwt';




@Injectable({
  providedIn: 'root'
})
export class UserService {
    name: String;
    email: String;
    password: String;
    authToken: any;
    user:User;



//     uri = 'http://localhost:5000/api'
    uri = `https://newsurpass.herokuapp.com/api`

  constructor(public http: HttpClient, public router: Router) { }

  public Signup(body) {
    return this.http.post(`${this.uri}/user/signup`, body,{
      observe:'body'
    }); 
  }
    

    public Login(user){ 
    return this.http.post(`${this.uri}/user/login`,user) 
  }

  getPorfile(){

    const token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': token
    });
    
    const httpOptions = {
      headers: headers
    };
    return this.http.get(`${this.uri}/user/profile`, httpOptions);
    };

    getProfileOrders(){
      
    const token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': token
    });
    
    const httpOptions = {
      headers: headers
    };
    return this.http.get(`${this.uri}/user/profile/orders`, httpOptions)
    .pipe(map(res => res['userOrders']));
    // .pipe(map(res => res['Orders']));
    }


    loggedIn(){
      return localStorage.getItem('id_token');
    }
  
    loggedOut(){
     return localStorage.getItem('id_token') == null

    }

  storeUserData(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_token')
    localStorage.removeItem('user')
  }


}


