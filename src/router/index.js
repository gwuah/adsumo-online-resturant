import Vue from 'vue';
import Router from 'vue-router';

// import sidebar
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"
import OrderCard from "../components/OrderCard"
import UserRow from "../components/UserRow"

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
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

// register global component
Vue.component("Sidebar", Sidebar)
Vue.component("Navbar", Navbar)
Vue.component("OrderCard", OrderCard)
Vue.component("UserRow", UserRow)



Vue.use(Router)

export default new Router({
  routes
})
