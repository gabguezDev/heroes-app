import React from "react";
import { heroes } from "../data/heroes";

type Props = {
	publisher: string;
};

export const getHeroesByPublisher = ({ publisher }: Props) => {
	const validPublishers = ["DC Comics", "Marvel Comics"];

	if (!validPublishers.includes(publisher)) {
		throw new Error(`${publisher} it is not a valid publisher`);
	}

	return heroes.filter(hero => hero.publisher === publisher);
};
