<template>
  <div class="login">
    <img class="logo" src="/static/image/login/logo.png" alt="">
    <div class="login_center">
      <div class="login_center_btns">
        <div class="login_enter" :class="{click: index === 1}" @click="index = 1">登入</div>
        <div class="login_register" :class="{click: index === 2}" @click="index = 2">注册</div>
      </div>
      <enter v-if="index === 1" @login_find="login_find"></enter>
      <register v-if="index === 2"></register>
    </div>
    <div class="login_find_box" v-if="show">
      <div class="login_center login_find_box_cent">
        <el-form ref="rules" :rules="rules" :model="form">
          <el-form-item prop="userName" v-if="!passwordShow">
            <el-input v-model.trim="form.userName" placeholder="请输入账号" prefix-icon="el-icon-goods"></el-input>
          </el-form-item>
          <el-form-item prop="key" v-if="!passwordShow">
            <el-input v-model.trim="form.key" placeholder="关键密钥（用于找回密码请妥善保管）" prefix-icon="el-icon-info"></el-input>
          </el-form-item>
          <el-form-item prop="passWorld" v-if="passwordShow">
            <el-input type="password" v-model.trim="form.passWorld" placeholder="请输入密码" prefix-icon="el-icon-view"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPassWorld" v-if="passwordShow">
            <el-input type="password" v-model.trim="form.confirmPassWorld" placeholder="请确认密码" prefix-icon="el-icon-view"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn_left" type="primary" size="small" @click="back()">关闭</el-button>
            <el-button class="login_btn_right" type="primary" size="small" @click="submitForm()" v-if="!passwordShow">密码找回申请</el-button>
            <el-button class="login_btn_right" type="primary" size="small" @click="passwordAmend()" v-if="passwordShow">修改密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import enter from './enter'
import register from './register'
import { username, password } from 'shared/utils/validators'
export default {
  name: 'login',

  components: { enter, register },

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
      index: 1,
      show: false,
      passwordShow: false,
      form: {
        userName: '',
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
          this.passwordApply()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    back () {
      this.show = false
    },

    login_find () {
      this.show = true
    },

    passwordApply () {
      this.passwordShow = true
    },

    passwordAmend () {
      this.$refs.rules.validate((valid) => {
        if (valid) {
          alert('密码修改成功')
          this.back()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .login
    width 100%
    height 100%
    background url('/static/image/login/background.png') no-repeat top left
    background-size 100% 100%
    position relative
    .logo
      width 260px
      margin-left 40px
      margin-top 15px
    .login_center
      width 300px
      border-radius 20px
      padding 30px
      box-shadow 0px 5px 32px 0px rgba(0, 12, 68, 0.71)
      background rgba(255, 255, 255, 0.1)
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      .login_center_btns
        width 100%
        overflow hidden
        text-align center
        margin-bottom 30px
        line-height 32px
        background rgba(96, 98, 102, 0.4)
        border-radius 5px
        color #ffffff
        letter-spacing 2px
        cursor pointer
        .login_enter
          width 50%
          float left
        .login_register
          float left
          width 50%
        .click
          background rgba(96, 98, 102, .6)
    .login_find_box
      position fixed
      width 100%
      height 100%
      top 0
      left 0
      background rgba(0, 0, 0, 0.6)
      .login_find_box_cent
        background rgba(255, 255, 255, 0.8)
        .login_btn_left
          float left
        .login_btn_right
          float right
</style>
