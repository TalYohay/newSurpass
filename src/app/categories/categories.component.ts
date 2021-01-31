import { Component, OnInit } from '@angular/core';
import  Product  from 'src/app/interfaces/Product';
import { map, filter} from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  featuredProducts:Product[]

  constructor(public productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .pipe(
        map((products:Product[]) => products.filter(product =>  product.id == 5 || product.id == 25 || product.id == 14 || product.id == 36))
    )
    .subscribe((data: Product[]) => {
        this.featuredProducts = data;
        console.log("featured Products:", this.featuredProducts);
    });
};

}
