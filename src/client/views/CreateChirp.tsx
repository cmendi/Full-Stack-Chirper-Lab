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
				<h1 className="text-center m-5 fw-bold">Chirp It Up!</h1>
				<div className="card p-3 shadow-lg m-2">
					<label className="m-2 fw-bold">Chirp text:</label>
					<input value={body} onChange={(e) => setBody(e.target.value)} type="text" className="form-control" placeholder="What are we thinking about?" />
					<label className="m-2 fw-bold">Location:</label>
					<input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" />
					<div className="mt-3">
						<button onClick={handleAddChirp} className="btn btn-success mb-2">
							Chirp It!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateChirp;
