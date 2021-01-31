import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  OrderDetails  from '../interfaces/OrderDetails';
import { Observable, of, throwError, pipe, observable} from "rxjs"
import { map, filter, catchError, mergeMap, observeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    uri = 'http://localhost:5000/api'
    // uri = `https://newsurpass.herokuapp.com/api`
    
  constructor(public http: HttpClient) { }

  getAllOrders(){
    return this.http.get(`${this.uri}/order`)
  }

  getOrderById(id){
    return this.http.get(`${this.uri}/order/${id}`)
  }


  CreateOrder(orderDetails:OrderDetails){
       
    const token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': token
    });
    
    const httpOptions = {
      headers: headers
    };
    return this.http.post(`${this.uri}/order`, orderDetails,httpOptions)
  }

  deleteOrderById(id){
    return this.http.delete(`${this.uri}/order/${id}`)
  }

  
}
