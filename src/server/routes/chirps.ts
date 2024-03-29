import express from "express";
import db from "../db";
import { IBaseChirp } from "../types";

const chirpsRouter = express.Router();

//Get all Chirps
chirpsRouter.get("/", async (req, res) => {
	try {
		const chirps = await db.chirps.getAll();
		res.json(chirps);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error cannot receive all chirps" });
	}
});

// Get one Chirp
chirpsRouter.get("/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	if (!id || id < 1) {
		return res.status(400).json({ message: "The ID must be a positive integer" });
	}

	try {
		const [chirp] = await db.chirps.getOne(id);

		if (!chirp) {
			res.status(404).json({ message: "No such chirp with that ID was found" });
		}

		res.json(chirp);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error, cannot find a user with that id" });
	}
});

//Get chirp from specific user
chirpsRouter.get("/user/:user_id", async (req, res) => {
	try {
		const { user_id } = req.params;
		const chirps = await db.chirps.getForUser(Number(user_id));
		res.json(chirps);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error getting chirps from that user." });
	}
});

// Create Chirp
chirpsRouter.post("/", async (req, res) => {
	const { body, location } = req.body;

	if (!body || typeof body !== "string" || body.length > 150) {
		return res.status(400).json({ message: "Body must be a string no longer than 150 characters." });
	}

	if (location) {
		if (typeof location !== "string" || location.length > 50) {
			res.status(400).json({ message: "Location must be a string no longer than 50 characters." });
		}
	}

	try {
		const newChirp: IBaseChirp = {
			location,
			body,
			user_id: 1,
		};

		const potentialMentions = body.match(/@\w+/g);
		const users = await db.users.getAll();
		const results = await db.chirps.create(newChirp);
		const chirp_id = results.insertId;

		if (potentialMentions) {
			for await (const match of potentialMentions) {
				const username = match.replace("@", "");
				const foundUser = users.find((user) => user.handle === username);
				if (foundUser) {
					const user_id = foundUser.id;

					await db.mentions.create({ user_id, chirp_id });
				}
			}
		}
		res.status(201).json({ message: "Successfully created chirp!", id: chirp_id });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Cannot create chirp" });
	}
});

//Update Chirp
chirpsRouter.put("/:id", async (req, res) => {
	const { body, location } = req.body;
	const id = parseInt(req.params.id);

	try {
		const updatedChirp: IBaseChirp = {
			location,
			body,
			user_id: 1,
		};

		await db.mentions.deleteByChirpId(id);
		const potentialMentions = body.match(/@\w+/g);

		if (potentialMentions) {
			const users = await db.users.getAll();
			for await (const match of potentialMentions) {
				const username = match.replace("@", "");
				const foundUser = users.find((user) => user.handle === username);
				if (foundUser) {
					const user_id = foundUser.id;

					await db.mentions.create({ user_id, chirp_id: id });
				}
			}
		}

		await db.chirps.update(updatedChirp, id);
		res.status(201).json({ message: "Successfully updated chirp!" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Cannot update chirp" });
	}
});

//Delete chirp
chirpsRouter.delete("/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	if (!id || id < 1) {
		res.status(404).json({ message: "ID must be a positive integer" });
	}

	try {
		await db.mentions.deleteByChirpId(id);
		await db.chirps.destroy(id);
		res.status(200).json({ message: "Successfully deleted Chirp and mention" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error deleting that chirp" });
	}
});

export default chirpsRouter;
