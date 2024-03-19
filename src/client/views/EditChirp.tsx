import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DELETE, GET, PUT } from "../services/fetchHelper";

const EditChirp = () => {
	const { id } = useParams();
	const [body, setBody] = useState("");
	const [location, setLocation] = useState("");
	const nav = useNavigate();

	useEffect(() => {
		GET(`/api/chirps/${id}`).then((chirp) => {
			setBody(chirp.body);
			setLocation(chirp.location);
		});
	}, []);

	const handleEditChirp = () => {
		PUT(`/api/chirps/${id}`, { body, location }).then(() => {
			nav(`/chirps/${id}`);
		});
	};

	const deleteChirp = () => {
		DELETE(`/api/chirps/${id}`).then(() => {
			nav(`/chirps`);
		});
	};

	return (
		<div className="row justify-content-center">
			<div className="col-12 col-md-9">
				<div className="card p-3 shadow-lg my-2">
					<label>Chirp text:</label>
					<input value={body} onChange={(e) => setBody(e.target.value)} type="text" className="form-control" />
					<label>Location:</label>
					<input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" />
					<div className="card-footer">
						<button onClick={handleEditChirp} className="btn btn-success m-2">
							Save
						</button>
						<button onClick={deleteChirp} className="btn btn-danger m-2">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditChirp;
