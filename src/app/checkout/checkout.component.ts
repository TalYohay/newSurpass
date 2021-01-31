import { Component, OnInit, HostListener } from '@angular/core';
import {ProductService} from '../services/product.service';
import Product from '../interfaces/Product';
import {FormGroup, FormControl, Validators, FormBuilder, NgForm} from '@angular/forms';
import { ConnectionService } from 'src/app/services/connection.service';
import {Router} from '@angular/router';
import OrderDetails from '../interfaces/OrderDetails';
import {OrderService} from '../services/order.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  productAddedToCart : Product[];
  orderDetails: OrderDetails;
  orderItems:any[]
  allTotal : number;
  cartItemCount:any;
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  numberRegex = /^[0-9]*$/
  cvvRegex = /^[0-9]{3,4}$/
  expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
  creditCardRegex = /4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11}/
  checkOutForm: FormGroup;
  disabledSubmitButton: boolean = true;
  globalResponse: any;


  
  @HostListener('input') oninput() {

    if (this.checkOutForm.valid) {
      this.disabledSubmitButton = false;
      }
    }


  constructor(public productService: ProductService, 
    public fb: FormBuilder, 
    public connectionService: ConnectionService,
    public router: Router, public orderService: OrderService,)
    {}



  
  ngOnInit() {
    this.productAddedToCart = JSON.parse(localStorage.getItem('product'));
    // this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
    this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));



    this.checkOutForm = this.fb.group({
      firstName : [null, Validators.required],
      lastName : [null, Validators.required],
      phone : [null, Validators.required],
      email : [null, Validators.required],
      address : [null, Validators.required],
      country: ['',Validators.required],
      city : ['', Validators.required],
      nameOnCard : [null, Validators.required],
      creditCardNumber: [null, Validators.required],
      exp: [null, Validators.required],
      cvv: [null, Validators.required],
      message: [''],
      contactFormCopy: ['']
  });
  };

  confirmOrder(){
    let orderDetails: any = {};
    orderDetails.firstName = this.checkOutForm.controls['firstName'].value;
    orderDetails.lastName = this.checkOutForm.controls['lastName'].value;
    orderDetails.phone = this.checkOutForm.controls['phone'].value;
    orderDetails.address = this.checkOutForm.controls['address'].value;
    orderDetails.country = this.checkOutForm.controls['country'].value;
    orderDetails.city = this.checkOutForm.controls['city'].value;
    orderDetails.email = this.checkOutForm.controls['email'].value;
    orderDetails.message = this.checkOutForm.controls['message'].value;
    

    this.orderItems=[]
    for (let i in this.productAddedToCart) {
      this.orderItems.push({
        _id: this.productAddedToCart[i]._id,
        product_Quantity: this.productAddedToCart[i].product_Quantity
      });
   }
   orderDetails.orderItems = this.orderItems
    console.log("orderDetails:", orderDetails)
    this.connectionService.sendReceipt(this.checkOutForm.value, orderDetails).subscribe((res) =>{
      console.log("res is:", res);
    });
    this.orderService.CreateOrder(orderDetails).subscribe((data) => {
      console.log("data is:", data)
      this.globalResponse = data 
      console.log("globalResponse is:", this.globalResponse)
    });
      alert('Your order has been received.');
      this.checkOutForm.reset();
      this.disabledSubmitButton = true;
      this.router.navigate(['/']);
      localStorage.removeItem('product');
      localStorage.removeItem('cartItemCount');

    };
  
  calculateAllTotal(productAddedToCart:Product[]){    
    let total = 0;
    for (let i in productAddedToCart){
      total = total + (productAddedToCart[i].product_Quantity * productAddedToCart[i].product_Price)
      console.log("Item:", productAddedToCart[i]);
    }
    this.allTotal = total;
  }

  isValid(controlName){
    return this.checkOutForm.get(controlName).invalid && this.checkOutForm.get(controlName).touched;
  }
}
