// Import API call

import { postsRequest } from "../services/api.js";

export default {
	namespaced: true,

	//Init your state
	state: {
		posts: [],
	},

	//Hook your state to your getter and if there is no data, the getter will receive an empty Array
	getters: {
		postsList: (state) => state.posts || [],
	},

	//Create your action
	actions: {
		requestPosts({ commit }) {
			return new Promise((resolve, reject) => {
				postsRequest()
					.then((res) => {
						//Commit your mutation
						commit("setPosts", res.data);
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
	},

	//Mutate your state
	mutations: {
		setPosts(state, payload) {
			state.posts = payload;
		},
	},
};
