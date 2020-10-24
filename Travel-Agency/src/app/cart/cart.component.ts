import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = [""];
  total:  0
  

  
  

  constructor(private cartService: CartService) {}
 
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  for(let item of this.items) {
    this.total += parseInt(this.items.price)  ;
  };
      
    }
    
  }


