# Indicator 指示器

### 介绍

显示一个任务或流程的进度，常用于开通流程。

### 基础用法

```html
<template>
  <mot-cell>
    <mot-indicator :size="3" :current="3">step1</mot-indicator>
  </mot-cell>
  <mot-cell>
    <mot-row>
      <mot-col :span="12">
        <mot-button size="small" type="primary">主要按钮</mot-button>
      </mot-col>
      <mot-col :span="12">
        <mot-indicator :block="true" align="right" :size="6" :current="5">step1</mot-indicator>
      </mot-col>
    </mot-row>
  </mot-cell>
</template>
```

### block用法

```html
<template>
  <mot-cell>
    <mot-indicator :block="true" algin="center" :size="6" :current="5">step1</mot-indicator>
  </mot-cell>
  <mot-cell>
    <mot-indicator :block="true" align="left" :size="6" :current="1">step1</mot-indicator>
  </mot-cell>
  <mot-cell>
    <mot-indicator :block="true" align="right" :size="6" :current="5">step1</mot-indicator>
  </mot-cell>
</template>
```

### 不补0

```html
<template>
  <mot-cell>
    <mot-indicator :fill-zero="false" :size="6" :current="5">step1</mot-indicator>
  </mot-cell>
</template>
```

## API

### Props

| 参数      | 说明                                                                      | 类型    | 默认值  |
| --------- | ------------------------------------------------------------------------- | ------- | ------- |
| current   | 当前步骤                                                                  | number  | `1`     |
| size      | 步骤长度                                                                  | number  | `3`     |
| block     | 是否启用块级布局                                                          | boolean | `false` |
| align     | 对齐方式，仅在 `block` 为 `true` 时生效, 可选值 `left`, `right`, `center` | string  | `left`  |
| fill-zero | 单数前面是否补 0                                                          | boolean | `true`  |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                             | 默认值                               |
| -------------------------------- | ------------------------------------ |
| --mot-indicator-bg-color         | var(--mot-primary-color)             |
| --mot-indicator-dot-color        | var(--mot-disable-color)             |
| --mot-indicator-color            | var(--mot-white)                     |
| --mot-indicator-size             | 18px                                 |
| --mot-indicator-dot-size         | calc(var(--mot-indicator-size) / 3)_ |
| --mot-indicator-border-size      | calc(var(--mot-indicator-size)+ 2)   |
| --mot-indicator-number-font-size | 10px                                 |
