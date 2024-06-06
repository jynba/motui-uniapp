# Empty 空状态

### 介绍

空状态时的占位提示

### 基础用法

```html
<template>
  <mot-empty description="无数据"></mot-empty>
</template>
```

### 图片类型

```html
<template>
  <mot-tabs v-model="tabValue">
    <mot-tab-pane title="无内容">
      <mot-empty image="empty" description="无内容"></mot-empty>
    </mot-tab-pane>
    <mot-tab-pane title="加载失败/错误">
      <mot-empty image="error" description="加载失败/错误"></mot-empty>
    </mot-tab-pane>
    <mot-tab-pane title="无网络">
      <mot-empty image="network" description="无网络"></mot-empty>
    </mot-tab-pane>
  </mot-tabs>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const tabValue = ref(0);
    return {
      tabValue
    }
  }
}
</script>
```

### 自定义图片

```html
<template>
  <mot-empty description="描述文字">
    <template #image>
      <img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" />
    </template>
  </mot-empty>
</template>
```

### 底部内容

```html
<template>
  <mot-empty image="error" description="加载失败">
    <div style="margin-top: 10px">
      <mot-button icon="refresh" type="primary">重试</mot-button>
    </div>
  </mot-empty>
</template>
```

## API

### Props

| 参数        | 说明                                                               | 类型             | 默认值  |
| ----------- | ------------------------------------------------------------------ | ---------------- | ------- |
| image       | 图片类型，可选值为 `empty`、`error`、`network`，支持传入图片 `URL` | string           | `empty` |
| image-size  | 图片大小，单位为 `px`                                              | number \| string | `-`     |
| description | 图片下方的描述文字                                                 | string           | `-`     |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| default     | 自定义底部内容 |
| image       | 自定义图片     |
| description | 自定义描述文字 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                                | 默认值  |
| ----------------------------------- | ------- |
| --mot-empty-padding                 | 32px 0  |
| --mot-empty-image-size              | 170px   |
| --mot-empty-description-margin-top  | 4px     |
| --mot-empty-description-color       | #666666 |
| --mot-empty-description-font-size   | 14px    |
| --mot-empty-description-line-height | 20px    |
| --mot-empty-description-padding     | 0 40px  |
