import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://static.pexels.com/photos/450597/pexels-photo-450597.jpeg',
        id: '1',
        title: 'Meet up in New York',
        date: '2017-10-30'
      },
      {
        imageUrl: 'https://static.pexels.com/photos/587839/pexels-photo-587839.jpeg',
        id: '2',
        title: 'Meet up in New Paris',
        date: '2017-10-29'
      },
      {
        imageUrl: 'https://static.pexels.com/photos/417430/pexels-photo-417430.jpeg',
        id: '3',
        title: 'Meet up in New Moscow',
        date: '2017-10-31'
      },
      {
        imageUrl: 'https://static.pexels.com/photos/374815/pexels-photo-374815.jpeg',
        id: '4',
        title: 'Meet up in New London',
        date: '2017-10-18'
      },
    ],
    user: {
      id: '1',
      registerMeetups: [
        '1',

      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups: state => state.loadedMeetups,

    featuredMeetups: (state, getters) => getters.loadedMeetups.slice(0,5),


    loadedMeetup: (state, getters) => (meetupId) =>{
      return state.loadedMeetups.find(meetup => meetup.id === meetupId)
    }
  }
})
