import { AuthState } from "./auth.state";

export const authInitialState: AuthState = {
	userData: null,
	isLoggedIn: false,
	errorMessage: null
};