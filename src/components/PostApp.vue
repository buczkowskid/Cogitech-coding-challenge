<template>
	<div id="app">
		<PostBoxItem
			v-for="(post, index) in postsList"
			:key="post.id"
			:post="post"
			@deleteClicked="deleteItem(index)"
		/>

		<Pagination />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostBoxItem from "./PostBoxItem.vue";
import Pagination from "./Pagination.vue";

export default {
	components: {
		PostBoxItem,
		Pagination,
	},
	name: "App",

	computed: {
		...mapGetters("posts", ["postsList"]),
		...mapGetters("users", ["usersList"]),
	},

	mounted() {
		this.requestPosts();
		this.requestUsers();
	},

	methods: {
		...mapActions("posts", ["requestPosts"]),
		...mapActions("users", ["requestUsers"]),
		deleteItem: function (index) {
			this.$delete(this.postsList, index);
		},
	},
};
</script>

<style></style>
