import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Login from '../components/login.vue'
import User from '../components/blog/user.vue'
import Article from '../components/blog/article.vue'
import Comment from '../components/blog/comment.vue'
import Form from '../components/element/e_form.vue'
import NavMenu from '../components/element/e_nav.vue'
import Pagination from '../components/element/e_page.vue'
import Tab from '../components/element/e_tab.vue'
import Step from '../components/element/e_step.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'index'
  }, {
    path: '/login',
    component: Login,
    name: 'login',
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: '/',
      name: 'index',
      redirect: 'user',
    }, {
      path: '/index/user',
      component: User,
      name: 'user'
    }, {
      path: '/index/article',
      component: Article,
      name: 'article'
    }, {
      path: '/index/comment',
      component: Comment,
      name: 'comment'
    }, {
      path: '/index/form',
      component: Form,
      name: 'form'
    }, {
      path: '/index/navmenu',
      component: NavMenu,
      name: 'navmenu'
    }, {
      path: '/index/epage',
      component: Pagination,
      name: 'epage'
    }, {
      path: '/index/tab',
      component: Tab,
      name: 'tab'
    }, {
      path: '/index/step',
      component: Step,
      name: 'step'
    }]
  }]
})
