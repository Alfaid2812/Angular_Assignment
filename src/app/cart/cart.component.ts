import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  products: any;
  total: any;
  cartItems: any;
  order: any;


  constructor(private service: AuthService, private router: Router) {
    this.total = 0;
    this.products = service.getCartItems();
    this.products.forEach((element: any) => {
      this.total = this.total + parseInt(element.price);
    });
  }

  deleteCartproducts(products: any) {
    const i = this.products.findIndex((element: any) => {
      return element.id == products.id;
    });
    this.products.splice(i, 1);
    this.total = this.total - products.price;
  }

  purchase(order: any) {
    this.service.purchase(order);
    this.router.navigate(['/orders']);
  }

}
