import React, { useState, useEffect } from "react";
import { DELETE, GET } from "../services/fetchHelper";
import { IChirp, IUser } from "../types";
import { Link } from "react-router-dom";

const AdminPanel = () => {
	const [chirps, setChirps] = useState<IChirp[]>([]);
	const [users, setUsers] = useState<IUser[]>([]);

	const loadChirps = () => {
		return GET("/api/chirps").then(setChirps);
	};

	useEffect(() => {
		loadChirps();
	}, []);

	useEffect(() => {
		GET("/api/users").then(setUsers);
	}, []);

	const getHandle = (userId: number) => {
		const user = users.find((user) => user.id === userId);
		return user ? user.handle : "Unknown";
	};

	const handleDelete = (id: number) => {
		DELETE(`/api/chirps/${id}`).then(loadChirps);
	};

	return (
		<div className="row justify-content-center">
			<div className="container row justify-content-center">
				{chirps.map((chirp) => (
					<div className="col-12 col-md-7" key={`chirp-card-${chirp.id}`}>
						<div className="card p-3 shadow-lg my-2 bg-white">
							<h5>
								<Link to={`/chirps/user/${chirp.user_id}`} className="text-decoration-none">
									@{getHandle(chirp.user_id)}
								</Link>
							</h5>
							<p>{chirp.body}</p>

							<p>Created {new Date(chirp.created_at).toLocaleString()}</p>

							<div className="card-footer">
								<button onClick={() => handleDelete(chirp.id)} className="btn btn-danger">
									Delete
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminPanel;
