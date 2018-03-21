import Vue from 'vue';
import Router from 'vue-router';

// import sidebar
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"

// local imports
import Overview from '../pages/Overview';
import Orders from '../pages/Orders';
import Customers from '../pages/Customers';
import Menus from '../pages/Menus';
import Settings from '../pages/Settings';
import Logout from '../pages/Logout';

// my routes
const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/menus',
    name: 'Menus',
    component: Menus
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/logut',
    name: 'Logout',
    component: Logout
  }
]

// register as a global component
Vue.component("Sidebar", Sidebar)
Vue.component("Navbar", Navbar)
Vue.use(Router)

export default new Router({
  routes
})
