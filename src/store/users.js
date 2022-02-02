// Import API call

import { usersRequest } from "../services/api.js";

export default {
	namespaced: true,

	state: {
		users: null,
	},

	getters: {
		usersList: (state) => state.users || [],
	},

	actions: {
		requestUsers({ commit }) {
			return new Promise((resolve, reject) => {
				usersRequest()
					.then((res) => {
						commit("setUsers", res.data);
						resolve(res);
                        console.log(res.data);
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
	},

	mutations: {
		setUsers(state, payload) {
			state.users = payload;
		},
	},
};
