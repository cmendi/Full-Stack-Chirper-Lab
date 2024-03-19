import React, { useState } from "react";
import { POST } from "../services/fetchHelper";
import { useNavigate } from "react-router-dom";

const CreateChirp = () => {
	const [body, setBody] = useState("");
	const [location, setLocation] = useState("");
	const nav = useNavigate();

	const handleAddChirp = () => {
		POST("/api/chirps", { body, location }).then((data) => {
			nav(`/chirps/${data.id}`);
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
					<button onClick={handleAddChirp} className="btn btn-success">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateChirp;
