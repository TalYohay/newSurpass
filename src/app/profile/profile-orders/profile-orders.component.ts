import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import OrderDetails from 'src/app/interfaces/OrderDetails';
import { map, filter} from 'rxjs/operators';
@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.css']
})
export class ProfileOrdersComponent implements OnInit {

  myOrders: OrderDetails[];
  constructor(public userService : UserService) { }

  ngOnInit() {
    this.userService.getProfileOrders().subscribe((data:OrderDetails[]) =>{
      this.myOrders = data
      console.log("My Orders:", this.myOrders);
    })
    
    

  }

    NoOrders(){
    this.myOrders.length < 0;
    return true
      
    }

    HaveOrders(){
       this.myOrders.length > 0
       
    }
  }

