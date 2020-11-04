import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CartComponent } from "./cart/cart.component";
import { AddComponent } from "./add/add.component";
import { UpdateComponent } from "./update/update.component";

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
