import React from "react";
import { heroes } from "../data/heroes";

export type getHeroesByIdProps = {
	id: string;
};

export const getHeroesById = ({
	id,
}: getHeroesByIdProps):
	| { id: string; superhero: string; alter_ego: string; characters: string }
	| undefined => {
	return heroes.find(hero => (hero.id === id ? hero : undefined));
};
