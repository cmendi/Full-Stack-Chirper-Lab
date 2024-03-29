import { Query } from "../connections";
import { IChirp, IBaseChirp } from "../../types";

const getAll = () => Query<IChirp[]>("SELECT * FROM chirps");
const getForUser = (user_id: number) => Query<IChirp[]>("SELECT * FROM chirps WHERE user_id=?", [user_id]);
const getOne = (id: number) => Query<IChirp[]>("SELECT * FROM chirps WHERE id=?", [id]);
const create = (newChirp: IBaseChirp) => Query("INSERT INTO chirps SET ?", [newChirp]);
const update = (updatedChirp: IBaseChirp, id: number) => Query("UPDATE chirps SET ? WHERE id=?", [updatedChirp, id]);
const destroy = (id: number) => Query("DELETE FROM chirps WHERE id=?", [id]);

export default {
	getForUser,
	getAll,
	getOne,
	create,
	update,
	destroy,
};
