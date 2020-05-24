import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import ProductBacklog from '../views/ProductBacklog.vue';
import SprintBacklog from '../views/SprintBacklog.vue';

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
