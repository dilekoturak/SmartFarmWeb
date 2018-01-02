import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InfoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  logout() {

    this.authService.signOut();
  }


}
