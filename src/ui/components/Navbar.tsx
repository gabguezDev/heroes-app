import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { appRoutes } from "../../appRouter";
import { AuthContext } from "../../auth/context/AuthContext";
import { heroesRoutes } from "../../heroes";

export const Navbar = () => {
	const navigate = useNavigate();

	const { logged, user, onLogout } = useContext(AuthContext);

	const onLogoutt = () => {
		onLogout && onLogout();
		localStorage.removeItem("user");
		navigate(appRoutes.LOGINPAGE, { replace: true });
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to={appRoutes.HOMEPAGE}>
				HeroesApp
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav w-100">
					<div className="d-flex justify-content-between">
						<NavLink
							className={({ isActive }) =>
								`nav-item nav-link ${isActive ? "active" : null}`
							}
							to={heroesRoutes.MARVELPAGE}
						>
							Marvel
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								`nav-item nav-link ${isActive ? "active" : null}`
							}
							to={heroesRoutes.DCPAGE}
						>
							DC
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-item nav-link ${isActive ? "active" : null}`
							}
							to={heroesRoutes.SEARCH}
						>
							Search
						</NavLink>
					</div>
				</div>

				<div className="navbar-collapse collapse order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						{logged && (
							<li className={"nav-item d-flex align-items-center"}>
								<span className="badge bg-primary">{user?.name}</span>
							</li>
						)}
						<button className={"nav-item nav-link btn"} onClick={onLogoutt}>
							Logout
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
};
