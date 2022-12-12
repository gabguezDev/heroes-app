import React from "react";
import {
	AuthActionEnum,
	IAuthAction,
	IAuthActionPayload,
	IAuthState,
} from "../interfaces/types";

export const authInitialState: Partial<IAuthState> = { logged: false };

export const initAuth = (): Partial<IAuthState> => {
	const user = JSON.parse(localStorage.getItem("user")!);

	return { logged: !!user, user: user };
};

export const authReducer = (
	prevState: Partial<IAuthState>,
	action: IAuthAction
) => {
	switch (action.type) {
		case AuthActionEnum.LOGIN:
			return { ...prevState, logged: true, user: action.payload };
		case AuthActionEnum.LOGOUT:
			return { ...prevState, logged: false, user: undefined };

		default:
			return prevState;
	}
};
