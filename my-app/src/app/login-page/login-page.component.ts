import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ContextStoreFacadeService } from '../store/context-store/services/store-facade.service';

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

  constructor(private fb: FormBuilder, private contextStoreFacadeService: ContextStoreFacadeService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    const userData = {
      login: this.login.value,
      password: this.password.value
    };

    this.contextStoreFacadeService.dispatchLogIn({ userData });
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
