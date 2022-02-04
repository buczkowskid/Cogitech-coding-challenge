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
import Pagination from './Pagination.vue';

export default {
	components: {
		PostBoxItem,
    Pagination,
	},
	name: "App",

	//Data

	computed: {
		...mapGetters("posts", ["postsList"]),
		...mapGetters("users", ["usersList"]),
	},

	mounted() {
		this.requestPosts();
		this.requestUsers();
	},

	//Methods
	methods: {
		...mapActions("posts", ["requestPosts"]),
		...mapActions("users", ["requestUsers"]),
		deleteItem: function (index) {
			this.$delete(this.postsList, index);
		},
	},
};
</script>

<style>
.home {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
}
.home-data {
	padding: 20px;
	overflow: hidden;
	border: 1px solid lightgray;
}
</style>
