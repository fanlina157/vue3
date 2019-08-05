<template>
<div class="wrapper">
  <el-container style="height:100%;">
    <el-header>
       <Header></Header>
    </el-header>
    <el-container>
      <el-aside width='200px' height='100%' style="background:blue;">
        <Siderbar></Siderbar>
      </el-aside>
      <el-main>
        <Bread></Bread>
        <div style="margin-top:20px;">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
</el-container>
</div>
</template>
<script>
import Siderbar from '../../components/Siderbar/Siderbar'
import Bread from '../../components/Bread/Bread'
import Header from '../../components/Header/Header'
export default {
  components: {
    Siderbar,
    Bread,
    Header
  }
}
</script>
<style scoped  lang="scss">

.wrapper {
  height: 100%;
  .el-header {
    background-color: #B3C0D1;
    line-height: 60px;
  }
}

</style>
