import { Component, OnInit, Input } from '@angular/core';
import { Product} from "../../models/product";
import {Location} from "@angular/common";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  addToCart() {
    //alert("Successfully added " + this.product.name + " to cart!");
    //this.cartService.addProductToCart(this.product);
  }

  deleteProduct(id: Number) {
    /*if (confirm("Are you sure you want to delete " + this.product.name + "?")) {
      this.productService.deleteProduct(id).subscribe();
      this.router.navigate(['/products']);
    }*/
  }

}
