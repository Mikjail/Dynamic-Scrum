import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import ProductBacklog from '../views/artifacts/ProductBacklog.vue';
import SprintBacklog from '../views/artifacts/SprintBacklog.vue';
import Increment from '../views/artifacts/Increment.vue';
import ScrumMaster from '../views/roles/ScrumMaster.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-backlog',
    name: 'Product Backlog',
    component: ProductBacklog
  },
  {
    path: '/sprint-backlog',
    name: 'Sprint Backlog',
    component: SprintBacklog
  },
  {
    path: '/product-increment',
    name: 'Increment',
    component: Increment
  },
  {
    path: '/scrum-master',
    name: 'Scrum Master',
    component: ScrumMaster
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
