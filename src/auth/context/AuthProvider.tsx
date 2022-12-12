import { ReactNode, Reducer, useReducer } from "react";
import { IAuthAction, IAuthState, AuthActionEnum } from "../interfaces/types";
import { AuthContext } from "./AuthContext";
import { authInitialState, authReducer, initAuth } from "./authReducer";

type AuthContextProviderProps = {
	children: ReactNode;
};

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
	const [authState, dispatch] = useReducer<
		Reducer<Partial<IAuthState>, IAuthAction>,
		Partial<IAuthState>
	>(authReducer, authInitialState, initAuth);

	const onLogin = (id: string, name: string = "") => {
		const user = {
			id: id,
			name: name,
		};

		const loginAction: IAuthAction = {
			type: AuthActionEnum.LOGIN,
			payload: user,
		};

		localStorage.setItem("user", JSON.stringify(user));

		dispatch(loginAction);
	};

	const onLogout = () => {
		const logoutAction: IAuthAction = {
			type: AuthActionEnum.LOGOUT,
		};

		dispatch(logoutAction);
	};

	return (
		<AuthContext.Provider
			value={{ ...authState, onLogin: onLogin, onLogout: onLogout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
