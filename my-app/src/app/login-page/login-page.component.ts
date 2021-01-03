import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../core/service/authentication.service';
import { GlobalConstants } from '../shared/constans/global-constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  private unsubscribe: Subject<void> = new Subject();

  get login(): AbstractControl {
    return this.loginForm.get('login');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
  
  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    const userData = {
      login: this.login.value,
      password: this.password.value
    }
    this.auth.login(userData).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(
      () => this.router.navigate(['courses']),
      (err) => console.error('err: ', err),
    )
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      login: ['', {validators: [Validators.required], updateOn: 'blur'}],
      password: ['', {validators: [Validators.required]}],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
