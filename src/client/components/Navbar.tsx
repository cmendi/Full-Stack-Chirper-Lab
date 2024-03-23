import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleToggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};
	const handleNavLinkClick = () => {
		setIsCollapsed(true);
	};
	return (
		<nav className="bg-dark navbar navbar-expand-md">
			<div className="containter">
				<Link className="text-decoration-none navbar-brand text-info fw-bold fs-3 mx-4" to={"/"}>
					Chirper
				</Link>
			</div>
			<button className="navbar-toggler navbar-dark" type="button" onClick={handleToggleCollapse}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className={`collapse navbar-collapse ${isCollapsed ? "collapse-transition" : "show collapse-transition"}`}>
				<div className="navbar-nav">
					<Link to={"/"} onClick={handleNavLinkClick} className="btn btn-info m-2 fw-bold">
						Home
					</Link>
					<Link to={"/chirps"} onClick={handleNavLinkClick} className="btn btn-info m-2 fw-bold">
						View Chirps
					</Link>
					<Link to={"/chirps/new"} onClick={handleNavLinkClick} className="btn btn-info m-2 fw-bold">
						Create Chirps
					</Link>
					<Link to={"/chirps/admin"} onClick={handleNavLinkClick} className="btn btn-info m-2 fw-bold">
						Admin
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
