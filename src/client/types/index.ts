export type SupportMethods = "GET" | "PUT" | "POST" | "DELETE";

export interface IUser {
	id: number;
	created_at: Date;
	handle: string;
	email: string;
}

export interface IChirp {
	id: number;
	created_at: Date;
	user_id: number;
	body: string;
	location?: string;
}

export interface IMention {
	chirp_id: number;
	user_id: number;
}
