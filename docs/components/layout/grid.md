# Grid 宫格

### 介绍

用于分隔成等宽区块进行页面导航。

### 基础用法

```html
<template>
  <mot-grid>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
  </mot-grid>
</template>
<script lang="ts">
  
</script>
```

### 自定义列数

```html
<template>
  <mot-grid :column-num="3">
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
  </mot-grid>
</template>
<script lang="ts">
  
</script>
```

### 正方形格子

```html
<template>
  <mot-grid :column-num="3" square>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
  </mot-grid>
</template>
```

### 格子间距

```html
<template>
  <mot-grid :gutter="10">
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
  </mot-grid>
</template>
<script lang="ts">
  
</script>
```

### 内容翻转

```html
<template>
  <mot-grid reverse>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
  </mot-grid>
</template>
<script lang="ts">
  
</script>
```

### 内容横向

```html
<template>
  <mot-grid direction="horizontal">
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
  </mot-grid>
</template>
<script lang="ts">
  
</script>
```

### 图标颜色/大小

```html
<template>
  <mot-grid :column-num="3">
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
    <mot-grid-item text="文字">
      <mot-icon name="dongdong" size="40px" custom-color="#478EF2" />
    </mot-grid-item>
    <mot-grid-item text="文字"><mot-icon  name="dongdong" /></mot-grid-item>
  </mot-grid>
</template>
<script lang="ts">
  
</script>
```

### 自定义内容

```html
<template>
  <mot-grid :border="false">
    <mot-grid-item v-for="i in 4" :key="i">
      <mot-avatar size="large">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </mot-avatar>
    </mot-grid-item>
  </mot-grid>
</template>
```

## API

### Grid Props

| 参数       | 说明                                      | 类型             | 默认值     |
| ---------- | ----------------------------------------- | ---------------- | ---------- |
| column-num | 列数                                      | number \| string | `4`        |
| border     | 是否显示边框                              | boolean          | `true`     |
| gutter     | 格子之间的间距，默认单位为 `px`           | number \| string | `0`        |
| center     | 是否将格子内容居中显示                    | boolean          | `true`     |
| square     | 是否将格子固定为正方形                    | boolean          | `false`    |
| reverse    | 内容翻转                                  | boolean          | `false`    |
| direction  | 格子内容排列的方向，可选值为 `horizontal` | string           | `vertical` |
| clickable  | 是否开启格子点击反馈                      | boolean          | `false`    |

### GridItem Props

| 参数 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| text | 文字 | string | -      |

### GridItem Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义所有内容 |
| text    | 自定义文字     |

### GridItem Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击格子时触发 | event: Event |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                             | 默认值                  |
| -------------------------------- | ----------------------- |
| --mot-grid-border-color          | #f5f6f7                 |
| --mot-grid-item-content-padding  | 16px 8px                |
| --mot-grid-item-content-bg-color | var(--mot-white)        |
| --mot-grid-item-text-margin      | 8px                     |
| --mot-grid-item-text-color       | var(--mot-title-color2) |
| --mot-grid-item-text-font-size   | var(--mot-font-size-1)  |
