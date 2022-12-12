import { FormEvent } from "react";
import { useForm } from "../../hooks";
import { HeroCard } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { appRoutes } from "../../appRouter/appRoutes";
import { heroesRoutes } from "../heroesRouter/HeroesRoutes";

type Props = {};

export const SearchPage = (props: Props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = "" } = queryString.parse(location.search);

	const heroes = getHeroesByName(q as string);

	const {
		formState: { searchText },
		onInputChange,
	} = useForm({ searchText: q as string });

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText.toLowerCase()}`);
	};

	const onReset = () => {
		navigate(``);
	};

	return (
		<div>
			<h1 className="lead display-4 mx-2 animate__animated animate__slideInLeft">
				Search
			</h1>
			<hr />

			<div className="row animate__animated animate__fadeIn animate__delay-1s">
				<div className="col-5 ">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSubmit}>
						<input
							type="text"
							placeholder="Search a hero"
							name="searchText"
							autoComplete="off"
							className="form-control w-100"
							value={searchText}
							onChange={onInputChange}
						/>

						<button className="btn btn-outline-primary mt-2" type="submit">
							Search
						</button>
						<button
							className="btn btn-primary mt-2 mx-2"
							type="submit"
							onClick={onReset}
						>
							Clean
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{q !== "" && heroes.length === 0 && (
						<div className="alert alert-danger animate__animated animate__fadeIn">
							Hero <b>{q}</b> not found!
						</div>
					)}

					{q === "" && (
						<div className="alert alert-primary animate__animated animate__fadeIn">
							Search a hero
						</div>
					)}

					{/* si buscó algo y no fue encontrado */}
					{/* <div className="alert alert-danger">Hero {searchText} not found!</div> */}

					{heroes.map(hero => (
						<HeroCard {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
