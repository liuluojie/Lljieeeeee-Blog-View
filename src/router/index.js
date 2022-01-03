import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "@/views/Index";
import Article from "@/views/Article";
import Archive from "@/views/Archive";

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
  {
    path: "/archive",
    component: Archive,
    meta: {
      title: '归档'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
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
