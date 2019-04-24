import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Games from '@/components/GamesPage'
import Challenges from '@/components/ChallengesPage'
import Info from '@/components/ChallengeInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Games',
      name: 'Games',
      component: Games
    },
    {
      path: '/Challenges',
      name: 'Challenges',
      component: Challenges
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    }
  ]
})