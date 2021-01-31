// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {

//   transform(value: any, ...args: any[]): any {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';
import Product from './interfaces/Product';

@Pipe({
  name:'productFilter',
  pure: false // impure pipe
})
export class SearchPipe implements PipeTransform {

  // transform(value:any, arg ?: any): any {
  //   if(!value) return null;
  //   if(!arg) return value;
    
  //   arg = arg.toLowerCase();

  //   return value.filter(function(myData){
  //     return (JSON.stringify(myData.name).toLowerCase().includes(arg) || JSON.stringify(myData.description).toLowerCase().includes(arg));
  //   });
  // }
  transform(products:Product[], searchTerm : string): Product[] {
    if(!products || !searchTerm){
      return products;
    }
    return products.filter(product => 
      product.product_Name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
  }
}