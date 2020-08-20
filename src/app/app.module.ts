import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './data-service/auth/auth.service';
import { ProductsService } from './data-service/products/products.service';
import { OrdersService } from './data-service/orders/orders.service';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    MenuComponent,
    HomeComponent,
    MenuSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ProductsService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
