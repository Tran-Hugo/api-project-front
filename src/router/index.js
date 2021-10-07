import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Post from '../views/Post.vue'
import Posts from '../views/Posts.vue'
import addPost from '../views/addPost.vue'
import Dashboard from '../views/Dashboard.vue'
import PostsAdmin from '../views/PostsAdmin.vue'
import CategoriesAdmin from '../views/CategoriesAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path:'/post/:id',
    component: Post
  },
  {
    // Posts avec pagination, on passe l'id, va voir le router-link on passe un id par défaut dans le lien
    path:'/posts',
    name:'posts',
    component: Posts,
    children:[{
      path:':id',
      name:'postsId',
      component:Posts,
      props:true,
    }
    ]
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: addPost
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component: Dashboard,
    beforeEnter:  (to,from,next)=>{
      // store.dispatch('test')
      if(store.state.role !== 'ROLE_ADMIN') {
        next(false);
      } else {
        next();
      }
    },
    children:[
      {
        path:'Posts',
        name:'postsAdmin',
        component:PostsAdmin,
      },
      {
        path:'Categories',
        name:'categoriesAdmin',
        component:CategoriesAdmin,
      },
    ],
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
