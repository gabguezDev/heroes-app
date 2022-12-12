import React, { useEffect, useMemo } from "react";
import { useContext, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { appRoutes } from "./appRoutes";

type Props = {
	children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props): JSX.Element => {
	const { logged } = useContext(AuthContext);

	const { pathname, search } = useLocation();

	const memoizedLastPath = useMemo(() => pathname + search, [pathname, search]);

	useEffect(() => {
		localStorage.setItem("lastPath", memoizedLastPath);
	}, [pathname, search]);

	return logged ? children : <Navigate to={appRoutes.LOGINPAGE} />;
};
