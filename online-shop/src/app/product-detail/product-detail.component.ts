import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from "../model/product";
import { ProductService } from "../product.service";
import { CartService } from "../cart.service";
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
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    // Using snapshot to capture the product's ID as a navigation parameter and display it in the details page
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.getProduct(id).subscribe(
      data => {
        this.product = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  addToCart() {
    alert("Successfully added " + this.product.name + " to cart!");
    this.cartService.addProductToCart(this.product);
  }

  deleteProduct(id: Number) {
    if (confirm("Are you sure you want to delete " + this.product.name + "?")) {
      this.productService.deleteProduct(id).subscribe();
      const booleanPromise = this.router.navigate(['/products']);
    }
  }
}
