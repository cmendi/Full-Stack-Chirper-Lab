import { SupportMethods } from "../types";
import Alert from "sweetalert2";

function fetcher<T = any>(url: string, method: SupportMethods, rawData?: unknown) {
	const headers: HeadersInit = {};
	const options: RequestInit = {
		method,
		headers,
	};

	if (method === "POST" || method === "PUT") {
		headers["Content-Type"] = "application/json";
		options["body"] = JSON.stringify(rawData);
	}

	return new Promise<T>(async (resolve, reject) => {
		try {
			const res = await fetch(process.env.SERVER_URL + url, options);
			const data = await res.json();
			if (res.ok) {
				resolve(data);

				if (data.message) {
					Alert.fire({
						icon: "success",
						text: data.message,
						timer: 5000,
					});
				}
			} else {
				Alert.fire({
					icon: "error",
					title: "Sever Error",
					text: data.message,
					timer: 5000,
				});
				console.error(data);
				reject(data);
			}
		} catch (error) {
			const err = error as Error;
			if (err.message) {
				Alert.fire({
					icon: "error",
					title: "Networking Error",
					text: err.message,
					timer: 5000,
				});
			}
			console.log(error);
			reject(error);
		}
	});
}

export const GET = <T = any>(url: string) => fetcher<T>(url, "GET");
export const DELETE = <T = any>(url: string) => fetcher<T>(url, "DELETE");
export const POST = <T = any>(url: string, rawData: unknown) => fetcher<T>(url, "POST", rawData);
export const PUT = <T = any>(url: string, rawData: unknown) => fetcher<T>(url, "PUT", rawData);
