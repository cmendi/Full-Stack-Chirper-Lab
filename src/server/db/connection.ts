import mysql from "mysql2/promise";

const pool = mysql.createPool({
	host: "localhost",
	user: "labs",
	password: "labs",
	database: "chirper",
});
