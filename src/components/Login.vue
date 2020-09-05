<template>
  <div class="login-container">
    <div class="login-box">
      <div class="title">Ze Qi Studio</div>
      <el-input
        placeholder="请输入用户名"
        prefix-icon="fa fa-user"
        v-model="usrname"
        clearable
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="fa fa-lock"
        v-model="password"
        type="password"
        clearable
      >
      </el-input>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usrname: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599303255683&di=fdf4b11700b0362ea130aa4586664574&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170821%2F20170821133945_d41d8cd98f00b204e9800998ecf8427e_1.jpeg");
}

.login-box {
  width: 40%;
  height: 50%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
}

.title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}
</style>
