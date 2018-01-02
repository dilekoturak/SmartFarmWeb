import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from './auth.service';
import { AuthGaurd } from './authgaurd.service';
import { AppRoutingModule} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";

export const firebaseConfig = {
  apiKey: "AIzaSyDLbC1zGwwORYSeXNpaszglqL-zw4byRcM",
  authDomain: "smartgreenhouse-f919a.firebaseapp.com",
  databaseURL: "https://smartgreenhouse-f919a.firebaseio.com",
  projectId: "smartgreenhouse-f919a",
  storageBucket: "smartgreenhouse-f919a.appspot.com",
  messagingSenderId: "563079342427"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGaurd],

  bootstrap: [AppComponent]
})
export class AppModule { }
