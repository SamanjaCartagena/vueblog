import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import PostsPage from '../components/pages/PostsPage.vue';
import CreatePosts from '../components/pages/CreatePosts.vue';

const router= createRouter({
    history:createWebHistory(),
    routes:[
        
        {
    path: "/",
    component: HomePage
  },
  {
    path: "/posts",
    component: PostsPage
  },
 {
     path:'/createposts',
     component :CreatePosts           
  }
    ],
    linkActiveClass :'active'
})
export default router;