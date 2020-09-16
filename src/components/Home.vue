<template>
  <div class="home-container">
    <div class="header">
      <a class="logo" href="/#/index" @click="defaultActive = '/index'">
        <img
          src="https://gitee.com/zeqistudio/zeqistudio/raw/master/image/icon/Logo1.png"
          class="logo-img"
        />
        <span class="logo-text">择栖工作室</span>
      </a>
      <el-menu class="menu" mode="horizontal" :default-active="$route.path" :router="true">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/intro">工作室介绍</el-menu-item>
        <el-menu-item index="/direction">技术方向</el-menu-item>
        <el-menu-item index="/member">成员去向</el-menu-item>
        <el-menu-item index="/prize">荣誉奖项</el-menu-item>
      </el-menu>
      <div class="header-right">
        <div class="header-btns" v-if="showBtn">
          <el-button plain @click="toLogin">sign in</el-button>
          <el-button type="primary" @click="toRegister">sign up</el-button>
        </div>
        <div class="usr-info" v-else></div>
      </div>
    </div>
    <div class="home-body">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBtn: window.sessionStorage.getItem('token') ? false : true,
    }
  },
  methods: {
    // 跳转到登录界面
    toLogin() {
      this.$router.push('/login')
    },
    // 跳转到注册界面
    toRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<style>
.home-container {
  width: 100%;
}

.header {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

.logo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  color: black;
}

.logo-img {
  width: 30px;
  height: 35px;
}

.logo-text {
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
}

.home-body {
  background-color: rgb(240, 242, 245);
  min-height: calc(100vh - 61px);
}

.footer {
  width: 100%;
  height: 443px;
  background-color: rgba(0, 0, 0, 1);
}
</style>
