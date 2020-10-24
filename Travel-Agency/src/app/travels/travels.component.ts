import { Component, OnInit } from '@angular/core';
import { products } from '../travels';
@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
   
  }
}
