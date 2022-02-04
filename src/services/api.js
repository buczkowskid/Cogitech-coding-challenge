import axios from "axios";


export const usersRequest = () =>
	new Promise((resolve, reject) => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});


export const postsRequest = (page = 1, perPage = 10) =>
	new Promise((resolve, reject) => {
		axios
			.get(
				`https://jsonplaceholder.typicode.com/posts?_start=${
					perPage * (page - 1)
				}&_limit=${perPage}`
			)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
