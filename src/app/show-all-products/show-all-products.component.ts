import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import Product from '../interfaces/Product';
// import Navbar from '../navbar/navbar.component';
import { Subscriber } from 'rxjs';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css'],
  
})
export class ShowAllProductsComponent implements OnInit {
  lstProducts: Product[];
  productAddedToCart: Product[];
  count:number = 0;
  pageActual: number = 1;
  searchTerm : string;
  cartItemCount:any;
  i: any;

  constructor(public productService : ProductService) { }
  
  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.lstProducts = data;
    },
    this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount))
  )};
  
    OnAddCart(product:Product){
      console.log(product);
    
      this.productAddedToCart=this.productService.getProductFromCart();
      if(this.productAddedToCart==null){
        console.log("This array is empty")
        this.productAddedToCart=[];
        this.productAddedToCart.push(product);
        this.productService.addProductToCart(this.productAddedToCart);
        console.log('Product added to cart');
      }
      else{
        let tempProduct = this.productAddedToCart.find(p => p.id == product.id);
        if(tempProduct == null){
          this.productAddedToCart.push(product);
          this.productService.addProductToCart(this.productAddedToCart);
          console.log('Product added to cart.');
        }
        else{
          tempProduct.product_Quantity++;
          // this.productAddedToCart.find(p=>p.id==product.id).product_Quantity = product.product_Quantity +1;
          this.productService.addProductToCart(this.productAddedToCart);
        }
      }
    }
    

    removeCartProduct(product: Product){
      this.cartItemCount = localStorage.getItem("cartItemCount");
      this.productAddedToCart=this.productService.getProductFromCart();
      let cartItem = this.productAddedToCart.find(p => p.id == product.id)
      if(cartItem){
        
        let json = JSON.parse(localStorage.getItem("product"));
        
        for(let i = 0; i<json.length; i++){
          if(json[i].id == product.id){
            //
          // let temp = this.productAddedToCart.find(p=>p.id==product.id);
          json[i].product_Quantity--;
          // temp.product_Quantity --;
            if(json[i].product_Quantity <=0){
            //
              console.log(product.id);
              console.log("Prodct removed from cart ");
              //debugger;
              json.splice(i,1);
          }
        }
        localStorage.setItem("product",JSON.stringify(json))
      }
      if(this.cartItemCount > 0){ 
      this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
      this.cartItemCount--;
      console.log("cartItemCount:" , this.cartItemCount);  
      localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
      return this.cartItemCount;
      }
      else{
        this.cartItemCount = 0;
        return this.cartItemCount
      }
    }

  }

    countQuantity(product:any){
      this.productAddedToCart = this.productService.getProductFromCart();
      let cartItem = this.productAddedToCart.find(p => p.id == product.id)
      if(cartItem){
        let json = JSON.parse(localStorage.getItem("product"));

        for(let i = 0; i<json.length; i++){
          if(localStorage.getItem("cartItemCount")){
              
            this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
            this.cartItemCount++;
            console.log("cartItemCount:" , this.cartItemCount);  
            localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
            return this.cartItemCount;
            }
          else{
            this.cartItemCount++;
            console.log("cartItemCount:" , this.cartItemCount);  
            localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
            return this.cartItemCount;
          }
        }
        
       }
     }
     
    // sendNumber() {
    //   this.productService.sendNumber(this.countQuantity(this.cartItemCount));
    // }
  
    increament() {
      
      this.count += 1;
      console.log("count:", this.count);
      return this.count;
    }


  }

