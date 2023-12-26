import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin: boolean = false;

  formLogin: FormGroup;
  formSignUp: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthorizationService,
    private route: Router
  ) {
    document.title = 'Login Page - Recipe.io';

    this.formLogin = this.fb.group({
      email: [''],
      password: [''],
    });

    this.formSignUp = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.matchingPasswords }
    );
  }

  matchingPasswords(group: FormGroup) {
    if (group) {
      const password1 = group.controls['password'].value;
      const password2 = group.controls['confirmPassword'].value;

      if (password1 == password2) return null;
    }

    return { matching: false };
  }

  onSubmitLogin() {
    console.log(this.formLogin.value);

    this.authService.logIn(this.formLogin.value).subscribe(
      (v) => {
        this.route.navigateByUrl('/');
      },
      (err) => console.log(err)
    );
  }
  onSubmitSignup() {
    console.log(this.formSignUp.value);
    this.authService.signUp(this.formSignUp.value).subscribe(
      (v) => {
        this.route.navigateByUrl('/');
      },
      (err) => console.log(err)
    );
  }

  setLogin() {
    this.isLogin = true;
  }

  setSignup() {
    this.isLogin = false;
  }

  seeChange(event) {
    console.log(event);
  }
}
