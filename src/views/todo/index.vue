<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>内容</a-layout-content>
      <div>
        <el-button type="primary">主要按钮</el-button>
      </div>
    </a-layout>
  </div>
</template>

<script>
export default {
  setup() {}
}
</script>

<style scoped>
#components-layout-demo-basic {
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  background-color: #ededed;
}

#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  text-align: center;
  color: #fff;
}
</style>
