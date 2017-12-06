import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';

import {AuthGuard} from './guards/auth.guard';
import {AppConfig} from './app.config';
import { UserService } from './services/user.service';
import {SignupService} from './services/signup.service';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './app.routing';
import { SignupApproveComponent } from './components/signup-approve/signup-approve.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    SignupComponent,
    HomeComponent,
    SignupApproveComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    UserService,
    SignupService,
    AuthGuard,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
