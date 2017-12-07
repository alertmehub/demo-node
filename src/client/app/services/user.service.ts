import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';

const api = '/api';

@Injectable()
export class UserService implements UserApi {

  public get isAuthenticated(): boolean {
    return !!this.token;
  }

  public set token(token: string){
    localStorage.token = token;
  }
  public get token(){
    return localStorage.token;
  }
  public set loggedInUser(loggedInUser: string){
    localStorage.loggedInUser = loggedInUser;
  }
  public get loggedInUser(){
    return localStorage.loggedInUser;
  }

  constructor(private router: Router, private http: HttpClient) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    return Observable.of(true)
    .do(token => {
        this.token = 'asdf';
        this.loggedInUser = username;
        this.router.navigate(['/authenticated']);
    })
    .catch(err => {
      return Observable.of(false);
    });
  }

  signOut(): Observable<any> {
      this.token = '';
      this.loggedInUser = null;
      this.router.navigate(['/signin/']);
      return Observable.of({});
  }

  register(username: string, password: string): Observable<any> {
      console.log('UserService.register: ' + username + ' ' + password );
      const result = Observable.of(true);
      result.subscribe(token => {
        this.token = 'asdf';
          this.loggedInUser = username;
          this.router.navigate(['/authenticated']);
      });
      return result;
  }

  currentUser() {
    return this.loggedInUser;
  }

}
