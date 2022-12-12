import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { heroesRoutes } from "../../heroes/heroesRouter/HeroesRoutes";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
	const navigate = useNavigate();

	const { onLogin } = useContext(AuthContext);

	const onLoginn = () => {
		onLogin && onLogin("ABC", "FERNANDO HERRERA");

		const lastPath =
			localStorage.getItem("lastPath") || heroesRoutes.MARVELPAGE;

		navigate(lastPath, { replace: true });
	};

	return (
		<div>
			<h1>LoginPage</h1>
			<hr />
			<button className="btn btn-primary" onClick={onLoginn}>
				Login
			</button>
		</div>
	);
};
