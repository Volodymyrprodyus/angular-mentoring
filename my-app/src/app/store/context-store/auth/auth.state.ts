import { UserInfo } from "src/app/models/user-info.model";

export interface AuthState {
	isAuthenticated: boolean;
	user: UserInfo | null;
	errorMessage: string | null;
}