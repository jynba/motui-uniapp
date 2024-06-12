# Progress 进度条

### 介绍

展示操作或任务的当前进度。

### 基础用法

```html
<template>
  <mot-cell>
     <mot-progress percentage="30" />
  </mot-cell>
</template>
```

### 设置高度和颜色

```html
<template>
  <mot-cell>
    <mot-progress percentage="30" stroke-color=" rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
   </mot-cell>
</template>
```

### 设置百分比不显示

```html
<template>
  <mot-cell>
     <mot-progress percentage="50" :show-text="false" stroke-height="24" />
  </mot-cell>
</template>
```

### 设置百分比内显

```html
<template>
     <mot-cell>
        <mot-progress percentage="60" :text-inside="true" />
      </mot-cell>
</template>
```

### 设置百分比内显自定义内容

```html
<template>
     <mot-cell>
        <mot-progress percentage="60" :text-inside="true">
          <img
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
            style="display: block; width: 30px; height: 30px"
          />
        </mot-progress>
      </mot-cell>
</template>
```

### 设置自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。

```html
<template>
  <mot-cell>
        <mot-progress percentage="30" :text-inside="true" size="small"> </mot-progress>
      </mot-cell>
      <mot-cell>
        <mot-progress percentage="50" :text-inside="true" size="base"> </mot-progress>
      </mot-cell>
      <mot-cell>
        <mot-progress percentage="70" :text-inside="true" size="large"> </mot-progress>
      </mot-cell>
</template>
```

### 设置状态显示

```html
<template>
   <div>
      <mot-cell>
        <mot-progress
          percentage="30"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
        />
      </mot-cell>
      <mot-cell>
        <mot-progress percentage="50" :stroke-width="strokeWidth" status="icon" />
      </mot-cell>
      <mot-cell>
        <mot-progress
          percentage="100"
          stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          stroke-width="15"
          status="icon"
        >
          <template #iconName>
            <mot-icon  name="issue" color="red" width="15px" height="15px" />
          </template>
        </mot-progress>
      </mot-cell>
    </div>
</template>
```

### 动态改变

```html
<template>
   <div>
    <mot-cell>
      <mot-progress :percentage="val" />
    </mot-cell>
    <mot-cell>
      <mot-button type="default" @click="setReduceVal">减少</mot-button>
      <mot-button type="primary" @click="setAddVal">增加</mot-button>
    </mot-cell>
    </div>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default{
    setup() {
    const val = ref(0);
    const setAddVal = () => {
      if (val.value >= 100) {
        return false;
      }
      val.value += 10;
    };
    const setReduceVal = () => {
      if (val.value <= 0) {
        return false;
      }
      val.value -= 10;
    };
    return {
      val,
      setAddVal,
      setReduceVal,
    };
  }

  }
</script>
```

## API

### Props

| 参数               | 说明                                                              | 类型    | 默认值  |
| ------------------ | ----------------------------------------------------------------- | ------- | ------- |
| percentage         | 百分比                                                            | number  | `0`     |
| is-show-percentage | 是否需要展示百分号                                                | boolean | `true`  |
| stroke-color       | 进度条背景色                                                      | string  | `#f30`  |
| stroke-width       | 进度条宽度                                                        | string  | -       |
| size               | 进度条及文字尺寸，可选值 `small` `base` `large`                   | string  | `base`  |
| show-text          | 是否显示进度条文字内容                                            | boolean | `true`  |
| text-inside        | 进度条文字显示位置(false:外显，true:内显)                         | boolean | `false` |
| text-color         | 进度条文字颜色设置                                                | string  | `#333`  |
| text-background    | 进度条文字背景颜色设置                                            | string  | -       |
| status             | 进度条当前状态，可选值`active(展示动画效果)` `icon(展示icon标签)` | string  | `text`  |

### Slots

| 名称     | 说明             | 作用域参数 |
| -------- | ---------------- | ---------- |
| iconName | 右侧 `icon` 内容 | -          |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/configprovider)。

| 名称                                    | 默认值                                                                                |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| --mot-progress-inner-background-color   | linear-gradient(135deg,var(--mot-primary-color) 0%,var(--mot-primary-color-end) 100%) |
| --mot-progress-insidetext-background    | var(--mot-progress-inner-background-color)                                            |
| --mot-progress-outer-background-color   | #f3f3f3                                                                               |
| --mot-progress-outer-border-radius      | 12px                                                                                  |
| --mot-progress-insidetext-border-radius | 5px                                                                                   |
| --mot-progress-insidetext-padding       | 3px 5px 3px 6px                                                                       |
| --mot-progress-small-height             | 5px                                                                                   |
| --mot-progress-small-text-font-size     | 7px                                                                                   |
| --mot-progress-small-text-line-height   | 10px                                                                                  |
| --mot-progress-small-text-padding       | 2px 4px                                                                               |
| --mot-progress-base-height              | 10px                                                                                  |
| --mot-progress-base-text-font-size      | 9px                                                                                   |
| --mot-progress-base-text-line-height    | 13px                                                                                  |
| --mot-progress-base-text-padding        | var(--mot-progress-insidetext-padding)                                                |
| --mot-progress-large-height             | 15px                                                                                  |
| --mot-progress-large-text-font-size     | 13px                                                                                  |
| --mot-progress-large-text-line-height   | 18px                                                                                  |
| --mot-progress-large-text-padding       | var(--mot-progress-insidetext-padding)                                                |
