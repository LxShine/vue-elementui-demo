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
  import header from './components/header/header.vue';
  import menu from './components/menu/menu.vue';
  const ERR_OK = "000";
  export default {
    data () {
      return {
        user: {}
      };
    },
    created () {
      this.$http.get('/api/user').then((response) => {
        response = response.data;
        if (response.code === ERR_OK) {
          this.user = response.datas;
        }
      });
    },
    beforeCreate () {
      if (this.$route.path === '/') {
        this.$router.push({path: '/index'})
      }
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
    background-color: #F2F2F2;
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
</style>

