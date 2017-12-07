import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserApi } from '../user-api';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  formError: string;

  constructor(private userApi: UserApi,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(registrationForm: NgForm) {

    this.userApi.register(registrationForm.value.username, registrationForm.value.password);
  }

}
