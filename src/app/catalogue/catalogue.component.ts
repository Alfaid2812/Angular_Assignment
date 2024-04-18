import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  products : any;
  cartProducts: any;

  constructor(private http: HttpClient,private service: AuthService){ 
    this.cartProducts = [];
  }
 
  ngOnInit(): void {
    this.http.get<any>('assets/products.json').subscribe((data) => {
      this.products= data.products;
    });
  }

  addToCart(product: any) {
    this.service.addToCart(product);
  }
}
