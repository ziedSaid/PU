import { ProductService } from './product.service';

import { UserS } from './user.service';
import { AuthService } from './auth.service';
import { RouterGuardService } from './router-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from  '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { ComputerComponent } from './computer/computer.component';
//angular fire and firebase modules
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductCartComponent } from './product-cart/product-cart.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login',component: LoginComponent },
  { path: 'user/orders',component:OrderComponent,canActivate:[RouterGuardService] },
 
  { path: 'admin/orders',component:AdminordersComponent,canActivate:[RouterGuardService] },
  { path: 'contact',component:ContactComponent },
  { path: 'user/computer',component:ComputerComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'check-out',component:CheckoutComponent,canActivate:[RouterGuardService] },
  { path: 'order-success',component:OrderSuccessComponent,canActivate:[RouterGuardService]},
 
  { path: 'admin/product/new',component:ProductFormComponent,canActivate:[RouterGuardService] },
  
  { path: 'admin/product/:id',component:ProductFormComponent,canActivate:[RouterGuardService] },
  { path: 'admin/products',component:AdminProductComponent,canActivate:[RouterGuardService] },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  declarations: [

    AppComponent,
    NavComponent,
    HomeComponent,
    CarouselComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    AlertComponent,
    ComputerComponent,
    ShoppingcartComponent,
    CheckoutComponent,
    OrderComponent,
    OrderSuccessComponent,
    AdminProductComponent,
    AdminordersComponent,
    ProductFormComponent,
    ProductCartComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule

    
  
  ],
  providers: [

    RouterGuardService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    AuthService,
    UserS,
    CategoryService,
    ProductService,
    
   


    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
