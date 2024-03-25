import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import AllChirps from "./views/AllChirps";
import ChirpDetails from "./views/ChirpDetails";
import CreateChirp from "./views/CreateChirp";
import EditChirp from "./views/EditChirp";
import ErrorPage from "./views/ErrorPage";
import AdminPanel from "./views/AdminPanel";
import UserChirps from "./views/UserChirps";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chirps" element={<AllChirps />} />
					<Route path="/chirps/new" element={<CreateChirp />} />
					<Route path="/chirps/:id" element={<ChirpDetails />} />
					<Route path="/chirps/:id/edit" element={<EditChirp />} />
					<Route path="/chirps/admin" element={<AdminPanel />} />
					<Route path="/chirps/user/:user_id" element={<UserChirps />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
