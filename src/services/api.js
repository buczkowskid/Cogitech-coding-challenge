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
export const postsRequest = () =>
	new Promise((resolve, reject) => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
