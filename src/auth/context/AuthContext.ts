import { createContext } from "react";
import { IAuthState } from "../interfaces/types";

export const AuthContext = createContext<Partial<IAuthState>>({
	logged: false,
});
