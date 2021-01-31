
import Product from './Product';

export default class OrderDetails {
    firstName:String;
    lastName: String;
    email: String;
    phone: Number;
    address: String;
    country:String;
    city:String;
    message:String;
    // cartId: [{
    //     orderItems: [{type:Product, ref: 'Product', required: true}],
    // }];
    orderItems: [{type:Product, ref: 'Product', required: true}];
    UserId:String;
   

    createdAt = new Date();
}
    
