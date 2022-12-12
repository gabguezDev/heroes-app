import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

type Props = {
	publisher: string;
};

export const HeroList = ({ publisher }: Props) => {
	const heroesList = useMemo(
		() => getHeroesByPublisher({ publisher }),
		[publisher]
	);

	return (
		<ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 flex-wrap w-100 px-4">
			{heroesList.map(hero => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</ul>
	);
};
