<template>
<div class="wrapper">
  <el-container style="height:100%;">
    <el-header>
      <i class="el-icon-platform-eleme"></i>
      <div class="title"> 练习管理平台</div>
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
export default {
  components: {
    Siderbar,
    Bread
  }
}
</script>
<style scoped  lang="scss">

.wrapper {
  height: 100%;
  .el-header {
    display: flex;
    background-color: #B3C0D1;
    line-height: 60px;
    i {
      font-size:60px;
      margin: 0 100px 0 60px;
    }
    .title {
      font-size: 28px;
      color:#000;
    }
  }
}

</style>
