<template>
<el-row :gutter="20" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel-img"></div>
        <div class="card-panel-desc">
            <p class="card-panel-text">New Visits</p>
            <countTo class="card-panel-num">102400</countTo>
        </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel-img"></div>
        <div class="card-panel-desc">
            <p class="card-panel-text">New Visits</p>
            <countTo class="card-panel-num">102400</countTo>
        </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel-img"></div>
        <div class="card-panel-desc">
            <p class="card-panel-text">New Visits</p>
            <countTo class="card-panel-num">102400</countTo>
        </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel-img"></div>
        <div class="card-panel-desc">
            <p class="card-panel-text">New Visits</p>
            <countTo class="card-panel-num">102400</countTo>
        </div>
    </el-col>
</el-row>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  components: {
    countTo
  },
  data () {
    return {
      startVal: 0,
      endVal: 2017
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
    display: flex;
    height: 108px;
    margin-bottom: 20px;

    .card-panel-col {
        float: left;
        margin-right: 5px;
        height: 100%;
        background-color: rgb(83, 107, 83);
        color: #fff;
        padding-top: 14px;

        .card-panel-img {
            float: left;
            width: 100px;
            height: 80px;
            background-color: yellow;
        }

        .card-panel-desc {
            float: right;
            .card-panel-text {
                margin-bottom: 30px;
                font-size: 20px;
            }
        }
    }
}
</style>
