import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "@/views/Index";
import Article from "@/views/Article";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: "/article/:id",
    component: Article,
    meta: {
      title: '文章'
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + ' - Lljieeeeee 个人博客'
  }
  next()
})


export default router