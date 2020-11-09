import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CartComponent } from "./components/cart/cart.component";
import { AddComponent } from "./components/add/add.component";
import { UpdateComponent } from "./components/update/update.component";

const routes: Routes = [
  { path : 'products', component: ProductsComponent },
  { path : 'detail/:id', component: ProductDetailComponent},
  { path : 'cart', component: CartComponent},
  { path: 'add', component: AddComponent},
  { path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
