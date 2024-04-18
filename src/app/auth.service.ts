import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { AnyARecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cartItems: any;
  orders: any;

  constructor(private http: HttpClient) {
    this.cartItems = [];
    this.orders = [];
   }

  addToCart(product: any){
    this.cartItems.push(product)
  }

  getCartItems(): any{
    return this.cartItems;
  }

  setCartItems() {
    this.cartItems.splice();
  }

  purchase(order: any){
    this.orders.push(order)
  }

  getOrders(): any {
    return this.orders;
  }

  setOrders() {
     this.orders.splice();
  }

}
