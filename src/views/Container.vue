<template>
  <ui-container style="height: 500px; border: 1px solid #eee">
    <ui-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <ui-menu :default-openeds="['1', '3']">
        <ui-submenu index="1">
          <template slot="title"><i class="ui-icon-message"></i>导航一</template>
          <ui-menu-item-group>
            <template slot="title">分组一</template>
            <ui-menu-item index="1-1">选项1</ui-menu-item>
            <ui-menu-item index="1-2">选项2</ui-menu-item>
          </ui-menu-item-group>
          <ui-menu-item-group title="分组2">
            <ui-menu-item index="1-3">选项3</ui-menu-item>
          </ui-menu-item-group>
          <ui-submenu index="1-4">
            <template slot="title">选项4</template>
            <ui-menu-item index="1-4-1">选项4-1</ui-menu-item>
          </ui-submenu>
        </ui-submenu>
        <ui-submenu index="2">
          <template slot="title"><i class="ui-icon-menu"></i>导航二</template>
          <ui-menu-item-group>
            <template slot="title">分组一</template>
            <ui-menu-item index="2-1">选项1</ui-menu-item>
            <ui-menu-item index="2-2">选项2</ui-menu-item>
          </ui-menu-item-group>
          <ui-menu-item-group title="分组2">
            <ui-menu-item index="2-3">选项3</ui-menu-item>
          </ui-menu-item-group>
          <ui-submenu index="2-4">
            <template slot="title">选项4</template>
            <ui-menu-item index="2-4-1">选项4-1</ui-menu-item>
          </ui-submenu>
        </ui-submenu>
        <ui-submenu index="3">
          <template slot="title"><i class="ui-icon-setting"></i>导航三</template>
          <ui-menu-item-group>
            <template slot="title">分组一</template>
            <ui-menu-item index="3-1">选项1</ui-menu-item>
            <ui-menu-item index="3-2">选项2</ui-menu-item>
          </ui-menu-item-group>
          <ui-menu-item-group title="分组2">
            <ui-menu-item index="3-3">选项3</ui-menu-item>
          </ui-menu-item-group>
          <ui-submenu index="3-4">
            <template slot="title">选项4</template>
            <ui-menu-item index="3-4-1">选项4-1</ui-menu-item>
          </ui-submenu>
        </ui-submenu>
      </ui-menu>
    </ui-aside>

    <ui-container>
      <ui-header style="text-align: right; font-size: 12px">
        <ui-dropdown>
          <i class="ui-icon-setting" style="margin-right: 15px"></i>
          <ui-dropdown-menu slot="dropdown">
            <ui-dropdown-item>查看</ui-dropdown-item>
            <ui-dropdown-item>新增</ui-dropdown-item>
            <ui-dropdown-item>删除</ui-dropdown-item>
          </ui-dropdown-menu>
        </ui-dropdown>
        <span>王小虎</span>
      </ui-header>
      <ui-main>
        <ui-table :data="tableData">
          <ui-table-column prop="date" label="日期" width="140">
          </ui-table-column>
          <ui-table-column prop="name" label="姓名" width="120">
          </ui-table-column>
          <ui-table-column prop="address" label="地址">
          </ui-table-column>
        </ui-table>
      </ui-main>
    </ui-container>
  </ui-container>
</template>

<style lang="less">
  .ui-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .ui-aside {
    color: #333;
  }
</style>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
