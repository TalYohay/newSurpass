import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../services/user.service'
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { User } from '../interfaces/User';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  // providers: [UserService]
})
export class SignupComponent implements OnInit {
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  showSuccessMessage: boolean;
  serverErrorMessages: boolean;
  user: User
  signUpForm: FormGroup
  disabledSubmitButton: boolean = true;



  constructor(public userService: UserService, public fb: FormBuilder, ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name : [null, Validators.required],
      email : [null, Validators.required],
      password : [null, [Validators.required, Validators.minLength(4)]],
  });
  }

  @HostListener('input') oninput() {

    if (this.signUpForm.valid) {
      this.disabledSubmitButton = false;
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
