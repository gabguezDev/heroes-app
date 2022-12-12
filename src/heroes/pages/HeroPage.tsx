import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { getHeroesByIdProps } from "../helpers/getHeroesById";
import { appRoutes } from "../../appRouter/appRoutes";
import { heroesRoutes } from "../heroesRouter/HeroesRoutes";
import { MouseEventHandler, useMemo } from "react";

export const HeroPage = () => {
	const navigate = useNavigate();

	const { id } = useParams();

	const hero = useMemo(() => getHeroesById({ id } as getHeroesByIdProps), [id]);

	const onNavigateBack = () => {
		navigate(-1);
	};

	if (!hero) {
		return <Navigate to={heroesRoutes.MARVELPAGE} />;
	}

	return (
		<>
			<div>
				<h1 className="lead display-2 mx-4">{hero.superhero}</h1>
				<hr />
			</div>
			<div className="row m-3 m-sm-4 align-items-center border border-secondary rounded-5 h-50 overflow-hidden">
				<div className="col-12 col-sm-6 col-lg-5 col-xl-2 p-0">
					<img src={`/assets/heroes/${id}.jpg`} className="w-100 h-100" />
				</div>
				<div className="col h-100 text-center">
					<h3 className="my-2">
						<p className="lead">Superhero: </p>
						{hero.superhero}
					</h3>
					<h3 className="my-2">
						<p className="lead">Alter ego: </p>
						{hero.alter_ego}
					</h3>
					<h3 className="my-2">
						<p className="lead">Characters: </p>
						{hero.characters}
					</h3>
					<button
						className="btn btn-outline-primary my-4 w-50"
						onClick={onNavigateBack}
					>
						Regresar
					</button>
				</div>
			</div>
		</>
	);
};
