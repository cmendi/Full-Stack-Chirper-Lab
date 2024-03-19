import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="bg-dark">
			<Link to={"/"} className="btn btn-info m-2">
				Home
			</Link>
			<Link to={"/chirps"} className="btn btn-info m-2">
				View Chirps
			</Link>
			<Link to={"/chirps/new"} className="btn btn-info m-2">
				Create Chirps
			</Link>
		</div>
	);
};

export default Navbar;
