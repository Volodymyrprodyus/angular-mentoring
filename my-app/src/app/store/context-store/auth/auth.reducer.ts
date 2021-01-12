import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { AuthState } from "./auth.state";
import * as authActions from './auth.actions';
import { authInitialState } from "./auth-initial-state";
import { UserInfo } from "src/app/models/user-info.model";

const reducer: ActionReducer<AuthState> = createReducer(
	authInitialState,
	// on(
	// 	authActions.logInSuccess,
	// 	(state: AuthState, { userInfoData }: { userInfoData: UserInfo }): AuthState => ({
	// 		...state,
	// 		isAuthenticated: true,
	// 		user: {
	// 			id: userInfoData.id,
	// 			fakeToken: userInfoData.fakeToken,
	// 			name: {
	// 				first: userInfoData.name.first,
	// 				last: userInfoData.name.last,
	// 			},
	// 			login: userInfoData.login,
	// 			password: userInfoData.password,
	// 		},
	// 		errorMessage: null
	// 	})
	// ),
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
	return reducer(state, action);
    }