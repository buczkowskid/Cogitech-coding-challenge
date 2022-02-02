<template>
	<div class="wrapper">
		<h1>Post App</h1>
		<PostApp />
	</div>
</template>

<script>
import PostApp from "./components/PostApp.vue";

export default {
	components: {
		PostApp,
	},
};
</script>

<style lang="scss">
.wrapper {
	margin: 0 auto;
	width: 100%;
	max-width: 1200px;
}
</style>
