import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin: boolean = false;

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthorizationService
  ) {
    document.title = 'Login Page - Recipe.io';

    this.formLogin = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.formLogin);
  }

  setLogin() {
    this.isLogin = true;
  }

  setSignup() {
    this.isLogin = false;
  }
}
