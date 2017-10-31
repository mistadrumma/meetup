<template lang="html">
	<v-container>

			<v-layout row wrap class="mt-4" v-for="meetup in meetups" :key="meetup.id">
				<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
					<v-card class="" >
						<v-container fluid>
							<v-layout>
								<v-flex xs5 sm4 md3>
									<v-card-media
                        :src="meetup.imageUrl"
                        height="130px"

                      ></v-card-media>
								</v-flex>
								<v-flex xs3 sm3 md3>
									<v-card-title primary-title class="pb-0 pt-1">
										<div class="">
											<h5 class="accent--text mb-0 ">
												{{ meetup.title }}
											</h5>
											<div class="mt-0">
												{{ meetup.date }}
											</div>
										</div>
									</v-card-title>
									<v-card-actions class="">
										<v-btn :to="'/meetup/' + meetup.id" class="mt-4" flat>
												View Meetup
												<v-icon right light>arrow_forward</v-icon>
										</v-btn>
									</v-card-actions>
								</v-flex >
								<v-flex xs4 sm7 md6>
									<v-card-text class="pt-2">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
									</v-card-text>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
			</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	computed: {
		meetups() {
			return this.$store.getters.loadedMeetups
		},
	}
}
</script>

<style lang="css">
</style>
