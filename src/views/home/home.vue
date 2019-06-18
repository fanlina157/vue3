<template>
  <div>
    <!-- Toplist -->
    <el-row>
      <Toplist></Toplist>
    </el-row>
    <!-- echarts -->
    <el-row>
      <Echarts></Echarts>
    </el-row>
  </div>
</template>

<script>
import Toplist from './Toplist/Toplist'
import Echarts from './Echarts/Linechart'
export default {
  components: {
    Toplist,
    Echarts
  }
}
</script>

<style>

</style>
