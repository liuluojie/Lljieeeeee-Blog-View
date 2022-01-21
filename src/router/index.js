import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "@/views/Index";
import Article from "@/views/Article";
import Archive from "@/views/Archive";
import Category from "@/views/Category";
import CategoryArticleList from "@/views/CategoryArticleList";
import Tag from "@/views/Tag";
import TagArticleList from "@/views/TagArticleList";
import Error404 from "@/views/Error404";
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
  {
    path: "/category",
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: "/category/:name",
    component: CategoryArticleList,
    meta: {
      title: '分类'
    }
  },
  {
    path: "/tag",
    component: Tag,
    meta: {
      title: '标签'
    }
  },
  {
    path: "/tag/:name",
    component: TagArticleList,
    meta: {
      title: '标签'
    }
  },
  {
    path: '*',
    component: Error404
  }
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
