import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  products: any;
  total:any;
  cartItems : any;


   constructor(private service: AuthService){
      this.total = 0;
      this.products = service.getCartItems();
      this.products.forEach((element: any) => {
      this.total = this.total +parseInt(element.price);
    });
   }

   deleteCartproducts(products: any) {
    const i = this.products.findIndex((element: any) => {
      return element.id == products.id;
    });
    this.products.splice(i, 1);
    this.total = this.total - products.price;
  }

  purchase(){
    this.products = [];
    this.total = 0;
    this.service.setCartItems();
  }

}
