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
import { AppRoutingModule} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import { InfoComponent } from './info/info.component';

import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { AngularFireDatabaseModule} from "angularfire2/database";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    InfoComponent,
    ClientsComponent,
    ClientsListComponent,
    HeaderUserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
