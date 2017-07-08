import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index.vue'
import Table from '../components/table/table.vue'
import Form from '../components/form/form.vue'
import other from '../components/other/other.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'index',
  }, {
    path: '/index',
    component: Index,
  }, {
    path: '/table',
    component: Table,
    name: 'table',
    class: 'fa-table'
  }, {
    path: '/form',
    component: Form,
    name: 'form',
    class: 'fa-newspaper-o'
  }, {
    path: '/other',
    component: other,
    name: 'other',
    class: 'fa-plug'
  }, {
    path: '*',
    redirect: 'index'
  }]
})
