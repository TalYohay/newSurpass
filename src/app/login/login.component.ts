import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../services/user.service'
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {User} from '../interfaces/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  email: String;
  password: String;
  user:User
  loginFailed: boolean;
  disabledSubmitButton: boolean = true;
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  constructor(public userService: UserService, public router: Router, public fb: FormBuilder) {

   }

   @HostListener('input') oninput() {

    if (this.loginForm.valid) {
      this.disabledSubmitButton = false;
      }
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : [null, Validators.required],
      password : [null, Validators.required],
    })
  }

  isValid(controlName){
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }


  login(){
    console.log("Login form:", this.loginForm.value);
    if(this.loginForm.valid){
    this.userService.Login(this.loginForm.value).subscribe(
      data => {
        console.log("data is:", data);
        this.userService.storeUserData(data['token'], data['user']);
        console.log("data.token is:",data['token'], "data.user is:", data['user']);
        location.reload()
        
        

      },
      err=>{
        console.log( err, "Login failed!")
        this.loginFailed = true;
        setTimeout(()=> this.loginFailed = false,4000);
       }
      );
  }

}



}
