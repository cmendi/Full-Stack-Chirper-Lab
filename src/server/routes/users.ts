import express from "express";
import db from "../db";

const usersRouter = express.Router();

usersRouter.post("/", async (req, res) => {
	const { handle, email } = req.body;

	try {
		const results = await db.users.create({ handle, email });
		res.status(201).json({ message: "Successfull user creation", id: results.insertId });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Cannot create user at this time." });
	}
});

usersRouter.get("/", async (req, res) => {
	try {
		const users = await db.users.getAll();
		return res.json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error cannot receive all users" });
	}
});

export default usersRouter;
