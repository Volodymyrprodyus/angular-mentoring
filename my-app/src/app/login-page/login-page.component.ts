import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/service/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  UserAuthKey: string = 'User_authKey';

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
  
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    const userData = {
      email: this.email.value,
      password: this.password.value
    }
    this.auth.login(this.UserAuthKey, userData);
    console.log('Logged successfully!!!')
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      password: ['', {validators: [Validators.required], updateOn: 'blur'}],
    });
  }
}
