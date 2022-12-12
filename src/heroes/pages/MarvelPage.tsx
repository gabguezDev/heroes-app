import { HeroList } from "../components";

export const MarvelPage = () => {
	return (
		<div>
			<h1 className="display-4 px-3 animate__animated animate__slideInLeft">
				Marvel Comics
			</h1>
			<hr />
			<HeroList publisher="Marvel Comics" />
		</div>
	);
};
