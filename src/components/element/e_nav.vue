<template>
<div id="e_nav">
  <h2>NavMenu导航菜单</h2>
  <p class="demo-p">为网站提供导航功能的菜单。</p>
  <el-row :gutter="20">
      <el-col :span="20">
        <h3 class="demo-h3">顶栏</h3>
        <p class="demo-p">适用广泛的基础用法。</p>
        <div class="demo-block">
          <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
          <div class="line"></div>
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="20">
      <h3 class="demo-h3">侧栏</h3>
      <p class="demo-p">垂直菜单，可内嵌子菜单。</p>
      <div class="demo-block">
      <div class="el-row tac">
      <el-col :span="8">
        <el-col :span="24">
          <h5 class="nav_title">带 icon</h5>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
          </el-menu>
        </el-col>
      </el-col>
      <el-col :span="8">
        <el-col :span="24">
          <h5 class="nav_title">不带 icon</h5>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-submenu index="1">
              <template slot="title">导航一</template>
              <el-menu-item-group title="分组一">
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">导航二</el-menu-item>
            <el-menu-item index="3">导航三</el-menu-item>
          </el-menu>
        </el-col>
      </el-col>
      <el-col :span="8">
        <el-col :span="24">
          <h5 class="nav_title">分组</h5>
          <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
            <el-menu-item-group title="分组一">
              <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
              <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
              <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-col>
      </el-col>
      </div>
      </div>
      </el-col>
    </el-row>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .nav_title {
    margin-bottom: 12px;
  }
  #e_nav .line {
      height: 1px;
      background-color: #e0e6ed;
      margin: 35px -24px;
  }
</style>
