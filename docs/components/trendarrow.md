# trendarrow

### 介绍

带有箭头指示的百分比数字，用以展示指标趋势。

### 基础用法

```html
<template>
  <mot-cell>
    <mot-trend-arrow :sync-text-color="false" :rate="1"/>
    <mot-trend-arrow :sync-text-color="false" :rate="-0.2535"/>
  </mot-cell>
</template>
```

### 改变文字颜色

```html
<template>
  <mot-cell>
    <mot-trend-arrow :rate="10.2365"/>
    <mot-trend-arrow :rate="-0.2535"/>
  </mot-cell>
</template>
```

### 指定小数位

```html
<template>
  <mot-cell>
    <mot-trend-arrow :digits="0" :rate="10.2365"/>
    <mot-trend-arrow :digits="0" :rate="-0.2535"/>
  </mot-cell>
</template>
```

### 箭头在前面

```html
<template>
  <mot-cell>
    <mot-trend-arrow arrowLeft :rate="0.2535"/>
    <mot-trend-arrow arrowLeft :rate="-0.2535"/>
  </mot-cell>
</template>
```

### 显示正负号

```html
<template>
  <mot-cell>
    <mot-trend-arrow showSign :rate="1"/>
    <mot-trend-arrow showSign :rate="-0.2535"/>
  </mot-cell>
</template>
```

### 是否展示0

```html
<template>
  <mot-cell>
    <mot-trend-arrow showSign :rate="0"/>
    <mot-trend-arrow showSign showZero :rate="0"/>
  </mot-cell>
</template>
```

### 自定义颜色

```html
<template>
  <mot-cell>
    <mot-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)"/>
    <mot-trend-arrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)"/>
    <mot-trend-arrow
      :show-text-color="false"
      showSign
      :rate="-0.2535"
      text-color="rgb(39,197,48)"
      drop-color="rgb(255, 190, 13)"
    />
  </mot-cell>
</template>
```

### 自定义图标

 demo

```html
<template>
  <mot-cell>
    <mot-trend-arrow :rate="10.2365">
      <template #upIcon><mot-icon  name="success"  custom-color="blue" size="18px" /></template>
    </mot-trend-arrow>
    <mot-trend-arrow :rate="-10.2365">
      <template #downIcon><mot-icon  name="failure" custom-color="red" /></template>
    </mot-trend-arrow>
  </mot-cell>
</template>
```

## API

### Props

| 参数            | 说明                                   | 类型    | 默认值    |
| --------------- | -------------------------------------- | ------- | --------- |
| rate            | 数值，大于0时箭头向上，小于0时箭头向下 | number  | -         |
| digits          | 小数位精度                             | number  | `2`       |
| show-sign       | 是否显示加减号                         | boolean | `false`   |
| show-zero       | 是否显示 0                             | boolean | `false`   |
| arrow-left      | 是否在数字左侧显示箭头                 | boolean | `false`   |
| sync-text-color | 文字颜色是否与箭头同步                 | boolean | `true`    |
| text-color      | 文字颜色                               | string  | `#333333` |
| rise-color      | 向上箭头颜色                           | string  | `#fa2c19` |
| drop-color      | 向下箭头颜色                           | string  | `#64b578` |

### Slots

| 名称     | 说明                                        |
| -------- | ------------------------------------------- |
| upIcon   | 自定义向上箭头图标，默认使用 `TriangleUp`   |
| downIcon | 自定义向下箭头图标，默认使用 `TriangleDown` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/configprovider)。

| 名称                                | 默认值 |
| ----------------------------------- | ------ |
| --mot-trendarrow-font-size          | 14px   |
| --mot-trendarrow-before-icon-margin | 4px    |
