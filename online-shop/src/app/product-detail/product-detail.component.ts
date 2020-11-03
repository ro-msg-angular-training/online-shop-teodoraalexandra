import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../model/product";
import { ProductService } from "../product.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    // Using snapshot to capture the product's ID as a navigation parameter and display it in the details page
    const id = +this.route.snapshot.paramMap.get("id");
    this.product = this.productService.getProduct(id);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart() {
    alert("Successfully added " + this.product.name + " to cart!");
  }
}
