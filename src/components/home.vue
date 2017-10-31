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
			<v-carousel>
			 <v-carousel-item
			 v-for="meetup, in meetups"
			 :src="meetup.imageUrl"
			 :key="meetup.id"
			 >
			 <div class="title0">
				 	{{ meetup.title }}
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
			meetups: [
				{ imageUrl: 'https://static.pexels.com/photos/450597/pexels-photo-450597.jpeg', id: '1', title: 'Meet up in New York' },
				{ imageUrl: 'https://static.pexels.com/photos/587839/pexels-photo-587839.jpeg', id: '2', title: 'Meet up in New Paris' },
				{ imageUrl: 'https://static.pexels.com/photos/417430/pexels-photo-417430.jpeg', id: '3', title: 'Meet up in New Moscow' },
				{ imageUrl: 'https://static.pexels.com/photos/374815/pexels-photo-374815.jpeg', id: '4', title: 'Meet up in New London' },
			]
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
