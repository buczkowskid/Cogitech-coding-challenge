<template>
	<div class="user-name">
		<div v-for="user in usersList" :key="user.id" :user="user">
			<p>{{ user.name }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	props: ["user"],

	computed: {
		...mapGetters("users", ["usersList"]),
	},

	mounted() {
		this.requestUsers();
	},

	methods: {
		...mapActions("users", ["requestUsers"]),
	},
};
</script>

<style></style>
