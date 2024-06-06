# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 基础用法

默认渲染一条水平分割线。

``` html
<template>
  <mot-divider />
</template>
```

### 展示文本

通过插槽可以在分割线中间插入内容。

``` html
<template>
  <mot-divider>文本</mot-divider>
</template>
```

### 内容位置

通过 content-position 指定内容所在位置。

``` html
<template>
  <mot-divider content-position="left">文本</mot-divider>
  <mot-divider content-position="right">文本</mot-divider>
</template>
```

### 虚线

添加 dashed 属性使分割线渲染为虚线。

``` html
<template>
  <mot-divider dashed>文本</mot-divider>
</template>
```

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

``` html
<template>
  <mot-divider :custom-style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文本</mot-divider>
</template>
```

### 垂直分割线

``` html
<template>
  <div :style="{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }">
    文本
    <mot-divider direction="vertical" />
    <a href="#" :custom-style="{ color: '#1989fa' }">链接</a>
    <mot-divider direction="vertical" />
    <a href="#" :custom-style="{ color: '#1989fa' }">链接</a>
  </div>
</template>
```

## API

### Props

| 参数             | 说明                               | 类型    | 默认值       |
| ---------------- | ---------------------------------- | ------- | ------------ |
| dashed           | 是否使用虚线                       | boolean | `false`      |
| hairline         | 是否使用 `0.5px` 线                | boolean | `true`       |
| content-position | 内容位置，可选值为 `left`、`right` | string  | `center`     |
| direction        | 水平还是垂直类型                   | string  | `horizontal` |

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                               | 默认值                 |
| ---------------------------------- | ---------------------- |
| --mot-divider-margin               | 16px 0                 |
| --mot-divider-text-font-size       | var(--mot-font-size-2) |
| --mot-divider-text-color           | #909ca4                |
| --mot-divider-line-height          | 2px                    |
| --mot-divider-before-margin-right  | 16px                   |
| --mot-divider-after-margin-left    | 16px                   |
| --mot-divider-vertical-height      | 12px                   |
| --mot-divider-vertical-top         | 2px                    |
| --mot-divider-vertical-border-left | rgba(0, 0, 0, 0.06)    |
| --mot-divider-vertical-margin      | 0 8px                  |
