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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkPasswd = (rule, value, cb) => {
      if (this.form.password === this.form.password1) {
        return cb()
      }
      return cb(new Error('密码不一致'))
    }
    return {
      // 表单数据
      form: {
        usrname: '',
        password: '',
        password1: '',
        email: '',
        code: ''
      },
      // 验证规则
      rules: {
        // 用户名
        usrname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        // 密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度至少6位', trigger: 'blur' }
        ],
        // 密码校验
        password1: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: checkPasswd,
            message: '两次输入的密码不相同',
            trigger: 'blur'
          }
        ],
        // 邮箱
        email: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' }],
        // 验证码
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {}
}
</script>

<style scoped></style>
