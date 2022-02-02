import Vue from "vue";
import Vuex from "vuex";
import { PaginationPlugin } from 'vuex-pagination'

import posts from "./posts";
import users from "./users";

Vue.use(Vuex);
Vue.use(PaginationPlugin)

const store = new Vuex.Store({
	modules: {
		posts: posts,
		users: users,
	},
});

export default store;
