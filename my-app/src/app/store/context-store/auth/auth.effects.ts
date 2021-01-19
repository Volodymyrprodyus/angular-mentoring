import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core';
import { UserLogin } from 'src/app/models';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  public logIn$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logIn),
      switchMap(({userData}:{userData: UserLogin}) => {
        console.log('switchMap(({userData}: ', userData);
        return this.authService.login(userData).pipe(
          map((userData) => {
            this.router.navigate(['courses']);
            return authActions.logInSuccess({ userData });
          }),
          catchError((error) => of(authActions.loginError({ error })))
        );
      })
    )
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthenticationService,
  ) {}
}
