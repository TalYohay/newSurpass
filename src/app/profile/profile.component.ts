import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: any;
  user: any
  username = '';
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {

    this.userService.getPorfile().subscribe(data =>{
      this.user = data['user']
      error => this.router.navigate(['/main/login'])
    })
}
//  this.userService.getPorfile()

  }

