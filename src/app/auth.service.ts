import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cartItems: any;

  constructor(private http: HttpClientModule) {
    this.cartItems = [];
   }

  addToCart(product: any){
    this.cartItems.push(product)
  }

  getCartItems(): any {
    return this.cartItems;
  }

  setCartItems() {
    this.cartItems.splice();
  }

}
