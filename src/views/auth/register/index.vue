<template>
  <div class="register">
    <el-form ref="rules" :rules="rules" :model="form">
      <el-form-item prop="userName">
        <el-input v-model.trim="form.userName" placeholder="请输入账号" prefix-icon="el-icon-goods"></el-input>
      </el-form-item>
      <el-form-item prop="passWorld">
        <el-input type="password" v-model.trim="form.passWorld" placeholder="请输入密码" prefix-icon="el-icon-view"></el-input>
      </el-form-item>
      <el-form-item prop="confirmPassWorld">
        <el-input type="password" v-model.trim="form.confirmPassWorld" placeholder="请确认密码" prefix-icon="el-icon-view"></el-input>
      </el-form-item>
      <el-form-item prop="key">
        <el-input v-model.trim="form.key" placeholder="关键密钥（用于找回密码请妥善保管）" prefix-icon="el-icon-info"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login_btn" type="primary" size="small" @click="submitForm()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { username, password } from 'shared/utils/validators'
import api from 'shared/api/login'
export default {
  name: 'register',

  data () {
    const other = this
    const confirmPassWorld2 = (rule, value, callback) => {
      if (other.form.confirmPassWorld !== other.form.passWorld) {
        callback(new Error('两次密码输入不一致！'))
      } else {
        callback()
      }
    }
    return {
      form: {
        userName: '',
        passWorld: '',
        confirmPassWorld: '',
        key: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { required: true, validator: username, trigger: 'blur' }
        ],
        passWorld: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, validator: password, trigger: 'blur' }
        ],
        confirmPassWorld: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, validator: confirmPassWorld2, trigger: 'blur' }
        ],
        key: [
          { required: true, message: '请输入关键密钥', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    submitForm () {
      this.$refs.rules.validate((valid) => {
        if (valid) {
          let params = {
            method: api.register,
            userName: this.form.userName,
            passWorld: this.form.passWorld,
            key: this.form.key
          }
          this.axios.post(params).then(res => {
            if (res.data.status === 200) {
              this.$parent.index = 1
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .register
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
