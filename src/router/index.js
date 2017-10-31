import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Meetups from '@/components/meetup/Meetups'
import CreateMeetup from '@/components/meetup/CreateMeetup'
import Profile from '@/components/user/Profile'
import SignIn from '@/components/user/SignIn'
import SignUp from '@/components/user/SignUp'
import Meetup from '@/components/meetup/meetup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetup/:id',
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
  ],
  mode: 'history'
})
