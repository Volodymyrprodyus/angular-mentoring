import { createAction, props } from "@ngrx/store";
import { UserLogin } from "src/app/models";
import { UserInfo } from "src/app/models/user-info.model";

import { AuthActionTypes } from "./auth.action-types";

export const logIn = createAction(AuthActionTypes.LogIn, props<{ userData: UserLogin }>());
export const logInSuccess = createAction(AuthActionTypes.LogInSuccess, props<{ userData: UserInfo }>());
export const loginError = createAction(AuthActionTypes.LogInError, props<{ error: Error | null }>());
export const logOut = createAction(AuthActionTypes.LogOut);