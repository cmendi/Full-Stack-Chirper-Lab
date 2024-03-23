import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IChirp } from "../types";
import { GET } from "../services/fetchHelper";

const ChirpDetails = () => {
	const { id } = useParams();
	const [chirp, setChirp] = useState<IChirp>();

	// Whats the reason to put the id in the useEffect dependancy array?
	useEffect(() => {
		GET(`/api/chirps/${id}`).then(setChirp);
	}, [id]);

	if (!chirp) {
		return <div>Loading...</div>;
	}

	return (
		<div className="row justify-content-center">
			<div className="card p-3 shadow-lg my-2 bg-white">
				<p className="fs-5">{chirp.body}</p>

				<p>Created {new Date(chirp.created_at).toLocaleString()}</p>

				<div className="card-footer">
					<p>Chirped from {chirp.location ? chirp.location : "Wouldn't you like to know."}</p>
					<Link to={`/chirps/${chirp.id}/edit`} className="btn btn-info m-1">
						Edit Chirp
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ChirpDetails;
