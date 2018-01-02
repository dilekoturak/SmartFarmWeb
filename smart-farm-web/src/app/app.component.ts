import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyDLbC1zGwwORYSeXNpaszglqL-zw4byRcM",
  authDomain: "smartgreenhouse-f919a.firebaseapp.com",
  databaseURL: "https://smartgreenhouse-f919a.firebaseio.com",
  projectId: "smartgreenhouse-f919a",
  storageBucket: "smartgreenhouse-f919a.appspot.com",
  messagingSenderId: "563079342427"
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService,
              private router: Router){
  }
  ngOnInit() {
    //Initialize firebase app that we can use in Angular 4 Firebase Authentication App
    AngularFireModule.initializeApp(firebaseConfig);
  }

}
