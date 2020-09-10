<template>
  <div class="reg-container">
    <div class="reg-form">
      <div class="title">择栖工作室招新注册表</div>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="usrname">
          <el-input v-model="form.usrname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password1">
          <el-input v-model="form.password1"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="register-btn">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 校验两次密码是否一致
    var checkPasswd = (rule, value, cb) => {
      if (this.form.password === this.form.password1) {
        return cb()
      }
      return cb(new Error('密码不一致'))
    }

    // 校验邮箱地址格式是否正确
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-z0-9_-])+@([a-zA-z0-9_-])+(\.[a-a-zA-z0-9_-])+/
      if (regEmail.test(value)) return cb()

      cb(new Error('请输入合法的邮箱'))
    }

    return {
      // 表单数据
      form: {
        usrname: '',
        password: '',
        password1: '',
        email: '',
        code: '',
      },
      // 验证规则
      rules: {
        // 用户名
        usrname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        // 密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度至少6位', trigger: 'blur' },
        ],
        // 密码校验
        password1: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: checkPasswd,
            message: '两次输入的密码不相同',
            trigger: 'blur',
          },
        ],
        // 邮箱
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            validator: checkEmail,
            message: '请输入正确的邮箱地址',
            trigger: 'blur',
          },
        ],
        // 验证码
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          {
            min: 4,
            max: 4,
            message: '请输入正确的验证码位数',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {},
}
</script>

<style scoped>
.reg-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599333017947&di=6898a4d6037d67cdc92bfe9fb51f2578&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201312%2F13%2F20131213023000_tT23d.jpeg');
}

.reg-form {
  width: 60%;
  padding: 30px 50px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 18px;
  box-shadow: 0 0 25px rgba(245, 245, 245, 0.5);
  background-color: rgba(245, 245, 245, 0.6);
}

.title {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
}

.register-btn {
  width: 30%;
  align-self: center;
}
</style>
