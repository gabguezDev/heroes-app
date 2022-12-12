import { HeroList } from "../components";

export const DCPage = () => {
	return (
		<div>
			<h1 className="display-4 px-3 animate__animated animate__slideInLeft">
				DC Comics
			</h1>
			<hr />
			<HeroList publisher="DC Comics" />
		</div>
	);
};
