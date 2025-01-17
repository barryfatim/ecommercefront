import { createRouter, createWebHistory } from 'vue-router';
import WishList from '../components/WishList.vue';
import HomeComponent  from '../components/HomeComponent.vue';



const routes = [
    {
        name: ' WishList ',
        path: '/wishlist',
        component: WishList
    },

    {
        name: 'HomeComponent ',
        path: '/',
        component: HomeComponent
    },

    // {
    //     path: '/login',
    //     name: 'LoginForm',
    //     component: LoginForm
    //   },

    // {
    //     name: 'AddQuestion',
    //     path: '/add_Question',
    //     component: AddQuestion
    // },

    // {
    //     name: 'SignupForm',
    //     path: '/SignUp',
    //     component: SignupForm
    // },

    // {
    //     name: 'UsersList',
    //     path: '/users_list',
    //     component: UsersList
    // },

    // {
    //     path: '/Answer/:id',
    //     name: 'ShowAnswer',
    //     component: ShowAnswer
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router;


