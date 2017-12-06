import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http, Response } from '@angular/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  private registeration_id: string;
  private approve_code: string;


  constructor(private http: Http, private config: AppConfig) { }

  signUp(user: User) {
    return this.http.post(this.config.apiUrl + '/users', user)
      .map(
        (response: Response) => {
        const res = response.json();
        if (res.registeration_id && res.approve_code) {
          this.registeration_id = res.registeration_id;
          this.approve_code = res.approve_code;
          // TODO: send approve_code to user via email.
        }
      });
  }

  signUpApprove(approveCode: string) {
    return this.http.put(this.config.apiUrl + '/users', {registeration_id: this.registeration_id, approve_code: approveCode})
      .map(
        (response: Response) => {
        const res = response.json();
        if (res.token) {
          localStorage.setItem('userToken', res.token);
        }
      });
  }

  getRegisterationID() {
    return this.registeration_id;
  }

  getApproveCode() {
    return this.approve_code;
  }

}
