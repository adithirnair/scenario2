import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import UserAuth from '../components/Contact.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/userauth', component: UserAuth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
