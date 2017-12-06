import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import {SignupApproveComponent} from '../signup-approve/signup-approve.component';

@Component({
  moduleId: module.id,
  templateUrl: './signup.component.html',
  styleUrls: ['../login-form/login-form.component.css']
})
export class SignupComponent {
  private model: any = {};
  private loading = false;

  constructor(private router: Router,
  private signupService: SignupService) {
    console.log('Signup constructor ran...');
  }

  signUp() {
    this.loading = true;
    this.signupService.signUp(this.model)
      .subscribe(
        data => {
          this.router.navigate([SignupApproveComponent]);
        },
        error => {
          this.loading = false;
        });
  }
}
