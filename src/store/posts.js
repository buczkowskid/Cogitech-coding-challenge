// Import API call

import {postsRequest} from "@/services/api";

export default {
    namespaced: true,

    //Init your state
    state: {
        posts: [],
        page: 1,
    },

    //Hook your state to your getter and if there is no data, the getter will receive an empty Array
    getters: {
        postsList: (state) => state.posts || [],
        page: state => state.page || 1,
    },

    //Create your action
    actions: {
        requestPosts({commit}) {
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

        async setPage({commit}, page) {
            try {
                const {data} = await postsRequest(page)
                commit('setPosts', data)
                commit('updatePage', page)
            } catch (ex) {
                console.error('Something went wrong')
            }
        }
    },

    //Mutate your state
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },

        updatePage(state, page) {
            state.page = page;
        }
    },
};
