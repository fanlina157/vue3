<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
       <p>练习系统</p>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user"></i>
        </span>
        <el-input
          ref="username"
          v-model="loginForm.userid"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
          @keyup.enter.native="asnyAdd"
        />
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-key"></i>
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            @keyup.enter.native="asnyAdd"
          />
        </el-form-item>
      </el-tooltip>
      <div clsas="login-btn" style="margin:75px auto; text-align: center">
        <el-button
          :loading="loading"
          type="primary"
          align="center"
          style="width:70%;margin-bottom:30px;"
          @click.native.prevent="asnyAdd"
        >登录</el-button>

      </div>
    </el-form>
    <!-- 同步 -->
    <button @click="increment"></button>
    <!-- 异步 -->
     <button @click="asnyAdd"></button>
     <!-- 同步 -->
      <button @click="changePassword({password: 123456})"></button>
      <!-- 异步 -->
     <button @click="changeNickname({nickname: 'sleepwalker'})"></button>
   </div>
</template>
<script>
// import API from '../../api/login';

import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userid: '',
        password: ''
      },
      loginRules: {
        userid: '',
        password: '',
        checkcode: ''
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      src: ''
    }
  },
  methods: {

    ...mapMutations(['increment', 'changePassword']), // 同步

    increment () {
      // ?????????
      // 通过mapMutations 后直接调用
      this.increment()
      // 或者this.$store.commit('xxx')
      // this.$store.commit('increment')
    },

    // 使用 mapActions 辅助函数分发 action(不能传参)
    ...mapActions(['asnyAdd', 'changeNickname']), // 异步
    // 或者单独写一个函数
    //   triggerLogin (){
    //     this.asnyAdd(arg1, arg2)
    //  }

    // 或者this.$store.dispatch('xxx',{可以写参数})
    asnyAdd () {
      // const that = this;
      this.loading = true
      this.$router.replace('/home')
    //   this.$store
    //     .dispatch('users/loginInfo', this.loginForm)
    //     .then(data => {
    //       that.loading = false;
    //       if (data.code === 200) {
    //         this.$message({
    //           type: 'success',
    //           message: data.msg
    //         });
    //         this.$router.replace('/home');
    //       } else {
    //         this.$message({
    //           type: 'error',
    //           message: data.msg
    //         });
    //       }
    //     })
    //     .catch(error => {
    //       if (error.includes('失效')) {
    //         this.fetchAuthCode();
    //       }
    //       that.loading = false;
    //     });
    }
  }
}
</script>
<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: color #889aa4;
 .authLoad-img{
    position: absolute;
    right: -1px;
    top: -1px;
    height: 41px;
    cursor: pointer;
  }
  .error-img{
    width: 86px;
    height: 44px;
    top: -2px;
    right: -2px;
  }
/* reset element-ui css */

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  .el-input {
    display: inline-block;
    height: 40px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      // padding: px 5px 20px 15px;
      color: $cursor;
      height: 40px;
      caret-color: $cursor;
      font-size: 18px;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #fff inset !important;
        // -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-button {
    padding: 12px;
    border-radius: 32px;
    margin-top: 5px;
    font-size: 20px;
    cursor: pointer;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    width: 70%;
    text-align: center;
    margin: 20px auto;
    border-radius: 32px;
    border: 2px solid rgba(238, 238, 238, 1);
    background: transparent;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  // min-height: 100%;
  // width: 100%;
  // background-color: $bg;
  overflow: hidden;
  background: #000;
  // background: url("../../assets/images/loginbg.png") center no-repeat;
  background-size: cover;
  height: 100%;
  // background-size: contain;
  .login-form {
    position: relative;
    left: -73px;
    // top: 44px;
    height: 600px;
    width: 500px;
    max-width: 100%;
    margin-top: -6px;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    // padding: 25px;
    // padding-left: 0;
    // border-radius: 20px;
    border-radius: 5px 10px 10px 5px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    // padding: 6px 5px 6px 15px;
    color: $dark_gray;
    // vertical-align: middle;
    width: 30px;
    i {
      font-size: 18px;
      padding-left: 5px;
    }
    // display: inline-block;
  }

  .title-container {
    position: relative;
    margin: 0 auto;
    text-align: center;
    font-size: 26px;
    padding-top: 40px;
    padding-bottom: 40px;
    >p {
      font-size: 26px;
      height: 20px;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}

</style>
