import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  cartItems : any[]= [];
  total : any;
 
  constructor(private route: ActivatedRoute,private service: AuthService){
  
    this.total = 0;
   
    this.route.queryParams.subscribe(params => {
      if (params && params['cartItems']) {
        this.cartItems = JSON.parse(params['cartItems']); // Parse the JSON string to get the cart items
        this.total = this.calculateTotal(this.cartItems); // Calculate the total price
      }
    }); 
  }
  ngOnInit(): void {
    this.cartItems = this.service.getCartItems();
    this.total = this.calculateTotal(this.cartItems);
  }

  calculateTotal(items: any[]): number {
    return items.reduce((total, item) => total + parseInt(item.price), 0);
  }

}
