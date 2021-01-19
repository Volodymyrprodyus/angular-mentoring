import { UserInfo } from "src/app/models/user-info.model";

export interface AuthState {
	userData: UserInfo;
	isLoggedIn: boolean;
	errorMessage: Error | null;
}