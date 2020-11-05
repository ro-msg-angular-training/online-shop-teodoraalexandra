import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  product: Product;

  productName = new FormControl('');
  productCategory = new FormControl('');
  productPrice =  new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
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

        // Also update the fields from form
        this.productName.setValue(data.name);
        this.productCategory.setValue(data.category);
        this.productPrice.setValue(data.price);
      },
      err => {
        console.log(err);
      }
    );
  }

  undo(): void {
    this.productName.setValue(this.product.name);
    this.productPrice.setValue(this.product.price);
    this.productCategory.setValue(this.product.category);
  }

  update(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    const updatedProduct: Product = {
      id: id,
      category: this.productCategory.value,
      name: this.productName.value,
      price: this.productPrice.value
    }
    this.productService.updateProduct(id, updatedProduct).subscribe();
    alert("Updated successfully!");
  }
}
