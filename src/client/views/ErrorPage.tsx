import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const nav = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			nav("/");
		}, 5000);
	});
	return (
		<h1 className="text-danger text-center mt-5">No such page exists</h1>
	);
};

export default ErrorPage;
