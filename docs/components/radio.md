# Radio 单选按钮

### 介绍

用于在一组备选项中进行单选

### 基础用法

通过 **v-model** 绑定值当前选项的 **label** 。并且必须 **mot-radio-group** 和 **mot-radio** 相结合进行使用

```html
<template>
  <mot-cell-group title="基础用法">
    <mot-cell>
      <mot-radio-group v-model="radioVal">
        <mot-radio shape="button" label="1" size="large">选项1</mot-radio>
        <mot-radio disabled label="2">选项2</mot-radio>
        <mot-radio label="3">选项3</mot-radio>
      </mot-radio-group>
    </mot-cell>
    <mot-cell>
      <mot-radio-group v-model="radioVal" text-position="left">
        <mot-radio label="1">选项1</mot-radio>
        <mot-radio disabled label="2">选项2</mot-radio>
        <mot-radio label="3">选项3</mot-radio>
      </mot-radio-group>
    </mot-cell>
    <mot-cell>
      <mot-radio-group v-model="radioVal">
        <mot-radio shape="button" label="1">选项1</mot-radio>
        <mot-radio disabled shape="button" label="2">选项2</mot-radio>
        <mot-radio shape="button" label="3">选项3</mot-radio>
      </mot-radio-group>
    </mot-cell>
  </mot-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

### 水平使用

```html
<template>
  <mot-cell-group title="水平使用">
    <mot-cell>
      <mot-radio-group v-model="radioVal" direction="horizontal">
        <mot-radio shape="button" label="1" size="large">选项1</mot-radio>
        <mot-radio label="2">选项2</mot-radio>
        <mot-radio label="3">选项3</mot-radio>
      </mot-radio-group>
    </mot-cell>
    <mot-cell>
      <mot-radio-group v-model="radioVal" text-position="left" direction="horizontal">
        <mot-radio label="1">选项1</mot-radio>
        <mot-radio label="2">选项2</mot-radio>
        <mot-radio label="3">选项3</mot-radio>
      </mot-radio-group>
    </mot-cell>
    <mot-cell>
      <mot-radio-group v-model="radioVal" direction="horizontal">
        <mot-radio shape="button" label="1">选项1</mot-radio>
        <mot-radio shape="button" label="2">选项2</mot-radio>
        <mot-radio shape="button" label="3">选项3</mot-radio>
      </mot-radio-group>
    </mot-cell>
  </mot-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

### 自定义尺寸

```html
<template>
  <mot-cell-group title="自定义尺寸">
    <mot-cell>
      <mot-radio-group v-model="radioVal">
        <mot-radio label="1" icon-size="12">自定义尺寸12</mot-radio>
        <mot-radio label="2" icon-size="12">自定义尺寸12</mot-radio>
      </mot-radio-group>
    </mot-cell>
  </mot-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

### 自定义图标

通过 `slot` 自定义图标，建议同时设置`icon`和`checkedIcon`两个插槽

```html
<template>
  <mot-cell-group title="Radio自定义图标">
    <mot-cell>
      <mot-radio-group v-model="radioVal">
        <mot-radio label="1">
          自定义图标
          <template #icon> <mot-icon  name="checklist" /> </template>
          <template #checkedIcon> <mot-icon  name="checklist" custom-color="red" /> </template>
        </mot-radio>
        <mot-radio label="2">
          自定义图标
          <template #icon> <mot-icon  name="checklist" /> </template>
          <template #checkedIcon> <mot-icon  name="checklist" custom-color="red" /> </template>
        </mot-radio>
      </mot-radio-group>
    </mot-cell>
  </mot-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

### 触发 change 事件

```html
<template>
  <mot-cell-group title="触发事件">
    <mot-cell>
      <mot-radio-group v-model="radioVal" @change="handleChange">
        <mot-radio label="1">触发事件</mot-radio>
        <mot-radio label="2">触发事件</mot-radio>
      </mot-radio-group>
    </mot-cell>
    <mot-cell title="当前选中值" :desc="radioVal"></mot-cell>
  </mot-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      const handleChange = (value: any) => {
        console.log(value);
      };
      return { radioVal, handleChange };
    },
  };
</script>
```

## API

### Radio Props

| 参数          | 说明                                                                          | 类型                        | 默认值   |
| ------------- | ----------------------------------------------------------------------------- | --------------------------- | -------- |
| disabled      | 是否禁用选择                                                                  | boolean                     | `false`  |
| icon-size     | [图标尺寸](/components/basic/icon)                                            | string \| number            | `18`     |
| label         | 单选框标识                                                                    | string \| number \| boolean | -        |
| shape         | 形状，可选值为 button、round                                                  | string                      | `round`  |
| size `v1.5.9` | 尺寸，可选值为 `large` `small` `mini` `normal`，仅在 shape 为 `button` 时生效 | string                      | `normal` |

### Radio Slots

| 名称        | 说明           |
| ----------- | -------------- |
| icon        | 未选中时的图标 |
| checkedIcon | 选中时的图标   |

### RadioGroup Props

| 参数          | 说明                                              | 类型                        | 默认值     |
| ------------- | ------------------------------------------------- | --------------------------- | ---------- |
| v-model       | 当前选中项的标识符，与 `label` 值一致时呈选中状态 | string \| number \| boolean | -          |
| text-position | 文本所在的位置，可选值：`left`,`right`            | string                      | `right`    |
| direction     | 使用横纵方向 可选值 `horizontal、vertical`        | string                      | `vertical` |

### RadioGroup Events

| 事件名 | 说明         | 回调参数                                           |
| ------ | ------------ | -------------------------------------------------- |
| change | 值变化时触发 | 当前选中项值（label）【设置label后有值、默认为空】 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                                  | 默认值                   |
| ------------------------------------- | ------------------------ |
| --mot-radio-label-font-color          | #1d1e1e                  |
| --mot-radio-label-font-active-color   | var(--mot-primary-color) |
| --mot-radio-label-disable-color       | #999                     |
| --mot-radio-icon-disable-color        | #d6d6d6                  |
| --mot-radio-label-button-border-color | var(--mot-primary-color) |
| --mot-radio-label-button-background   | var(--mot-primary-color) |
| --mot-radio-label-margin-left         | 15px                     |
| --mot-radio-button-border-radius      | 15px                     |
| --mot-radio-label-font-size           | 14px                     |
| --mot-radio-button-font-size          | 12px                     |
| --mot-radio-button-padding            | 5px 18px                 |
| --mot-radio-icon-disable-color2       | var(--mot-help-color)_   |
