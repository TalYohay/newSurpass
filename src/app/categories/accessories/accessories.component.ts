import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../services/product.service';

import  Product  from 'src/app/interfaces/Product';
import { map, filter} from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories: Product[];
  cartItemCount:any;
  productAddedToCart: Product[];
  AddedMessage: boolean;
  RemovedMessage: boolean;
  searchTerm: any;
  pageActual: any;
  i: any


  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .pipe(
        map((products:Product[]) => products.filter(product =>  product.category == 'Accessories'))
    )
    .subscribe((data: Product[]) => {
        this.accessories = data;
        console.log("Recommended Products:", this.accessories);
    });
    this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount)); 
};


AddToCart(product:Product){
  this.productService.OnAddCart(product);
  this.AddedMessage = true;
  setTimeout(()=> this.AddedMessage = false,1000);
}

RemoveFromCart(product:Product){
  this.productService.removeCartProduct(product);
  this.RemovedMessage = true;
  setTimeout(()=> this.RemovedMessage = false,1000);


  // this.productAddedToCart=this.productService.getProductFromCart();
  // let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name)
  // if(cartItem){
  //   this.RemovedMessage = true;
  //   setTimeout(()=> this.RemovedMessage = false,1000);
  //     }
  }
CountCartQuantity(product:Product){
  this.productService.countQuantity(product);
}


  }

