import { postsRequest } from "@/services/api";

export default {
	namespaced: true,

	state: {
		posts: [],
		page: 1,
	},

	getters: {
		postsList: (state) => state.posts || [],
		page: (state) => state.page || 1,
	},

	actions: {
		requestPosts({ commit }) {
			return new Promise((resolve, reject) => {
				postsRequest()
					.then((res) => {
						commit("setPosts", res.data);
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			});
		},

		async setPage({ commit }, page) {
			try {
				const { data } = await postsRequest(page);
				commit("setPosts", data);
				commit("updatePage", page);
			} catch (ex) {
				console.error("Something went wrong");
			}
		},
	},

	mutations: {
		setPosts(state, payload) {
			state.posts = payload;
		},

		updatePage(state, page) {
			state.page = page;
		},
	},
};
