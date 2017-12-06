import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-signup-approve',
  templateUrl: './signup-approve.component.html',
  styleUrls: ['./signup-approve.component.css']
})
export class SignupApproveComponent {
  model: any = {};

  private loading = false;
  private countDown;
  private count = 180;

  constructor(private router: Router,
              private approveService: SignupService) {
    console.log('Signup approve constructor ran...');
    this.countDown = Observable.create(0, 1000)
      .take(this.count)
      .map(() => --this.count);
  }

  signUpApprove() {
    this.loading = true;
    this.approveService.signUpApprove(this.model.approve_code)
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
        }
      );
  }
}
