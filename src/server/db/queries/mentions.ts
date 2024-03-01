import { Query } from "../connections";
import { IMention } from "../../types";

const create = (newMention: IMention) => Query("INSERT INTO mentions SET ?", [newMention]);
const deleteByChirpId = (chirp_id: number) => Query("DELETE FROM mentions WHERE chirp_id=?", [chirp_id]);

export default {
	create,
	deleteByChirpId,
};
