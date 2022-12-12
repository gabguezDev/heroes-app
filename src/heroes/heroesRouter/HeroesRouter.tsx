import { Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";

import { heroesRoutes } from "./HeroesRoutes";

export const HeroesRouter = () => {
	return (
		<>
			<Navbar />
			<div className="px-4">
				<Routes>
					<Route path={heroesRoutes.MARVELPAGE} element={<MarvelPage />} />
					<Route path={heroesRoutes.DCPAGE} element={<DCPage />} />

					<Route path={`${heroesRoutes.HERO}/:id`} element={<HeroPage />} />
					<Route path={heroesRoutes.SEARCH} element={<SearchPage />} />
				</Routes>
			</div>
		</>
	);
};
