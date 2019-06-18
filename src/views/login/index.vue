<template>
<div>
    <h3>系统登录</h3>
    <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
            <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
            <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>

</div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
export default {
  data () {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('The password can not be less than 6 digits'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          trigger: 'blur'
          // validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur'
          // validator: validatePassword
        }]
      }
    }
  }
}
</script>

<style>

</style>
