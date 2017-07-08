<template>
	<div id='menu'>
	<el-menu :default-active="$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
      <template v-for="(item,index) in menuItem" v-if="!item.hidden">
        <el-menu-item :index="item.path" ><i class="fa" :class="item.class"></i>{{item.title}}</el-menu-item>
      </template>
    </el-menu>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        menuItem: [
          {
            title: '首页',
            path: '/index',
            class: 'fa-home'
          }, {
            title: '表格',
            path: '/table',
            class: 'fa-table'
          }, {
            title: '表单',
            path: '/form',
            class: 'fa-newspaper-o'
          }, {
            title: '其它',
            path: '/other',
            class: 'fa-plug'
          }
        ]
      }
    }
  }
</script>
<style>
  i.fa {
    vertical-align: baseline;
    margin-right: 10px;
  }
  #menu .el-menu {
    height: 100%;
    background-color: #E6E6E6;
    position: fixed;
    float: left;
  }
</style>