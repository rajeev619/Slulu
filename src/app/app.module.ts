import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],
  schemas: [NO_ERRORS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
