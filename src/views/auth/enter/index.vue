<template>
  <div class="enter">
    <el-form ref="rules" :rules="rules" :model="form">
      <el-form-item prop="userName">
        <el-input v-model.trim="form.userName" placeholder="请输入账号" prefix-icon="el-icon-goods"></el-input>
      </el-form-item>
      <el-form-item prop="passWorld">
        <el-input type="password" v-model.trim="form.passWorld" placeholder="请输入密码" prefix-icon="el-icon-view"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login_btn" type="primary" size="small" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="login_find" @click="login_find">忘记密码 ？</div>
  </div>
</template>

<script>
import { username, password } from 'shared/utils/validators'
export default {
  name: 'enter',

  data () {
    return {
      form: {
        userName: '',
        passWorld: ''
      },

      rules: {
        userName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { required: true, validator: username, trigger: 'blur' }
        ],
        passWorld: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, validator: password, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    submitForm () {
      this.$refs.rules.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    login_find () {
      this.$emit('login_find')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .enter
    .login_btn
        width 100%
      .login_find
        font-size 12px
        float right
        cursor pointer
        color #606266
        &:hover
          color #F56C6C
</style>
