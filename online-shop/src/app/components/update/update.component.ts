import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from "../../models/product";
import { FormControl } from '@angular/forms';
import {select, Store} from "@ngrx/store";
import {selectSelectedProduct} from "../../store/selectors/product.selector";
import {IAppState} from "../../store/state/app.state";
import {UpdateProduct, GetProduct} from "../../store/actions/product.actions";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  product$ = this._store.pipe(select(selectSelectedProduct));
  product: Product;

  productName = new FormControl('');
  productCategory = new FormControl('');
  productPrice =  new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetProduct(this.route.snapshot.params.id));
    this.product$.subscribe(product => this.product = product);
    this.productName.setValue(this.product.name);
    this.productCategory.setValue(this.product.category);
    this.productPrice.setValue(this.product.price);
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
    this._store.dispatch(new UpdateProduct(id, updatedProduct));
    alert("Updated successfully!");
  }
}
