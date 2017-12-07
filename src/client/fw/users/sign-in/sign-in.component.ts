import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { UserApi } from '../user-api';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  formError: string;
  submitting = false;

  constructor(private userApi: UserApi,
              private router: Router) { }

  onSubmit(signInForm: NgForm) {
  if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
      .subscribe(result => {
          if (!result) {
            this.submitting = false;
            this.formError = 'Invalid login';
          }
      });
    }

  }

}

