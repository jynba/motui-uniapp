# Layout 布局

### 介绍

用于快速进行布局

### 基础用法

Layout 组件提供 24列栅格，通过在 Col 上添加 span 属性设置列所占的宽度百分比。 offset 属性可以设置列的偏移宽度，计算方式与 span 相同。

```html
<template>
  <mot-row>
    <mot-col :span="24">
      <div class="flex-content">span:24</div>
    </mot-col>
  </mot-row>
  <mot-row>
    <mot-col :span="12">
      <div class="flex-content">span:12</div>
    </mot-col>
    <mot-col :span="12">
      <div class="flex-content flex-content-light">span:12</div>
    </mot-col>
  </mot-row>
  <mot-row>
    <mot-col :span="8">
      <div class="flex-content">span:8</div>
    </mot-col>
    <mot-col :span="8">
      <div class="flex-content flex-content-light">span:8</div>
    </mot-col>
    <mot-col :span="8">
      <div class="flex-content">span:8</div>
    </mot-col>
  </mot-row>
  <mot-row>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
  </mot-row>
</template>
<style lang="scss">
.mot-row {
  overflow: hidden;
  &:not(:last-child) .mot-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```

### 分栏间隔

```html
<template>
  <mot-row :gutter="10">
      <mot-col :span="8">
          <div class="flex-content">span:8</div>
      </mot-col>
      <mot-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
      </mot-col>
      <mot-col :span="8">
          <div class="flex-content">span:8</div>
      </mot-col>
  </mot-row>   
</template>
<style lang="scss">
.mot-row {
  overflow: hidden;
  &:not(:last-child) .mot-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```

### Flex布局

```html
<template>
  <mot-row type="flex" wrap="nowrap">
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
  </mot-row>
  <mot-row type="flex" justify="center">
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
  </mot-row>
  <mot-row type="flex" justify="end">
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
  </mot-row>
  <mot-row type="flex" justify="space-between">
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
  </mot-row>
  <mot-row type="flex" justify="space-around">
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
  </mot-row>
  <mot-row type="flex" justify="space-evenly">
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </mot-col>
    <mot-col :span="6">
      <div class="flex-content">span:6</div>
    </mot-col>
  </mot-row>
</template>
<style lang="scss">
.mot-row {
  overflow: hidden;
  &:not(:last-child) .mot-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```

## API

### Row Props

| 参数      | 说明                                                                                               | 类型             | 默认值       |
| --------- | -------------------------------------------------------------------------------------------------- | ---------------- | ------------ |
| type      | 布局方式，可选值为 `flex`                                                                          | string           | `-`          |
| gutter    | 列元素之间的间距（单位为 `px`）                                                                    | string \| number | `-`          |
| justify   | `Flex` 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` `space-evenly` | string           | `start`      |
| align     | `Flex` 交叉轴对齐方式，可选值为 `flex-start` `center` `flex-end`                                   | string           | `flex-start` |
| flex-wrap | `Flex` 是否换行，可选值为 `nowrap` `wrap` `reverse`                                                | string           | `nowrap`     |

### Col Props

| 参数   | 说明                                                            | 类型             | 默认值 |
| ------ | --------------------------------------------------------------- | ---------------- | ------ |
| span   | 列元素宽度（共分为 24 份，例如设置一行3个，那么 `span` 值为 8） | string \| number | `24`   |
| offset | 列元素偏移距离                                                  | string \| number | `0`    |

### Row Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | `event: MouseEvent` |

### Col Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | `event: MouseEvent` |
