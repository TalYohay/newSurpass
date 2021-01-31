import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../services/user.service'
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  LoginFormSection:any;
  RegFormSection:any;
  indicator:any;
  loginForm: FormGroup
  email: String;
  password: String;
  user:User
  loginFailed: boolean;
  disabledSubmitButton: boolean = true;
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  showSuccessMessage: boolean;
  serverErrorMessages: boolean;
  signUpForm: FormGroup

  constructor(public userService: UserService, public router: Router, public fb: FormBuilder) { }
  @HostListener('input') oninput() {

    if (this.loginForm.valid) {
      this.disabledSubmitButton = false;
      }
    }

  ngOnInit() {
    this.LoginFormSection = document.getElementById("LoginFormSection");
    this.RegFormSection = document.getElementById("RegFormSection");
    this.indicator = document.getElementById("indicator");

    this.loginForm = this.fb.group({
      email : [null, Validators.required],
      password : [null, Validators.required],

  }),
  this.signUpForm = this.fb.group({
    name : [null, Validators.required],
    email : [null, Validators.required],
    password : [null, [Validators.required, Validators.minLength(4)]],
});
}
  registerSection() {
    this.RegFormSection.style.transform = "translateX(0px)";
    this.LoginFormSection.style.transform = "translateX(0px)";
    this.indicator.style.transform = "translateX(100px)";
}

loginSection() {
    this.RegFormSection.style.transform = "translateX(300px)";
    this.LoginFormSection.style.transform = "translateX(300px)";
    this.indicator.style.transform = "translateX(0px)";
}

login(){
  console.log("Login form:", this.loginForm.value);
  if(this.loginForm.valid){
  this.userService.Login(this.loginForm.value).subscribe(
    data => {
      console.log("data is:", data);
      this.userService.storeUserData(data['token'], data['user']);
      console.log("data.token is:",data['token'], "data.user is:", data['user']);
      
      this.router.navigate(['/profile'])
    },
    err=>{
      console.log( err, "Login failed!")
      this.loginFailed = true;
      setTimeout(()=> this.loginFailed = false,4000);
     }
    );
}
}

signUp(){
  // let userDetails: any = {}
  // userDetails.name = this.signUpForm.controls['name'].value;
  // userDetails.email = this.signUpForm.controls['email'].value;
  // userDetails.password = this.signUpForm.controls['password'].value;
  this.userService.Signup(this.signUpForm.value).subscribe(
    res => {
      this.showSuccessMessage = true;
      setTimeout(()=> this.showSuccessMessage = false,4000);
      this.signUpForm.reset()
    this.signUpForm.setValue({
      name : '',
      email: '',
      password: ''
    })          
    },
    
    err =>{
        this.serverErrorMessages = true;
        
    });

}

}