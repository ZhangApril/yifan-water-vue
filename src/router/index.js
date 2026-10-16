import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cases from '../views/Cases.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: '首页' } },
  { path: '/about', name: 'About', component: About, meta: { title: '关于熠凡' } },
  { path: '/cases', name: 'Cases', component: Cases, meta: { title: '案例中心' } },
  { path: '/news', name: 'News', component: News, meta: { title: '新闻资讯' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: '联系我们' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title} | 熠凡水务建筑工程`
  }
})

export default router
