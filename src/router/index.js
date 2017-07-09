import Vue from 'vue'
import Router from 'vue-router'
import User from '../components/blog/user.vue'
import Article from '../components/blog/article.vue'
import Comment from '../components/blog/comment.vue'
import Table from '../components/element/e_table.vue'
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
    redirect: 'user',
  }, {
    path: '/user',
    component: User,
  }, {
    path: '/article',
    component: Article,
    name: 'article'
  }, {
    path: '/comment',
    component: Comment,
    name: 'comment'
  }, {
    path: '/table',
    component: Table,
    name: 'table'
  }, {
    path: '/form',
    component: Form,
    name: 'form'
  }, {
    path: '/navmenu',
    component: NavMenu,
    name: 'navmenu'
  }, {
    path: '/epage',
    component: Pagination,
    name: 'epage'
  }, {
    path: '/tab',
    component: Tab,
    name: 'tab'
  }, {
    path: '/step',
    component: Step,
    name: 'step'
  }, {
    path: '*',
    redirect: 'index'
  }]
})
