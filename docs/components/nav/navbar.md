# Navbar 头部导航

### 介绍

提供导航功能，常用于页面顶部。

### 基础用法

```vue
<template>
  <mot-navbar title="Title" />
</template>
```

### 自定义左侧插槽

```vue
<template>
  <mot-navbar title="Title">
    <template #left>
      <mot-icon name="left" />
    </template>
  </mot-navbar>
  <mot-navbar custom-class="mt-20px" title="Title">
    <template #left>
      <mot-icon name="left" /> Back
    </template>
  </mot-navbar>
</template>
```

### 自定义右侧插槽

```vue
<template>
  <mot-navbar title="Title">
    <template #right>
      Share
    </template>
  </mot-navbar>
  <mot-navbar title="Title">
    <template #right>
      <mot-icon name="share" />
    </template>
  </mot-navbar>
</template>
```

### 自定义导航栏中间内容

```vue
<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const tab1value = ref(0)
    const methods = {
      back() {
        alert('Click Back')
      },
      title() {
        alert('Click Title')
      },
      rightClick() {
        alert('Click Right')
      },
      changeTab(tab: any) {
        tab1value.value = tab.paneKey as number
      },
    }

    return {
      tab1value,
      ...methods
    }
  }
}
</script>

<template>
  <mot-navbar desc="编辑">
    <template #content>
      <div class="h-full">
        <mot-tabs v-model="tab1value" @click="changeTab">
          <mot-tab-pane title="商品" />
          <mot-tab-pane title="店铺" />
        </mot-tabs>
      </div>
    </template>

    <template #right>
      <mot-icon name="more-x" class="right" width="16px" />
    </template>
  </mot-navbar>
  <mot-navbar
    :left-show="false"
    title="购物车"
    :title-icon="true"
    desc="编辑"
  >
    <template #titleIcon>
      <mot-icon name="cart2" width="16px" />
    </template>
  </mot-navbar>
</template>
```

### 多 tab 切换导航

```vue
<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const tab2value = ref(0)
    const methods = {
      back() {
        alert('Click Back')
      },
      changeTabList(tab: any) {
        tab2value.value = tab.paneKey as number
      }
    }
    return {
      tab2value,
      ...methods
    }
  }
}
</script>

<template>
  <mot-navbar @on-click-back="back">
    <template #content>
      <mot-tabs v-model="tab2value" @click="changeTabList">
        <mot-tab-pane title="标题1" />
        <mot-tab-pane title="标题2" />
        <mot-tab-pane title="标题3" />
      </mot-tabs>
    </template>

    <template #right>
      <mot-icon name="horizontal-n" class="right" width="16px" />
    </template>
  </mot-navbar>
</template>
```

## API

### Props

| 参数                | 说明                                               | 类型             | 默认值    |
| ------------------- | -------------------------------------------------- | ---------------- | --------- |
| title               | 标题名称                                           | string           | -         |
| left-text           | 左侧文案                                           | string           | -         |
| desc                | 右侧描述                                           | string           | -         |
| left-show           | 是否展示左侧箭头                                   | boolean          | `false`   |
| title-icon          | 标题中是否展示 `icon`                              | boolean          | `false`   |
| border              | 是否显示下边框                                     | boolean          | `false`   |
| fixed               | 是否固定到顶部                                     | boolean          | `false`   |
| placeholder         | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | boolean          | `false`   |
| safe-area-inset-top | 是否开启顶部安全区适配                             | boolean          | `false`   |
| z-index             | 导航栏 `z-index`                                   | number ｜ string | `10`      |
| size                | 图标与字体大小                                     | number ｜ string | -         |
| custom-color        | 图标与字体颜色                                     | number ｜ string | `#979797` |

### Events

| 事件名         | 说明                 | 回调参数    |
| -------------- | -------------------- | ----------- |
| on-click-title | 点击页面标题事件     | event:Event |
| on-click-icon  | 点击页面标题icon事件 | event:Event |
| on-click-right | 点击右侧按钮事件     | event:Event |
| on-click-back  | 点击左侧图标事件     | event:Event |

### Slots

| 名称      | 说明                 |
| --------- | -------------------- |
| left      | 自定义左侧内容       |
| right     | 自定义右侧内容       |
| content   | 自定义导航栏中间内容 |
| leftShow  | 左侧箭头自定义图标   |
| titleIcon | 标题中自定义图标     |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                           | 默认值                                 |
| ------------------------------ | -------------------------------------- |
| --mot-navbar-height            | 44px                                   |
| --mot-navbar-margin-bottom     | 20px                                   |
| --mot-navbar-padding           | 0 16px                                 |
| --mot-navbar-background        | var(--mot-white)                       |
| --mot-navbar-box-shadow        | 0px 1px 7px 0px rgba(237, 238, 241, 1) |
| --mot-navbar-color             | var(--mot-title-color2)                |
| --mot-navbar-title-base-font   | var(--mot-font-size-2)                 |
| --mot-navbar-title-font        | var(--mot-font-size-2)                 |
| --mot-navbar-title-font-weight | 0                                      |
| --mot-navbar-title-font-color  | var(--mot-navbar-color)                |
| --mot-navbar-title-width       | 100px                                  |
| --mot-navbar-title-icon-margin | 0 0 0 13px                             |
