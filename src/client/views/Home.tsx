import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center vh-100">
			<h1 className="text-center fw-bold">Welcome to Chiper!</h1>
			<h4 className="text-center mt-3">Create your first chirp.</h4>
			<div className="mt-3">
				<Link to={"/chirps/new"} className="btn btn-success">
					Create Chirp
				</Link>
			</div>
		</div>
	);
};

export default Home;
