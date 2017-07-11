<template>
	<div id='menu'>
	<el-menu :default-active="$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
      <el-menu-item-group title="博客管理">
        <template v-for="(item,index) in blog_item" v-if="!item.hidden">
          <el-menu-item :index="item.path" ><i class="fa" :class="item.class"></i>{{item.title}}</el-menu-item>
        </template>
	  </el-menu-item-group>
	  <el-menu-item-group title="ElementUI介绍">
        <template v-for="(item,index) in element_item" v-if="!item.hidden">
          <el-menu-item :index="item.path" ><i class="fa" :class="item.class"></i>{{item.title}}</el-menu-item>
        </template>
	  </el-menu-item-group>
    </el-menu>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        element_item: [
          {
            title: '表单',
            path: '/index/form',
            class: 'fa-newspaper-o'
          }, {
            title: '分页',
            path: '/index/epage',
            class: 'fa-pagelines'
          }, {
            title: '标签页',
            path: '/index/tab',
            class: 'fa-tag'
          }, {
            title: '导航栏',
            path: '/index/navmenu',
            class: 'fa-bars'
          }, {
            title: '步骤条',
            path: '/index/step',
            class: 'fa-step-forward'
          }
        ],
        blog_item: [
          {
            title: '用户',
            path: '/index/user',
            class: 'fa-user'
          }, {
            title: '文章',
            path: '/index/article',
            class: 'fa-newspaper-o'
          }, {
            title: '评论',
            path: '/index/comment',
            class: 'fa-comment-o'
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
    background-color: #fff;
    position: fixed;
    float: left;
    border-right: solid 1px #ccc;
    overflow: auto;
  }
</style>