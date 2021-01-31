import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import Product from '../interfaces/Product';
import { UserService } from '../services/user.service';




@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productAddedToCart : Product[];
  allTotal : number;
  cartItemCount:any;


  constructor(public productService: ProductService, public userService: UserService) { }

  ngOnInit() {
    this.productAddedToCart = this.productService.getProductFromCart();
    // this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
    this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));

    
  }

  onAddQuantity(product:Product){
    this.cartItemCount = localStorage.getItem("cartItemCount");
    // this.productAddedToCart=this.productService.getProductFromCart();
    this.productAddedToCart.find(p=>p.id==product.id).product_Quantity = product.product_Quantity +1;
    // localStorage.setItem("product", JSON.stringify(this.productAddedToCart));
    this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
  }

  onRemoveQuantity(product:Product){
    this.cartItemCount = localStorage.getItem("cartItemCount");
    // this.productAddedToCart=this.productService.getProductFromCart();
    this.productAddedToCart.find(p=>p.id==product.id).product_Quantity = product.product_Quantity -1; 
    if(product.product_Quantity <=0){
      let index = this.productAddedToCart.indexOf(product);
      this.productAddedToCart.splice(index, 1);
  }
  // localStorage.setItem("product", JSON.stringify(this.productAddedToCart));
  this.productService.addProductToCart(this.productAddedToCart);
  this.calculateAllTotal(this.productAddedToCart);
  if(this.cartItemCount > 0){ 
    this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
    this.cartItemCount--;
    console.log("cartItemCount:" , this.cartItemCount);  
    localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
    if(this.cartItemCount <=0){
      this.productService.clearCart();
      }
    }


}

removeProduct(product:Product){
  this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
  this.productAddedToCart=this.productService.getProductFromCart();
  let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name)
  if(cartItem){
    for(let i =0; i<this.productAddedToCart.length; i++)
    if(this.productAddedToCart[i].product_Name == product.product_Name){
      this.cartItemCount = this.cartItemCount - this.productAddedToCart[i].product_Quantity;
      this.productAddedToCart.splice(i,1)
    }  
    localStorage.setItem("product",JSON.stringify(this.productAddedToCart))
    localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
    if(this.cartItemCount <=0){
      this.productService.clearCart();
      }
    
  }
}


CountCartQuantity(product:Product){
  this.productService.countQuantity(product);
}


  calculateAllTotal(productAddedToCart:Product[]){    
    let total = 0;
    for (let i in productAddedToCart){
      total = total + (productAddedToCart[i].product_Quantity * productAddedToCart[i].product_Price)
      console.log("Item:", productAddedToCart[i]);
    }
    this.allTotal = total;
  }


  cartIsEmpty(){
    return localStorage.getItem("cartItemCount") == null
    }


  itemInCart(){
    return localStorage.getItem("product");
  }

  clearCart(){
    let alert = confirm("Clear cart?");
    if(alert){
      this.productService.clearCart();
    } 
}


}