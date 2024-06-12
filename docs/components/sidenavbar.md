# SideNavbar 侧边栏导航

### 介绍

用于内容选择和切换

### 基础用法

可以通过设置 `position` 来控制左右展示

``` html
<template>
  <mot-cell @click="handleClick1">
    <span><label>右侧</label></span>
  </mot-cell>
  <mot-popup position="right" v-model:visible="show1" :style="{ width, height }">
    <mot-side-navbar>
      <mot-subside-navbar title="智能城市AI" ikey="6">
        <mot-subside-navbar title="人体识别1" ikey="9">
          <mot-side-navbaritem ikey="10" title="人体检测1"></mot-side-navbaritem>
          <mot-side-navbaritem ikey="11" title="细粒度人像分割1"></mot-side-navbaritem>
        </mot-subside-navbar>
        <mot-subside-navbar title="人体识别2" ikey="12">
          <mot-side-navbaritem ikey="13" title="人体检测2"></mot-side-navbaritem>
          <mot-side-navbaritem ikey="14" title="细粒度人像分割2"></mot-side-navbaritem>
        </mot-subside-navbar>
      </mot-subside-navbar>
    </mot-side-navbar>
  </mot-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show1: false,
        width: '80%',
        height: '100%',
      });

      const handleClick1 = () => {
        state.show1 = true;
      };

      return {
        ...toRefs(state),
        handleClick1
      };
    }
  }
</script>
```

### 嵌套（建议最多三层）

该组件在小程序环境下不支持异步加载数据，建议在获取到完整数据后再进行组件的渲染。

``` html
<template>
  <mot-cell @click="handleClick3">
    <span><label>显示</label></span>
  </mot-cell>
  <mot-popup position="right" v-model:visible="show3" :custom-style="{ width, height }">
    <mot-side-navbar :show="show3">
      <mot-side-navbaritem ikey="1" title="人脸识别" @click="handleClick4('人脸识别')"></mot-side-navbaritem>
      <mot-side-navbaritem ikey="2" title="自然语言处理"></mot-side-navbaritem>
      <mot-subside-navbar title="图像理解" ikey="3" :open="false">
        <mot-side-navbaritem ikey="4" title="菜品识别"></mot-side-navbaritem>
        <mot-side-navbaritem ikey="5" title="拍照购"></mot-side-navbaritem>
      </mot-subside-navbar>
      <mot-subside-navbar title="智能城市AI" ikey="6">
        <mot-side-navbaritem ikey="7" title="企业风险预警模型"></mot-side-navbaritem>
        <mot-side-navbaritem ikey="8" title="水质量检测"></mot-side-navbaritem>
        <mot-subside-navbar title="人体识别" ikey="9">
          <mot-side-navbaritem ikey="10" title="人体检测"></mot-side-navbaritem>
          <mot-side-navbaritem ikey="11" title="细粒度人像分割"></mot-side-navbaritem>
        </mot-subside-navbar>
      </mot-subside-navbar>
      <mot-subside-navbar title="自然语言处理" ikey="12">
        <mot-side-navbaritem ikey="13" title="词法分析"></mot-side-navbaritem>
        <mot-side-navbaritem ikey="14" title="句法分析"></mot-side-navbaritem>
      </mot-subside-navbar>
    </mot-side-navbar>
  </mot-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show3: false,
        width: '80%',
        height: '100%',
        navs: [] as any[]
      });

      const handleClick3 = () => {
        state.show3 = true;
      };

      const handleClick4 = (msg: string) => {
        console.log(msg)
      }

      return {
        ...toRefs(state),
        handleClick3,
        handleClick4
      };
    }
  }
</script>
```

## API

### SideNavbar Props

| 参数   | 说明         | 类型             | 默认值 |
| ------ | ------------ | ---------------- | ------ |
| offset | 导航缩进宽度 | number \| string | `15`   |

### SubSideNavbar Props

| 参数  | 说明             | 类型             | 默认值 |
| ----- | ---------------- | ---------------- | ------ |
| title | 导航标题         | string           | ``     |
| ikey  | 导航唯一标识     | number \| string | ``     |
| open  | 导航是否默认展开 | boolean          | `true` |

### SideNavbarItem Props

| 参数  | 说明         | 类型             | 默认值 |
| ----- | ------------ | ---------------- | ------ |
| title | 导航标题     | string           | `15`   |
| ikey  | 导航唯一标识 | number \| string | ``     |

### SubSideNavbar Events

| 事件名      | 说明     | 回调参数 |
| ----------- | -------- | -------- |
| title-click | 导航点击 | -        |

### SideNavbarItem Events

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| click  | 导航点击 | -        |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/configprovider)。

| 名称                                        | 默认值                     | 描述 |
| ------------------------------------------- | -------------------------- | ---- |
| --mot-sidenavbar-content-bg-color           | var(--mot-white)           | -    |
| --mot-sidenavbar-sub-title-border-color     | #f6f6f6                    | -    |
| --mot-sidenavbar-sub-title-bg-color         | #f6f6f6                    | -    |
| --mot-sidenavbar-sub-title-font-size        | var(--mot-font-size-large) | -    |
| --mot-sidenavbar-sub-title-radius           | 0                          | -    |
| --mot-sidenavbar-sub-title-border           | 0                          | -    |
| --mot-sidenavbar-sub-title-width            | 100%                       | -    |
| --mot-sidenavbar-sub-title-height           | 40px                       | -    |
| --mot-sidenavbar-sub-title-text-line-height | 40px                       | -    |
| --mot-sidenavbar-sub-title-text-color       | var(--mot-title-color)     | -    |
| --mot-sidenavbar-item-title-color           | #333                       | -    |
| --mot-sidenavbar-item-title-bg-color        | var(--mot-white)           | -    |
| --mot-sidenavbar-item-height                | 40px                       | -    |
| --mot-sidenavbar-item-line-height           | 40px                       | -    |
| --mot-sidenavbar-item-font-size             | 16px                       | -    |
