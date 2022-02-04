<template>
	<div class="reviews section-padding section white-section" id="reviews">
		<div class="wrapper">
			<div class="reviews__boxes">
				<div class="reviews__box">
					<div class="reviews__box-info">
						<h2 class="reviews__box-title">{{ post.title }}</h2>
						<VueReadMoreSmooth :lines="3">
							<p class="reviews__box-text">
								{{ post.body }}
							</p>
						</VueReadMoreSmooth>
						<UserNameItem />
						<font-awesome-icon
							:icon="['fas', 'times']"
							@click="deleteItem"
							class="reviews__box-btn"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueReadMoreSmooth from "vue-read-more-smooth";
import UserNameItem from "./UserNameItem.vue";

export default {
	props: ["post", "user"],

	components: { VueReadMoreSmooth, UserNameItem },

	methods: {
		deleteItem() {
			this.$emit("deleteClicked", this.postList);
		},
	},
};
</script>

<style lang="scss">
.reviews {
	.wrapper {
		margin: 0 auto;
		width: 100%;
		max-width: 768px;
	}
	&__box {
		position: relative;
		margin: 2em;
		padding: 2em;
		border-radius: 8px;
		box-shadow: 3px 3px 10px #2e2e2e2e;
	}

	&__box-title {
		margin-bottom: 1em;
		font-size: 1.4rem;
		color: rgb(0, 0, 0);
	}

	&__box-text {
		margin-bottom: 1em;
		font-size: 1.4rem;
		color: rgb(0, 0, 0);
	}

	&__box-btn {
		position: absolute;
		top: 1.2rem;
		right: 2rem;
		padding: 0 0.3em;
		font-size: 1.4rem;
		color: #d11a2a;
		text-decoration: none;
		transition: transform 0.3s;

		&:hover {
			transform: scale(1.3);
		}
	}
}
</style>
