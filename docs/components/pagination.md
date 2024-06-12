# Pagination 分页

### 介绍

当数据量较多时，采用分页的形式分隔长列表。

### 基础用法

通过 v-model 来绑定当前页码。

```html
<template>
  <mot-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss">
  .mot-pagination {
    margin-left:20px;
  }
</style>
```  

### 简单模式

将 mode 设置为 simple 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```html
<template>
  <mot-pagination v-model="currentPage1" :page-count="12" mode="simple" @change="pageChange" />
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage1: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss">
  .mot-pagination {
    margin-left:20px;
  }
</style>
```

### 显示省略号

设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。

```html
<template>
  <mot-pagination v-model="currentPage2" :total-items="125" :show-page-size="3"  @change="pageChange"  force-ellipses/>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage2: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss">
  .mot-pagination {
    margin-left:20px;
  }
</style>
```

### 自定义按钮

设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。

```html
<template>
  <mot-pagination v-model="currentPage3" :total-items="500"  @change="pageChange"  :show-page-size="5">
      <template #prevText>
        <mot-icon name="left" size="10px" />
      </template>
      <template #nextText>
        <mot-icon name="right" size="10px" />
      </template>
      <template #page="{ item }">
          {{ item.number == 3 ? 'hot' : item.text }}
      </template>
  </mot-pagination>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage3: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss">
  .mot-pagination {
    margin-left:20px;
  }
</style>
```

## API

### Props

| 参数           | 说明                       | 类型             | 默认值              |
| -------------- | -------------------------- | ---------------- | ------------------- |
| v-model        | 当前页码                   | number           | `1`                 |
| mode           | 显示模式,可选值为 `simple` | string           | `multi`             |
| prev-text      | 上一页按钮文字             | string           | `上一页`            |
| next-text      | 下一页按钮文字             | string           | `下一页`            |
| page-count     | 总页数                     | string \| number | `传入/根据页数计算` |
| total-items    | 总记录数                   | string \| number | `0`                 |
| items-per-page | 每页记录数                 | string \| number | `10`                |
| show-page-size | 显示的页码个数             | string \| number | `5`                 |
| force-ellipses | 是否显示省略号             | boolean          | `false`             |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| change | 页码改变时触发 | value    |

### Slots

| 名称     | 描述                 | 参数 |
| -------- | -------------------- | ---- |
| prevText | 自定义上一页按钮内容 | -    |
| nextText | 自定义下一页按钮内容 | -    |
| page     | 自定义页码           | -    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/configprovider)。

| 名称                                      | 默认值                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------- |
| --mot-pagination-color                    | var(--mot-primary-color)                                                              |
| --mot-pagination-font-size                | var(--mot-font-size-2)                                                                |
| --mot-pagination-item-border-color        | #e4e7eb                                                                               |
| --mot-pagination-active-background-color  | linear-gradient(135deg,var(--mot-primary-color) 0%,var(--mot-primary-color-end) 100%) |
| --mot-pagination-disable-color            | rgba(116, 116, 116, 0.31)                                                             |
| --mot-pagination-disable-background-color | #f7f8fa                                                                               |
| --mot-pagination-item-border-width        | 1px                                                                                   |
| --mot-pagination-item-border-radius       | 2px                                                                                   |
| --mot-pagination-prev-next-padding        | 0 11px                                                                                |
