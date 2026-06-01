import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/contacts.vue'
import Services from '../views/services.vue'
import Photos from '../views/photos.vue'
import Videos from '../views/videos.vue'
import Kigali from '../views/Kigali.vue'
import EastProvince from '../views/EastProvince.vue'
import NorthProvince from '../views/NorthProvince.vue'
import SouthProvince from '../views/SouthProvince.vue'
import WestProvince from '../views/WestProvince.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contacts
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/kigali',
    name: 'Kigali',
    component: Kigali
  },
  {
    path: '/east-province',
    name: 'EastProvince',
    component: EastProvince
  },
  {
    path: '/north-province',
    name: 'NorthProvince',
    component: NorthProvince
  },
  {
    path: '/south-province',
    name: 'SouthProvince',
    component: SouthProvince
  },
  {
    path: '/west-province',
    name: 'WestProvince',
    component: WestProvince
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router