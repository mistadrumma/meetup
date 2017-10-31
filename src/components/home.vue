<template lang="html">
<v-container >
	<v-layout row wrap class="mt-4">
		<v-flex xs12 sm6 class="text-xs-center text-sm-right">
			<v-btn large router to="/meetups" class="blue-grey" dark>
				Explore Meetups
			</v-btn>
		</v-flex>
		<v-flex xs12 sm6 class="text-xs-center text-sm-left">
			<v-btn large router to="/meetups/new" class="red accent-1" dark>
				Organize Meetups
			</v-btn>
		</v-flex>
	</v-layout>
	<v-layout row wrap class="mt-3">
		<v-flex xs12 >
			<v-carousel style="cursor: pointer">
			 <v-carousel-item
			 v-for="meetup in meetups"
			 :src="meetup.imageUrl"
			 :key="meetup.id"
			 @click="OnLoadMeetup(meetup.id)"
			 >
			 <div class="title0">
				 	<h3>**{{ meetup.title }}</h3>
			 </div>
		 </v-carousel-item>
		 </v-carousel>
	 </v-flex>
	</v-layout>
	<v-layout row wrap class="mt-4">
		<v-flex xs12 class="text-xs-center">
			<p class="title"> Join our awesome meetups!</p>
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
			return this.$store.getters.featuredMeetups
		}
	},
	methods: {
		OnLoadMeetup(id) {
			this.$router.push('/meetup/' + id)
		}
	}
}
</script>

<style lang="css" scoped>

.title0 {
	position: absolute;
	bottom: 50px;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	font-size: 2 em;
	padding: 20px;
}
.carousel {
	margin-top: 20px;
}
</style>
