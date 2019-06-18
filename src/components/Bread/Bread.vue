<template>
<div>
    <el-breadcrumb separator="/">
        <!-- 动画 -->
        <transition-group name="bread">
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
                <!-- 不可以点击 -->
                <span v-if="item.redirect==='noRedirect'">{{item.meta.title}}</span>
                <!-- 可以点击 -->
                <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
            </el-breadcrumb-item>
        </transition-group>
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
      // console.log(this.$route.matched)
      // breadcrumb: false            if set false, the item will hidden in breadcrumb
      this.breadList = this.$route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    handleLink (item) {
      // console.log('item', item)
      this.$router.push(item.path)
    }
  }
}
</script>

<style>

</style>
