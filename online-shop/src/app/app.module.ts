import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    UpdateComponent,
    AddComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
