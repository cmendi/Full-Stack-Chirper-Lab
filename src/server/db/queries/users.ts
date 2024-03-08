import { Query } from "../connections";
import { IUser, IBaseUser } from "../../types";

const getAll = () => Query<IUser[]>("SELECT * FROM users");
const getOne = (id: number) => Query<IUser[]>("SELECT * FROM users WHERE id=?", [id]);
const create = (newUser: IBaseUser) => Query("INSERT INTO users SET ?", [newUser]);
const update = (updatedUser: IBaseUser, id: number) => Query("UPDATE users SET ? WHERE id=?", [updatedUser, id]);
const destroy = (id: number) => Query("DELETE users WHERE id=?", [id]);

export default {
	getAll,
	getOne,
	create,
	update,
	destroy,
};
