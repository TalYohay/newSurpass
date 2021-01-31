import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {

  
// uri: string = 'http://localhost:3000/send';
// urlReceipt: string  = 'http://localhost:3000/sendReceipt';


    uri = `https://newsurpass.herokuapp.com/`
    // urlReceipt = `https://surpassapp.herokuapp.com/api/sendReceipt`
constructor(public http: HttpClient) { }

sendMessage(messageContent: any) {
  return this.http.post(`${this.uri}/send`,
  JSON.stringify(messageContent),
  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
}

sendReceipt(messageContent: any, order){
  return this.http.post(`${this.uri}/sendReceipt`,
    JSON.stringify(messageContent, order),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
}



}