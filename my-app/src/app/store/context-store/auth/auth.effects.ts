import { Token } from "@angular/compiler/src/ml_parser/lexer";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { userInfo } from "os";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthenticationService } from "src/app/core";
import { HttpService } from "src/app/core/service/http.service";
import { CoursesService } from "src/app/courses-page/services";
import { UserLogin } from "src/app/models";
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  // public logIn$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(authActions.logIn),
  //     switchMap(({ login, password }: { login: string, password: string }) => {
	// return this.authService.login({ login, password })
	
  //     }),
  //     switchMap((res) => this.httpService.)
  //   )
  // );

  constructor(
	private actions$: Actions,
	private httpService: HttpService,
	private authService: AuthenticationService,
	private coursesService: CoursesService
      ) {}
}