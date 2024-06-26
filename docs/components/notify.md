# Notify 消息通知

### 介绍

在页面顶部展示消息提示

### 基础用法

```html
<template>
  <mot-cell-group :title="baseState.state.desc">
    <mot-cell is-Link @click="baseState.methods.cellClick">基础用法</mot-cell>
    <mot-notify @click="onClick" @closed="onClosed" v-model:visible="baseState.state.show" :msg="baseState.state.desc" />
  </mot-cell-group>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const onClosed = () => console.log('closed');
    const onClick = () => console.log('click');

    const baseState = {
      state: reactive({
        show: false,
        desc: '基础用法'
      }),
      methods: {
        cellClick() {
          baseState.state.show = true;
        }
      }
    };
    return {
      baseState,
      onClosed,
      onClick
    };
  }
};
</script>
```

### ref调用
  
  ```html
  <template>
  <mot-cell-group title="ref调用">
      <mot-cell is-link @click="showRefNotify">
        ref调用
      </mot-cell>
      <mot-notify ref="notifyRef" />
  </mot-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import type { NotifyInst } from 'motui-uniapp'
export default {
  setup() {
    const notifyRef = ref<NotifyInst>()
    const showRefNotify = () => {
      notifyRef.value?.showNotify({
        type: 'danger',
        msg: '使用ref调用,2秒后消失',
        position: 'bottom',
        background: 'skyblue',
      })

      setTimeout(() => {
        notifyRef.value?.hideNotify()
      }, 2000)
    }
    return {
      notifyRef,
      showRefNotify
    };
  }
};
</script>

  ```

### 通知类型

```html
<template>
  <mot-cell-group title="通知类型">
    <mot-notify
      @click="onClick"
      @closed="onClosed"
      :type="notifyState.state.type"
      v-model:visible="notifyState.state.show"
      :msg="notifyState.state.desc"
    />
    <mot-cell is-Link @click="notifyState.methods.cellClick('primary','主要通知')">主要通知</mot-cell>
    <mot-cell is-Link @click="notifyState.methods.cellClick('success','成功通知')">成功通知</mot-cell>
    <mot-cell is-Link @click="notifyState.methods.cellClick('danger','危险通知')">危险通知</mot-cell>
    <mot-cell is-Link @click="notifyState.methods.cellClick('warning','警告通知')">警告通知</mot-cell>
  </mot-cell-group>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const onClosed = () => console.log('closed');
    const onClick = () => console.log('click');

    const notifyState = {
      state: reactive({
        show: false,
        desc: '',
        type: 'primary'
      }),
      methods: {
        cellClick(type: string, desc: string) {
          notifyState.state.show = true;
          notifyState.state.type = type;
          notifyState.state.desc = desc;
        }
      }
    };
    const customState = {
      state: reactive({
        show: false,
        desc: '',
        type: 'primary',
        duration: 3000
      }),
      methods: {
        cellClick(type: string, desc: string, duration: number) {
          customState.state.show = true;
          customState.state.type = type;
          customState.state.desc = desc;
          customState.state.duration = duration;
        }
      }
    };
    return {
      notifyState,
      customState,
      onClosed,
      onClick
    };
  }
};
</script>
```

### 留出顶部安全距离

```html
<template>
  <mot-cell is-link @click="showNotify1">
        留出顶部安全距离
  </mot-cell>
  <mot-notify v-model:visible="show1" :duration="0" safe-area-inset-top>
    <span>Content</span>
  </mot-notify>
</template>
```

### Props

| 参数                | 说明                                                           | 类型             | 默认值           |
| ------------------- | -------------------------------------------------------------- | ---------------- | ---------------- |
| type                | 提示的信息类型，可选值为`primary` `success` `danger` `warning` | string           | `danger`         |
| visible             | 显示与否                                                       | boolean          | `false`          |
| msg                 | 展示文案，支持通过`\n`换行                                     | string           | `''`             |
| duration            | 展示时长(ms)，值为 0 时，notify 不会消失                       | number           | `3000`           |
| custom-color        | 字体颜色                                                       | string           | `''`             |
| background          | 背景颜色                                                       | string           | `''`             |
| class-name          | 自定义类名                                                     | string \| number | `1`              |
| position            | 自定义位置，可选值为 `top` `bottom` `left` `right` `center`    | string           | `top`            |
| safe-area-inset-top | 是否留出顶部安全距离（默认为状态栏高度）                       | boolean          | `false`          |
| safe-height         | 顶部安全高度（默认为状态栏高度）                               | number           | `设备状态栏高度` |

### Events

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| click  | 点击事件回调 | `-`      |
| closed | 关闭事件回调 | `-`      |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) 可以获取到 Form 实例并调用实例方法

| 方法名     | 说明 | 参数            | 返回值 |
| ---------- | ---- | --------------- | ------ |
| showNotify | 显示 | `NotifyOptions` | -      |
| hideNotify | 隐藏 | -               | -      |

```ts
interface NotifyOptions {
  type?: NotifyType
  msg: string
  customColor?: string
  background?: string
  duration?: number
  position?: Position
}
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/configprovider)。

| 名称                                  | 默认值                                                                                                                      |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| --mot-notify-text-color               | var(--mot-white)                                                                                                            |
| --mot-notify-padding                  | 12px 0                                                                                                                      |
| --mot-notify-font-size                | 14px                                                                                                                        |
| --mot-notify-height                   | 44px                                                                                                                        |
| --mot-notify-line-height              | auto                                                                                                                        |
| --mot-notify-base-background-color    | linear-gradient(135deg,var(--mot-primary-color) 0%,var(--mot-primary-color-end) 100%)                                       |
| --mot-notify-primary-background-color | linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)                                               |
| --mot-notify-success-background-color | linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%) |
| --mot-notify-danger-background-color  | rgba(250, 50, 25, 1)                                                                                                        |
| --mot-notify-warning-background-color | linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)                                                |
