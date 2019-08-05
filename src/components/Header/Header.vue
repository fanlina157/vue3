<template>
<div class="header-main">
    <div class="header-left">
        <i class="el-icon-platform-eleme"></i>
        <div class="title"> 练习管理平台</div>
    </div>
    <div class="header-right">
        <!-- 用户名:44444444444 -->
        {{message}}
        <!-- 如果这里想直接用message ,那么需要在computed 里 mapGetters 解构,否则就用第二种写法 -->
        <!-- {{this.$store.getters.message}} -->
        <!-- {{users.username}}
        {{this.$store.state.users.username}} -->
    </div>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
// import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    // ...mapState(['count', 'number', 'username', 'nickname', 'password']),
    ...mapState(['users']), // 在模块里,直接分解模块
    // 或者
    // ...mapState({
    //   username: state => {
    //     return state.users.username
    //   }
    // }),
    ...mapGetters(['message', 'msg'])
  },

  mounted () {
    console.log(this.$store)
  }
}
</script>
<style lang="scss">
.header-main {
    display: flex;
    justify-content: space-between;

    .header-left {
        width: 50%;
        display: flex;
        justify-content: flex-start;

        i {
            font-size: 60px;
            margin: 0 100px 0 60px;
        }

        .title {
            font-size: 28px;
            color: #000;
        }
    }
}
</style>
