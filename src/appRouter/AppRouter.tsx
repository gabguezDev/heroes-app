import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { HeroesRouter } from "../heroes";
import { appRoutes } from "./appRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path={appRoutes.HOMEPAGE}
					element={<Navigate to={appRoutes.LOGINPAGE} />}
				/>

				<Route
					path={appRoutes.LOGINPAGE}
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>

				<Route
					path={appRoutes.JOKER}
					element={
						<PrivateRoute>
							<HeroesRouter />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};
