import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../interfaces/Product';
import { throwError } from 'rxjs';
import { Subject, Observable } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productAddedToCart: Product[];
  public subject = new Subject<any>();
  cartItemCount : number;
  cartCount : number;
  allTotal: number;
  userName:any;
  
  
      // uri = 'http://localhost:5000/api/products'
//       uri2 = 'http://localhost:5000/api'
      uri2 = `https://newsurpass.herokuapp.com/api`


  // Dependency Injection - Loosey couple 
  constructor(public http: HttpClient, public flashMessageService: FlashMessagesService) {
    // this.cartItemCount = this.itemCount();
    // this.productAddedToCart = this.getProductFromCart();
   }

    // Get list of all products
    getProducts(){
      return this.http.get(`${this.uri2}`);
    }

    //Get one Product

    getProductById(id){
    return this.http.get(`${this.uri2}/product/${id}`);
    }

    addProductToCart(product: any){
      localStorage.setItem("product", JSON.stringify(product))
    }

    getProductFromCart(){
      return JSON.parse(localStorage.getItem("product"));
    }
    getById(id: Number){
      return this.getProductFromCart().find(x => x.id === id);
    }

    removeProductFromCart(){
      return localStorage.removeItem("product");
    }

    errorHandler(error:Response){
      console.log(error);
      return throwError(error);
    }

    itemCount(){
      if(JSON.parse(localStorage.getItem("cartItemCount")) == null){
        return this.cartItemCount = 0;
      }else{
        return JSON.parse(localStorage.getItem("cartItemCount"))
      }
    }

    getCartList(){
      return this.productAddedToCart;
    }

   
  getTotalProducts(){
    this.productAddedToCart = this.getProductFromCart();
    if(this.productAddedToCart!= null){
      this.cartItemCount = this.productAddedToCart.length;
      return this.cartItemCount;
    }
    else{
      this.cartItemCount=0;
      return this.cartItemCount;
    }
  }


  getUserName(){
    let user = localStorage.getItem("user");
    let retrievedObject = JSON.parse(user)
    console.log(retrievedObject[1])
  }
  

//-----Add to cart Function-----//

  OnAddCart(product:Product){
    // this.flashMessageService.show('Product added to cart!', {cssClass:'alert-success', timeout: 4000});

    console.log(product);
    this.productAddedToCart=this.getProductFromCart();
    if(this.productAddedToCart==null){
      console.log("This array is empty")
      this.productAddedToCart=[];
      this.productAddedToCart.push(product);
      this.addProductToCart(this.productAddedToCart);
      console.log('Product added to cart');
    }
    else{
      let tempProduct = this.productAddedToCart.find(p => p.product_Name == product.product_Name);
      if(tempProduct == null){
        this.productAddedToCart.push(product);
        this.addProductToCart(this.productAddedToCart);
        console.log('Product added to cart.');
      }
      else{
        tempProduct.product_Quantity++;
        // this.productAddedToCart.find(p=>p.id==product.id).product_Quantity = product.product_Quantity +1;
        this.addProductToCart(this.productAddedToCart);
      }
    }
  }


//-----Remove from cart Function-----//


removeCartProduct(product: Product){
  // this.flashMessageService.show('Product removed from cart!', {cssClass:'alert-danger', timeout: 3000});
  this.productAddedToCart=this.getProductFromCart();
  let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name)
    if(cartItem){
      
        let json = JSON.parse(localStorage.getItem("product"));
        
        for(let i = 0; i<json.length; i++){
          if(json[i].product_Name == product.product_Name){
          json[i].product_Quantity--;
            if(json[i].product_Quantity <=0){
              console.log(product.product_Name);
              console.log("Prodct removed from cart");
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
        if(this.cartItemCount<=0){
          this.clearCart()
        }
      }
  }
}

//-----Count number of Products in the cart-----//


countQuantity(product:Product){
  this.productAddedToCart = this.getProductFromCart();
  let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name)
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
  clearCart(){
    localStorage.removeItem("product");
    this.cartItemCount = 0;
    localStorage.removeItem("cartItemCount");
  }


  calculateAllTotal(allItems:Product[]){    
    let total = 0;
    for (let i in allItems){
      total = total + (allItems[i].product_Quantity * allItems[i].product_Price)
      console.log("Item:", allItems[i]);
    }
    this.allTotal = total;
  }
}

