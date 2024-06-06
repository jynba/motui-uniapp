# Animate

### 介绍

给子元素添加动画效果

### 通过 show 控制动画

```vue
<script setup>
import { ref } from 'vue'

const show1 = ref(false)
function onClick1() {
  show1.value = true
}
const show2 = ref(false)
function onClick2() {
  show2.value = true
  setTimeout(() => {
    show2.value = false
  }, 500)
}
</script>

<template>
  <mot-animate type="slide-right" :show="show1">
    <mot-button type="primary" @click="onClick1">
      单次动画
    </mot-button>
  </mot-animate>
  <mot-animate type="slide-right" :show="show2">
    <mot-button type="primary" @click="onClick2">
      多次触发
    </mot-button>
  </mot-animate>
</template>
```

### 循环动画

```vue
<template>
  <mot-animate type="shake" :loop="true">
    <mot-button type="primary">
      shake-抖动
    </mot-button>
  </mot-animate>
  <mot-animate type="ripple" :loop="true">
    <mot-button type="primary">
      ripple-心跳
    </mot-button>
  </mot-animate>
  <mot-animate type="breath" :loop="true">
    <mot-button type="primary">
      breath-呼吸灯
    </mot-button>
  </mot-animate>
  <mot-animate type="twinkle" :loop="true">
    <mot-button type="primary">
      twinkle-水波
    </mot-button>
  </mot-animate>
  <mot-animate type="flicker" :loop="true">
    <mot-button type="primary">
      flicker-擦亮
    </mot-button>
  </mot-animate>
  <mot-animate type="jump" :loop="true">
    <mot-button type="primary">
      jump-跳跃
    </mot-button>
  </mot-animate>
  <mot-animate type="float" :loop="true">
    <mot-button type="primary">
      float-漂浮
    </mot-button>
  </mot-animate>
</template>
```

### 点击触发

```vue
<template>
  <mot-animate type="slide-right" action="click">
    <mot-button type="primary">
      由右向左划入
    </mot-button>
  </mot-animate>
  <mot-animate type="slide-left" action="click">
    <mot-button type="primary">
      由左向右划入
    </mot-button>
  </mot-animate>
  <mot-animate type="slide-top" action="click">
    <mot-button type="primary">
      由上至下划入
    </mot-button>
  </mot-animate>
  <mot-animate type="slide-bottom" action="click">
    <mot-button type="primary">
      由下至上划入
    </mot-button>
  </mot-animate>
</template>
```

## API

### Props

| 参数     | 说明                                                                     | 类型             | 默认值  |
| -------- | ------------------------------------------------------------------------ | ---------------- | ------- |
| show     | 控制动画，当值从 false 变为 true 时会触发一次动画                        | boolean          | `false` |
| type     | 动画类型，见下方 `type` 值说明                                           | string           | `-`     |
| loop     | 是否循环执行。`true`-循环执行; `false`-执行一次                          | boolean          | `false` |
| duration | 动画时长，单位 ms                                                        | number \| string | -       |
| action   | （不能与 show 同时使用）触发方式，`initial`-初始化执行; `click`-点击执行 | string           | -       |

### Events

| 事件名  | 说明           | 回调参数     |
| ------- | -------------- | ------------ |
| animate | 动画触发       | -            |
| click   | 点击元素时触发 | event: Event |

### type 值说明

| 序号 | 参数名称     | 参数说明                           |
| :--- | :----------- | :--------------------------------- |
| 1    | shake        | 抖动，建议 loop 为 true            |
| 2    | ripple       | 不循环则是放大后缩小，循环则是心跳 |
| 3    | breath       | 呼吸灯，建议 loop 为 true          |
| 4    | float        | 漂浮，建议 loop 为 true            |
| 5    | slide-right  | 由右向左划入                       |
| 6    | slide-left   | 由左向右划入                       |
| 7    | slide-top    | 由上至下划入                       |
| 8    | slide-bottom | 由下至上划入                       |
| 9    | jump         | 跳跃，建议 loop 为 true            |
| 10   | twinkle      | 水波，建议 loop 为 true            |
| 11   | flicker      | 擦亮按钮，建议 loop 为 true        |
