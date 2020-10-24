import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../travels';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: { name: string; image: string; price: number; date: string; duration: string; description: string; };

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product) {
    window.alert('You made an excellent choice!');
    this.cartService.addToCart(product);
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
