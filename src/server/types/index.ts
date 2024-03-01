export interface IBaseUser {
	handle: string;
	email: string;
}

export interface IUser extends IBaseUser {
	id: number;
	created_at: Date;
}

export interface IBaseChirp {
	user_id: number;
	body: string;
	location?: string;
}

export interface IChirp extends IBaseChirp {
	id: number;
	created_at: Date;
}

export interface IMention {
	chirp_id: number;
	user_id: number;
}
