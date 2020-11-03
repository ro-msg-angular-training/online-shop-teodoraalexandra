import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product";
import { PRODUCTS } from "../repository/mock-products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
