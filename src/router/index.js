import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Filters from '../components/Filters.vue';
import Pokemon from '../components/Pokemon.vue';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { 
            path: '/', 
            name: 'Home', 
            component: Home
        }, 
        {
            path: '/filters',
            name: 'Filters', 
            component: Filters
        }, 
        {
            path: '/pokemon/:id',
            name: 'Pokemon', 
            component: Pokemon
        },
        {
            path: '/about', 
            name: 'About',
            component: About
        }
    ]
});