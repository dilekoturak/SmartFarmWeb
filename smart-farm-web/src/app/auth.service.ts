import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireModule} from "angularfire2";

@Injectable()
export class AuthService{
  constructor(private router: Router, public fire: AngularFireModule){}

  signIn(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['home']);
          this.getCurrentUserToken();

        },
        error => console.log(error)
      );
  }
  logout(){
    firebase.auth().signOut();
    localStorage.removeItem('isLoggedIn');
  }
  getCurrentUserToken(){
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => {
          localStorage.setItem('isLoggedIn', token);
        }
      )
    localStorage.getItem('isLoggedIn');
  }
  isAuthenticated(){
    return (localStorage.getItem('isLoggedIn')) ? true : false;
  }
}
