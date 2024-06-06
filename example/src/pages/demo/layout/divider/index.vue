<script lang="ts" setup>

</script>

<template>
  <div class="demo h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-divider />
    <h2 class="title">
      展示文本
    </h2>
    <mot-divider>文本</mot-divider>
    <h2 class="title">
      内容位置
    </h2>
    <mot-divider content-position="left">
      文本
    </mot-divider>
    <mot-divider content-position="right">
      文本
    </mot-divider>
    <h2 class="title">
      虚线
    </h2>
    <mot-divider dashed>
      文本
    </mot-divider>
    <h2 class="title">
      自定义样式
    </h2>
    <mot-divider :custom-style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      文本
    </mot-divider>
    <h2 class="title">
      垂直分割线
    </h2>
    <div :style="{ fontSize: '14px', marginLeft: '27px', color: '#909ca4', display: 'flex' }">
      文本
      <mot-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">链接</a>
      <mot-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">链接</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Divider"
  }
}
</route>
