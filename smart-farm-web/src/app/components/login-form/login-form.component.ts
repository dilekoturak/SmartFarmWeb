import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private user: UserService) { }

  ngOnInit() {
    this.user.logout();
  }

  loginUser() {
    this.loading = true;

    this.user.sendLoginRequest(this.model.username, this.model.password)
      .subscribe(
        data => {
          console.log(data);
          // TODO: instead of getting id from currentUser item get from userToken item
          const id = localStorage.getItem('currentUser');
          const url = 'dashboard/' + id;
          this.router.navigate([url]);
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }
}
