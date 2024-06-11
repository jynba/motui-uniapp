# Swipe 滑动手势

## 介绍

常用于单元格左右滑删除等手势操作

## 代码演示

### 基础用法

```html
<template>
  <mot-swipe>
    <mot-cell title="左滑删除" round-radius="0"></mot-cell>

    <template #right>
      <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
    </template>
  </mot-swipe>
</template>
```

### 禁止滑动

```html
<template>
  <mot-swipe disabled>
    <mot-cell title="禁止滑动" round-radius="0"></mot-cell>

    <template #right>
      <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
    </template>
  </mot-swipe>
</template>
```

### 左右滑动

```html
<template>
  <mot-swipe>
    <template #left>
      <mot-button style="height: 100%" type="success" shape="square">选择</mot-button>
    </template>

    <mot-cell title="左滑右滑都可以哦" round-radius="0"></mot-cell>

    <template #right>
      <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
      <mot-button style="height: 100%" type="info" shape="square">收藏</mot-button>
    </template>
  </mot-swipe>
</template>
```

### 异步控制

```html
<template>
  <mot-swipe ref="swipe" :close-on-click="['right']" @open="onOpen" @close="onClose">
    <mot-cell title="异步打开关闭">
      <template #link>
        <mot-switch v-model="checked" active-text="开" inactive-text="关" @change="onSwitchChange"></mot-switch>
      </template>
    </mot-cell>

    <template #right>
      <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
    </template>
  </mot-swipe>
</template>
```

```typescript
import type { SwipeInts, SwipeToggleEvent } from "motui-uniapp";

const swipe = ref<SwipeInts | null>(null);

const checked = ref<boolean>(false);

function onSwitchChange(value: boolean) {
  if (value) {
    swipe.value?.open("left");
  } else {
    swipe.value?.close();
  }
}

function onOpen(info: SwipeToggleEvent) {
  console.log("打开了...", info);
}

function onClose(info: SwipeToggleEvent) {
  console.log("关闭了...", info);
}
```

### 自定义

```html
<template>
  <mot-swipe>
    <template #left>
      <mot-button style="height: 100%" type="success" shape="square">选择</mot-button>
    </template>

    <mot-cell title="商品描述">
      <template #link>
        <mot-input-number v-model="number"></mot-input-number>
      </template>
    </mot-cell>

    <template #right>
      <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
      <mot-button style="height: 100%" type="info" shape="square">收藏</mot-button>
    </template>
  </mot-swipe>
</template>
```

```typescript
const number = ref<number>(0);
```

### 使用 SwipeGroup 控制 Swipe 之间互斥

此时各个 Swipe 的 name 为必填项。

```html
<template>
  <mot-swipe-group lock>
    <mot-swipe name="swipe1">
      <mot-cell title="左滑删除" round-radius="0"></mot-cell>

      <template #right>
        <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
      </template>
    </mot-swipe>

    <mot-swipe name="swipe2">
      <mot-cell title="左滑删除" round-radius="0"></mot-cell>

      <template #right>
        <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
      </template>
    </mot-swipe>

    <mot-swipe name="swipe3">
      <mot-cell title="左滑删除" round-radius="0"></mot-cell>

      <template #right>
        <mot-button style="height: 100%" type="danger" shape="square">删除</mot-button>
      </template>
    </mot-swipe>
  </mot-swipe-group>
</template>
```

## Swipe

### Props

| 参数                        | 说明                                                     | 类型     | 默认值                         |
| --------------------------- | -------------------------------------------------------- | -------- | ------------------------------ |
| name                        | 唯一标识                                                 | string   | -                              |
| disabled                    | 是否禁用滑动                                             | string   | `false`                        |
| touch-move-prevent-default  | 是否阻止滑动事件行为                                     | boolean  | `false`                        |
| touch-move-stop-propagation | 是否阻止滑动事件冒泡                                     | boolean  | `false`                        |
| close-on-click `1.7.7`      | 点击自动关闭的部分，可选值为：`left`、`content`、`right` | string[] | `["left", "content", "right"]` |

### Events

| 事件名 | 说明                                      | 回调参数          |
| ------ | ----------------------------------------- | ----------------- |
| open   | 开启时触发，left 指向左滑，right 指向右滑 | `name, direction` |
| close  | 关闭时触发，同上                          | `name, direction` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| left    | 左侧滑动内容 |
| default | 自定义内容   |
| right   | 右侧滑动内容 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 Swipe 实例并调用实例方法。

| 方法名 | 说明                                            | 参数              |
| ------ | ----------------------------------------------- | ----------------- |
| open   | 打开单元格侧边栏，left 指向左滑，right 指向右滑 | `name, direction` |
| close  | 收起单元格侧边栏，同上                          | `name, direction` |

## SwipeGroup

### Props

| 参数 | 说明                                                                         | 类型    | 默认值  |
| ---- | ---------------------------------------------------------------------------- | ------- | ------- |
| lock | 控制内部 Swipe 互斥，即滑动打开某一个 Swipe 时，触发其余 Swipe 的 close 方法 | boolean | `false` |
