import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {AppConfig} from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  public name;

  constructor(private http: Http, private config: AppConfig) {
  }

  sendLoginRequest(username: string, password: string) {
    return this.http.post(this.config.apiUrl + '/users', { username: username, password: password })
      .map((response: Response) => {
        const user = response.json();
        if (user /*&& user.token*/) {
          this.name = user.username;
          user.password = '';
          localStorage.setItem('currentUser', user.id);
        }
      });
  }


  logout () {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userToken');
  }

}
