import { Link } from "react-router-dom";
import { heroesRoutes } from "../heroesRouter/HeroesRoutes";

type Props = {
	id: string;
	superhero: string;
	alter_ego: string;
	characters: string;
};
const CharacterByHero = ({ alter_ego, characters }: Partial<Props>) => {
	if (alter_ego === characters)
		return (
			<p className="card-text text-start lead">
				Characters: <span className="h6">{characters}</span>
			</p>
		);

	return (
		<p className="card-text text-start h6 lead">
			Alter ego: <span className="h6">{alter_ego}</span>
			<br />
			<br />
			Characters: <span className="h6">{characters}</span>
		</p>
	);
};

export const HeroCard = ({ id, superhero, alter_ego, characters }: Props) => {
	const heroUrl = `/assets/heroes/${id}.jpg`;

	return (
		<div className="col my-1 animate__animated animate__fadeIn animate__delay-1s">
			<div className="card h-100">
				<div className="d-flex h-100">
					<div className="col-4 h-100">
						<img
							src={heroUrl}
							className="card-img-top w-100"
							style={{ objectFit: "cover" }}
							alt={superhero}
						/>
					</div>
					<div className="col card-body d-flex flex-column justify-content-between">
						<p className="h1 lead text-center">{superhero}</p>
						<CharacterByHero alter_ego={alter_ego} characters={characters} />
						<Link to={`${heroesRoutes.HERO}/${id}`} className="btn btn-primary">
							Ver más
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
