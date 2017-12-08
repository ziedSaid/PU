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
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { ComputerComponent } from './computer/computer.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login',component: LoginComponent },
  { path: 'contact',component:ContactComponent },
  { path: 'user/computer',component:ComputerComponent },
  { path: 'register',component:RegisterComponent },
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
    ComputerComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,

    
  
  ],
  providers: [


    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
