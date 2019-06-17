<template>
<div>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
          <!-- 不可以点击 -->
          <span v-if="item.redirect==='noRedirect'">{{item.meta.title}}</span>
          <!-- 可以点击 -->
          <a href="" v-else>{{item.meta.title}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</div>
</template>

<script>
export default {
  data () {
    return {
      breadList: []
    }
  },
  created () {
    this.getBreadcrumb()
  },
  watch: {
    $route (route) {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      console.log(this.$route.matched)
      // let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      // console.log(1, matched)
      // breadcrumb: false            if set false, the item will hidden in breadcrumb
      this.breadList = this.$route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    }
  }
}
</script>

<style>

</style>
