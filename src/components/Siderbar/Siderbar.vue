<template>
<div>
    <el-menu
    default-active="index"
    :default-openeds="['1']"
    class="el-menu-vertical-demo"
    background-color="blue"
    text-color="#fff"
    active-text-color="red"
    unique-opened
    router
    >
        <el-menu-item index="index">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="table">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>table</span>
            </template>
            <el-menu-item index="/table/dynamicTable">动态table</el-menu-item>
            <el-menu-item index="dragTable">拖拽table</el-menu-item>
            <el-menu-item index="editTable">编辑table</el-menu-item>
            <el-menu-item index="complexTable">综合table</el-menu-item>
        </el-submenu>
        <el-submenu index="excel">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>excel</span>
            </template>
            <el-menu-item index="exportExcel">导出excel</el-menu-item>
            <el-menu-item index="exportCheckedExcel">导出已选择项excel</el-menu-item>
            <el-menu-item index="exportMulExcel">导出多级表头</el-menu-item>
            <el-menu-item index="exportZip">导出zip</el-menu-item>
            <el-menu-item index="downloadPDF">下载PDF</el-menu-item>
            <el-menu-item index="importExcel">导入excel</el-menu-item>
        </el-submenu>
        <el-submenu index="artical">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>综合实例</span>
            </template>
            <el-menu-item index="createArtical">创建文章</el-menu-item>
            <el-menu-item index="articalList">文章列表</el-menu-item>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
}
</script>

<style>

</style>
