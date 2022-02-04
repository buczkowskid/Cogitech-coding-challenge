<template>
	<div class="pagination">
		<div v-for="i of 10" :key="i">
			<a
				href="#"
				@click.prevent="setPage(i)"
				class="pagination__item"
				:class="{ active: page === i }"
				>{{ i }}</a
			>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters("posts", ["page"]),
	},

	methods: {
		async setPage(page) {
			await this.$store.dispatch("posts/setPage", page);
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
	},
};
</script>

<style lang="scss">
.pagination {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;

	&__item {
		margin-left: 20px;
		margin-right: 20px;
		border: solid 1px #ddd;
		background-color: #f5f5f5;
		width: 30px;
		height: 30px;
		display: inline-flex;
		text-decoration: none;
		color: #666;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
		font-family: sans-serif;
		font-size: 14px;
	}

	&__item.active {
		background: royalblue;
		border: none;
		color: white;
	}
}
</style>
