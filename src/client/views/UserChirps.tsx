import React, { useState, useEffect } from "react";
import { IChirp } from "../types";
import { GET } from "../services/fetchHelper";
import { useParams } from "react-router-dom";

const UserChirps = () => {
	const { user_id } = useParams();
	const [chirps, setChirps] = useState<IChirp[]>([]);

	useEffect(() => {
		GET(`/api/chirps/user/${user_id}`).then(setChirps);
	}, []);

	return (
		<div className="row justify-content-center">
			<div className="container row justify-content-center">
				<h1 className="text-center m-2 fw-bold">All chirps from user</h1>
				{chirps.map((chirp) => (
					<div className="col-12 col-md-7" key={`chirp-card-${chirp.id}`}>
						<div className="card p-3 shadow-lg my-2 bg-white">
							<p>{chirp.body}</p>

							<p>Created {new Date(chirp.created_at).toLocaleString()}</p>

							<div className="card-footer">Chirped from: {chirp.location}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserChirps;
