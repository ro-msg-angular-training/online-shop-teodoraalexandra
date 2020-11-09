import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { FormControl } from '@angular/forms';
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {GetCartProducts} from "../../store/actions/cart.actions";
import { AddProduct } from "../../store/actions/product.actions";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productName = new FormControl('');
  productCategory = new FormControl('');
  productPrice =  new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private _store: Store<IAppState>
  ) { }

  ngOnInit(): void {
  }

  undo(): void {
    this.productName.setValue('');
    this.productPrice.setValue('');
    this.productCategory.setValue('');
  }

  add(): void {
    let allProducts: any;
    let lastId: number = -1;
    this.productService.getProducts().subscribe(
      data => {
        allProducts = data;
        allProducts.sort(function (a, b) {
          return b.id - a.id;
        });

        lastId = allProducts[0].id + 1;

        const addedProduct: Product = {
          id: lastId,
          category: this.productCategory.value,
          name: this.productName.value,
          price: this.productPrice.value
        }

        this._store.dispatch(new AddProduct(addedProduct));
        alert("Added successfully!");
      })
  }
}
