<template>
  <div id="header">
    <div class="header-inner">
      <div class="top-nav">
        <div class="top-nav-bar">
          <el-menu
            :default-active="activeIndex"
            class="no-border"
            mode="horizontal"
            background-color="rgba(255,255,255,0)"
            @select="handleSelect"
          >
            <el-menu-item index="1" @click="toIndex">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">实验室</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">归档</el-menu-item>
            <el-menu-item index="4">后宫</el-menu-item>
            <el-menu-item index="5">手办展</el-menu-item>
            <el-menu-item index="6">关于我</el-menu-item>
            <li class="search">
              <span class="el-icon-search"></span>
            </li>
            <li class="online">999人在线</li>
          </el-menu>
        </div>
      </div>
      <div class="head-background"></div>
      <div class="site-master">
        <div class="site-master-avatar">
          <el-avatar :size="200" src="https://avatars2.githubusercontent.com/u/32379338"></el-avatar>
        </div>
        <div class="site-master-description">
          <p>菜狗一枚</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toIndex(){
      this.$router.push({path:'/'})
    }
  }
};
</script>

<style>
.header-inner {
  width: 100%;
  height: 750px;
  padding: 0;
  position: relative;
}
.top-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
  /* text-shadow: 0 1px 1px rgba(0,0,0,.3); */
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
}
.top-nav-bar {
  margin-top: 0;
  margin: 0 auto;
  width: 1100px;
  max-width: 100vw;
  position: relative;
  text-align: left;
}
.head-background {
  background-image: url(https://cdn.jsdelivr.net/gh/Ddoudou/dd/src/static/img/bg0.webp);
  position: relative;
  height: 650px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.online {
  color: white;
  float: right;
  font-size: 12px;
  margin: 0;
  height: 60px;
  line-height: 60px;
}
.search {
  color: white;
  float: right;
  margin: 0 0 0 20px;
  height: 60px;
  line-height: 60px;
}
.el-menu-item.is-active,
.el-menu-item.is-active:hover,
.el-menu-item,
.el-submenu,
.el-submenu__title {
  color:white !important;
  border: 0 !important;
  background-color: rgba(0, 0, 0, 0) !important;
}

/* 头像及介绍区域 */
.site-master {
  background: linear-gradient(rgba(64, 158, 255, .5), transparent);
  padding: 40px 0;
  text-align: center;
  z-index: 1;
  position: relative;
  width: 70%;
  top: -336px;
  margin: auto;
  margin-bottom: -336px;
}
.site-master-description {
  color: white;
  font-size: 40px;
}
</style>
