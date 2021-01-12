import { AuthState } from "./auth.state";

export const authInitialState: AuthState = {
	isAuthenticated: false,
	user: null,
	errorMessage: null
};