export interface IAuthAction {
	type: AuthActionEnum;
	payload?: IAuthActionPayload;
}

export enum AuthActionEnum {
	LOGIN = "[Auth] Login",
	LOGOUT = "[Auth] Logout",
}

export interface IAuthActionPayload {
	id: string;
	name: string;
}

export interface IAuthState {
	user?: IAuthActionPayload;
	logged: boolean;
	onLogin: (id: string, name: string) => void;
	onLogout: () => void;
}
