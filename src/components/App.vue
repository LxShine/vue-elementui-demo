<template>
  <div id='app'>
  <el-row class="container" style="height: 100%">
    <v-header :user="user"></v-header>
    <el-col :span="24" class="main">
      <el-row>
        <v-menu></v-menu>
        <section class="contentCon">
          <el-col :span="21" :offset="3" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </section>
      </el-row>
    </el-col>
  </el-row>
  </div>
</template>
<script>
  import header from '../components/header/header.vue';
  import menu from '../components/menu/menu.vue';
  export default {
    data () {
      return {
        user: {
          name: "OverrideRe"
        }
      };
    },
    created () {
    },
    beforeCreate () {
    },
    components: {
      'v-header': header,
      'v-menu': menu
    }
  };
</script>
<style>
 
  body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    background-color: #fff;
  }

  .container {
    padding-top: 80px;
    height: 100%;
  }

  .container .main {
    padding: 0;
  }

  .container ul li.el-menu-item {
    font-size: 100%;
  }

  .container .mar-l {
    padding: 0;
  }

  .container .content-wrapper {
    padding: 20px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

