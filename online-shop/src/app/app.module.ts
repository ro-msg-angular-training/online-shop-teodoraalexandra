import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { UpdateComponent } from './components/update/update.component';
import { AddComponent } from './components/add/add.component';
import { ProductService } from "./services/product.service";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./store/effects/product.effects";
import { CartEffects} from "./store/effects/cart.effects";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import { ProductComponent } from './containers/product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ProductEffects, CartEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    UpdateComponent,
    AddComponent,
    ProductComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
