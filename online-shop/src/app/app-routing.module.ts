import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path : 'products', component: ProductsComponent },
  { path : 'detail/:id', component: ProductDetailComponent},
  { path : 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
