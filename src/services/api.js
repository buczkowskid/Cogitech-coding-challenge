import axios from "axios";

// Call API for Users
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

// Call API for Posts
export const postsRequest = (page = 1, perPage = 10) =>
	new Promise((resolve, reject) => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts?_start=${perPage * (page - 1)}&_limit=${perPage}`)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
