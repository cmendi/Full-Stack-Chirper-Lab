import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GET } from "../services/fetchHelper";
import { IChirp } from "../types";

const AllChirps = () => {
	const [chirps, setChirps] = useState<IChirp[]>([]);

	useEffect(() => {
		GET("/api/chirps").then(setChirps);
	}, []);

	return (
		<div className="row justify-content-center">
			<div className="container row justify-content-center">
				{chirps.map((chirp) => (
					<div
						className="col-12 col-md-7"
						key={`chirp-card-${chirp.id}`}
					>
						<div className="card p-3 shadow-lg my-2 bg-white">
							<p className="fs-5">{chirp.body}</p>

							<p>
								Created{" "}
								{new Date(chirp.created_at).toLocaleString()}
							</p>

							<div className="card-footer">
								<Link
									to={`/chirps/${chirp.id}`}
									className="btn btn-info"
								>
									Chirp Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllChirps;
