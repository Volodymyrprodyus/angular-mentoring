import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { AuthState } from "./auth.state";
import * as authActions from './auth.actions';
import { authInitialState } from "./auth-initial-state";
import { UserInfo } from "src/app/models/user-info.model";
import clone from 'clone';
import { GlobalConstants } from "src/app/shared/constans/global-constants";

const userAuthKey = GlobalConstants.userAuthKey;

const reducer: ActionReducer<AuthState> = createReducer(
	authInitialState,
	on(
		authActions.logInSuccess,
		(state: AuthState, { userData }: { userData: UserInfo }): AuthState => ({
			...state,
			isLoggedIn: true,
			userData: clone(userData),
			errorMessage: null
		})
	),
	on(
		authActions.loginError,
		(state: AuthState, { error }: { error: Error | null }): AuthState => ({
			...state,
			isLoggedIn: false,
			errorMessage: error
		})
	),
	on(
		authActions.logOut,
		(state: AuthState): AuthState => {
			window.localStorage.removeItem(userAuthKey);
			return {
				...state,
				userData: null,
				isLoggedIn: false,
			};
		}
	),
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
	return reducer(state, action);
}