import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isUserLoggedIn = false;
  userID: string;

  constructor(private user: UserService) {
    this.userID = localStorage.getItem('currentUser');
    this.isUserLoggedIn = !!localStorage.getItem('currentUser');
  }
  ngOnInit() {
    console.log(this.isUserLoggedIn);
  }

}
