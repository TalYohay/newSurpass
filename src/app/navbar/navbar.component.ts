import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import Product from '../interfaces/Product';
import { UserService } from '../services/user.service'
import {Router} from '@angular/router';
import { User } from '../interfaces/User';

// import { ShowAllProductsComponent } from '../show-all-products/show-all-products.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  number: any;
  subscription: Subscription;
  cartCount: any;
  productAddedToCart:any;
  cartItemCount :number
  product : Product
  user: User
  name: any
  MenuItems:any

  

  
  constructor(public productService : ProductService,public userService: UserService, public router: Router) {
    // this.subscription = this.productService.itemCount().subscribe(cartItemCount => { this.cartItemCount = cartItemCount });
    
    }

  ngOnInit() {
  
   this.cartCount = this.productService.getTotalProducts(); 
  //  this.cartItemCount = this.productService.itemCount(this.cartItemCount);
    this.userService.getPorfile().subscribe(data =>{
    this.user = data['user'],
    this.name = this.user.name;
    console.log("this user name:",this.user.name);
    // error => this.user = 'Profile'
  })
      // this.MenuItems.style.maxHeight = "0px";
      this.MenuItems = document.getElementById("MenuItems");
      this.MenuItems.style.maxHeight = "0px";
  }
  
  onLogoutClick(){
    this.userService.logout();
    console.log("You are logged out");
    this.router.navigate(['/']);
    return false;
  }



 


   menutoggle() {
    // document.getElementById("MenuItems").style.maxHeight = "0px";
      if (this.MenuItems.style.maxHeight == "0px") {
          this.MenuItems.style.maxHeight = "200px";
      } else {
          this.MenuItems.style.maxHeight = "0px";
      }
  }
  
}
