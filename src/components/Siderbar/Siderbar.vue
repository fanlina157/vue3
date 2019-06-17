<template>
<div>
    <el-menu
    default-active="activeMenu"
    class="el-menu-vertical-demo"
    background-color="blue"
    text-color="#fff"
    active-text-color="red"
    unique-opened
    router
    >
        <el-menu-item index="/home">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="/table">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>table</span>
            </template>
            <el-menu-item index="/table/dynamicTable">动态table</el-menu-item>
            <el-menu-item index="/table/dragTable">拖拽table</el-menu-item>
            <el-menu-item index="/table/editTable">编辑table</el-menu-item>
            <el-menu-item index="/table/complexTable">综合table</el-menu-item>
        </el-submenu>
        <el-submenu index="/excel">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>excel</span>
            </template>
            <el-menu-item index="/excel/exportExcel">导出excel</el-menu-item>
            <el-menu-item index="/excel/exportCheckedExcel">导出已选择项excel</el-menu-item>
            <el-menu-item index="/excel/exportMulExcel">导出多级表头</el-menu-item>
            <el-menu-item index="/excel/exportZip">导出zip</el-menu-item>
            <el-menu-item index="/excel/downloadPDF">下载PDF</el-menu-item>
            <el-menu-item index="/excel/importExcel">导入excel</el-menu-item>
        </el-submenu>
        <el-submenu index="/artical">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>综合实例</span>
            </template>
            <el-menu-item index="/artical/createArtical">创建文章</el-menu-item>
            <el-menu-item index="/artical/articalList">文章列表</el-menu-item>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
  computed: {
    activeMenu () {
      const { path } = this.$route
      return path
    }
  }
}
</script>

<style>

</style>
