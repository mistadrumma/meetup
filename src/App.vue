<template>
  <v-app>
		<v-navigation-drawer
			temporary
			v-model="sideNav"
		>
			<v-list dense class="pt-0">
				<v-list-tile  v-for="item in menuItem" :key="item.title" router :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
			</v-list>
	</v-navigation-drawer>
		  <v-toolbar class="teal" dark>
				<v-toolbar-side-icon temporary @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
		    	<v-toolbar-title>
					<router-link to="/" tag='span' style="cursor: pointer">{{ label }}</router-link>
					</v-toolbar-title>
		    <v-spacer></v-spacer>
		    <v-toolbar-items class="hidden-sm-and-down" v-for="item in menuItem" :key="item.title">
		      <v-btn flat router :to="item.link">
						<v-icon left>{{ item.icon }}</v-icon>
		        {{ item.title }}
		      </v-btn>
		    </v-toolbar-items>
		  </v-toolbar>
    <main>
			<router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
				label: 'Meet Up',
        sideNav: false,
          menuItem: [
					{ icon: 'supervisor_account',title: 'View Meetups', link: '/meetups'},
					{ icon: 'room', title: 'Organize Meetups', link: '/meetups/new'},
					{ icon: 'person', title: 'Profile', link: '/profile'},
					{ icon: 'face', title: 'Sign up', link: '/signup'},
					{ icon: 'lock_open', title: 'Sign in', link: '/signin'}
				]
      }
    }
  }

</script>

<style lang="css">
.container {
		margin: 0 auto;
}
</style>
