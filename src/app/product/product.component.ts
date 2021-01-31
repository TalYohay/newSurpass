import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import  Product  from '../interfaces/Product';
import { map, filter} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData: Product;
  productAddedToCart: Product[];
  productID: any;
  cartItemCount:any;
  recommendedProducts: Product[];
  allProducts:Product[];
  // allProducts:Observable< Product> = new Observable< Product>();
  currentProduct: Product;
  product: Product;
  AddedMessage: boolean;
  RemovedMessage: boolean;
 
  

  constructor(public productService: ProductService, public route: Router, public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productID = this.actRoute.snapshot.params['id'];
    // this.currentProduct = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.productID);   
    this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));
    this.findRecommendedProducts()    
  };

  loadProductDetails(productID){
    this.productService.getProductById(productID).subscribe((product:Product) => {
      this.productData=product;
      console.log("Product Data is:", this.productData)
      return this.productData
    });
  };
 

  findRecommendedProducts() {
    console.log("Current Product is:" , this.productData);
    this.productService.getProducts()
    .pipe(
        map((products:Product[]) => products.filter(product =>  product.category == this.productData.category))
    )
    .subscribe((data: Product[]) => {
        this.recommendedProducts = data;
        console.log("Recommended Products:", this.recommendedProducts);
    });
    
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
}
  CountCartQuantity(product:Product){
    this.productService.countQuantity(product);
  }
}