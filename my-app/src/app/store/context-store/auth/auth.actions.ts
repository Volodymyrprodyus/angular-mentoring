import { createAction, props } from "@ngrx/store";
import { UserLogin } from "src/app/models";
import { UserInfo } from "src/app/models/user-info.model";

import { AuthActionTypes } from "./auth.action-types";

export const logIn = createAction(AuthActionTypes.LogIn, props<{ login: string, password: string }>());
export const logInSuccess = createAction(AuthActionTypes.LogInSuccess, props<{ login: string, password: string }>());