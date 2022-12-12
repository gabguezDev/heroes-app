import React from "react";
import { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

import { heroesRoutes } from "../heroes/heroesRouter/HeroesRoutes";
import { LoginPage } from "../auth/pages/LoginPage";
import { appRoutes } from "./appRoutes";

type Props = {
	children: JSX.Element;
};

export const PublicRoute = ({ children }: Props): JSX.Element => {
	const { logged } = useContext(AuthContext);

	return !logged ? children : <Navigate to={heroesRoutes.MARVELPAGE} />;
};
