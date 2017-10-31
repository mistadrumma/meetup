<template lang="html">
	<v-container>

			<v-layout row wrap class="mt-4" >
				<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
					<v-card class="info">
						<v-container fluid>
							<v-layout>
								<v-flex xs5 sm4 md3>
									<v-card-media
                        src="https://static.pexels.com/photos/587839/pexels-photo-587839.jpeg"
                        height="130px"

                      ></v-card-media>
								</v-flex>
								<v-flex xs7 sn8 md9>
									<v-card-title primary-title class="pb-0">
										<div class="">
											<h5 class="white--text mb-0 ">
												My Meetup
											</h5>
											<div class="mt-0">
												17th Jule 2017
											</div>
										</div>
									</v-card-title>
									<v-card-actions class="">
										<v-btn class="mt-0" flat>
											<v-icon left light>arrow_forward</v-icon>
											View Meetup</v-btn>
									</v-card-actions>
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
}
</script>

<style lang="css">
</style>
