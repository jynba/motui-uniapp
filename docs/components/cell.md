# Cell 单元格

### 介绍

列表项，可组成列表。

### 基础用法

```html
<template>
  <mot-cell title="我是标题" desc="描述文字"></mot-cell>
  <mot-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></mot-cell>
  <mot-cell title="点击测试" @click="testClick"></mot-cell>
  <mot-cell title="圆角设置 0" round-radius="0"></mot-cell>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const switchChecked = ref(true);
      const testClick = (event) => {
        console.log('Click Test');
      };
      return { testClick, switchChecked };
    }
  };
</script>
```

### 尺寸设置 large

```html
<template>
  <mot-cell size="large" title="我是标题" desc="描述文字"></mot-cell>
  <mot-cell size="large" title="我是标题" sub-title="副标题描述" desc="描述文字"></mot-cell>
</template>
```

### 直接使用插槽（slot）

```html
<template>
  <mot-cell>
    <div>自定义内容</div>
  </mot-cell>
</template>
```

### 直接使用插槽（slot title）

```html
<template>
  <mot-cell desc="描述文字">
      <template v-slot:title>
        <span>Title <b style="color: red">1</b></span>
      </template>
  </mot-cell>
</template>
```

### 链接 | 分组用法

```html
<template>
  <mot-cell-group title="链接 | 分组用法" desc="使用 mot-cell-group 支持 title desc slots">
    <mot-cell title="链接" is-link></mot-cell>
    <mot-cell title="URL 跳转" desc="https://m.jd.com" is-link url="https://m.jd.com"></mot-cell>
    <mot-cell title="路由跳转 ’/‘ " to="/"></mot-cell>
  </mot-cell-group>
</template>
```

### 自定义右侧箭头区域

```html
<template>
  <mot-cell-group title="自定义右侧箭头区域">
    <mot-cell title="Switch">
      <template v-slot:link>
        <mot-switch v-model="switchChecked" />
      </template>
    </mot-cell>
  </mot-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const testClick = (event: Event) => {
        console.log('点击事件');
      };
      const switchChecked = ref(true);
      return { testClick, switchChecked };
    }
  };
</script>
```

### 自定义左侧 Icon 区域

```html
<template>
  <mot-cell-group title="自定义左侧 Icon 区域">
    <mot-cell title="图片">
      <template v-slot:icon>
        <img
          class="mot-icon"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
        />
      </template>
    </mot-cell>
  </mot-cell-group>
</template>
```

### 展示图标

```html
<template>
  <mot-cell title="姓名" icon="my" desc="张三"></mot-cell>
</template>
```

### 只展示 desc ，可通过 desc-text-align 调整内容位置

```html
<template>
  <mot-cell desc-text-align="left" desc="张三"></mot-cell>
</template>
```

### 垂直居中

通过 `center` 属性可以让 Cell 的左右内容都垂直居中。

```html
<template>
  <mot-cell center title="我是标题" sub-title="副标题描述" desc="描述文字"></mot-cell>
</template>
```

### 直接使用插槽（slot desc）

```vue
<template>
  <mot-cell title="我是标题">
    <template #desc>
      <span>描述文字 <b style="color: red">2</b></span>
    </template>
  </mot-cell>
</template>
```

## API

### CellGroup Props

| 参数    | 说明   | 类型     | 默认值 |
|-------|------|--------|-----|
| title | 分组标题 | string | -   |
| desc  | 分组描述 | string | -   |

### Cell Props

| 参数              | 说明                                                                                 | 类型      | 默认值     |
|-----------------|------------------------------------------------------------------------------------|---------|---------|
| title           | 标题名称                                                                               | string  | -       |
| sub-title       | 左侧副标题                                                                              | string  | -       |
| desc            | 右侧描述                                                                               | string  | -       |
| desc-text-align | 右侧描述文本对齐方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | string  | `right` |
| is-link         | 是否展示右侧箭头并开启点击反馈                                                                    | boolean | `false` |
| to `1.7.8`      | 跳转地址（uni.navigateTo的url参数）                                                         | string  | -       |
| round-radius    | 圆角半径                                                                               | number  | `6px`   |
| center          | 是否使内容垂直居中                                                                          | boolean | `false` |
| size            | 单元格大小，可选值为 `large`                                                                 | string  | -       |

### Cell Events

| 事件名   | 说明   | 回调参数          |
|-------|------|---------------|
| click | 点击事件 | `event:Event` |

### Cell Slots

| 名称           | 说明               |
|--------------|------------------|
| icon         | 自定义左侧 `icon` 区域  |
| default      | 自定义内容            |
| link         | 自定义右侧 `link` 区域  |
| title        | 自定义 `title` 标题区域 |
| desc `1.1.6` | 自定义 `desc` 描述区域  |

### CellGroup Slots

| 名称    | 说明               |
|-------|------------------|
| title | 自定义 `title` 标题区域 |
| desc  | 自定义 `desc` 描述区域  |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/configprovider)。

| 名称                                 | 默认值                                    |
|------------------------------------|----------------------------------------|
| --mot-cell-color                   | var(--mot-title-color2)                |
| --mot-cell-title-font              | var(--mot-font-size-2)                 |
| --mot-cell-title-desc-font         | var(--mot-font-size-1)                 |
| --mot-cell-desc-font               | var(--mot-font-size-2)                 |
| --mot-cell-desc-color              | var(--mot-disable-color)               |
| --mot-cell-border-radius           | 6px                                    |
| --mot-cell-padding                 | 13px 16px                              |
| --mot-cell-line-height             | 20px                                   |
| --mot-cell-after-right             | 16px                                   |
| --mot-cell-after-border-bottom     | 1px solid #f5f6f7                      |
| --mot-cell-default-icon-margin     | 0 4px 0 0px                            |
| --mot-cell-large-title-font        | var(--mot-font-size-large)             |
| --mot-cell-large-title-desc-font   | var(--mot-font-size-base)              |
| --mot-cell-large-padding           | 15px 16px                              |
| --mot-cell-background              | var(--mot-white)                       |
| --mot-cell-box-shadow              | 0px 1px 7px 0px rgba(237, 238, 241, 1) |
| --mot-cell-group-title-padding     | 0 10px                                 |
| --mot-cell-group-title-color       | #909ca4                                |
| --mot-cell-group-title-font-size   | var(--mot-font-size-2)                 |
| --mot-cell-group-title-line-height | 20px                                   |
| --mot-cell-group-desc-padding      | 0 10px                                 |
| --mot-cell-group-desc-color        | #909ca4                                |
| --mot-cell-group-desc-font-size    | var(--mot-font-size-1)                 |
| --mot-cell-group-desc-line-height  | 16px                                   |
| --mot-cell-group-background-color  | var(--mot-white)                       |
