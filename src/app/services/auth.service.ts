

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public userService: UserService, public router: Router) { }


  canActivate(): boolean{

    const checkout = localStorage.getItem('product');
    const loggedIn = this.userService.loggedIn();
    if(checkout && loggedIn){
      return true;
    }else {
      this.router.navigate(["/account"]);
      return false;
    }
    
  }
}
