# Tabs 选项卡切换

### 介绍

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

### 基础用法

```html
<template>
<mot-tabs v-model="state.tab1value">
  <mot-tab-pane title="Tab 1">
    Tab 1
  </mot-tab-pane>
  <mot-tab-pane title="Tab 2">
    Tab 2
  </mot-tab-pane>
  <mot-tab-pane title="Tab 3">
    Tab 3
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
    });
    return { state };
  }
};
</script>
```

### 手势滑动切换

```html
<template>
<mot-tabs v-model="state.tab1value" swipeable>
  <mot-tab-pane title="Tab 1">
    Tab 1
  </mot-tab-pane>
  <mot-tab-pane title="Tab 2">
    Tab 2
  </mot-tab-pane>
  <mot-tab-pane title="Tab 3">
    Tab 3
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
    });
    return { state };
  }
};
</script>
```

### 基础用法-微笑曲线

```html
<template>
<mot-tabs v-model="state.tab11value" type="smile">
  <mot-tab-pane title="Tab 1">
    Tab 1
  </mot-tab-pane>
  <mot-tab-pane title="Tab 2">
    Tab 2
  </mot-tab-pane>
  <mot-tab-pane title="Tab 3">
    Tab 3
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab11value: '0',
    });
    return { state };
  }
};
</script>
```

### 通过 pane-key 匹配

```html
<template>
<mot-tabs v-model="state.tab2value">
  <mot-tab-pane title="Tab 1" pane-key="0">
    Tab 1
  </mot-tab-pane>
  <mot-tab-pane title="Tab 2" pane-key="1" :disabled="true">
    Tab 2
  </mot-tab-pane>
  <mot-tab-pane title="Tab 3" pane-key="2">
    Tab 3
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab2value: '0',
    });
    return { state };
  }
};
</script>
```

### TabPane 自动高度

自动高度。设置为 true 时，mot-tabs 和 mot-tabs__content 会随着当前 mot-tab-pane 的高度而发生变化。

```html
<template>
  <mot-tabs v-model="state.tab2value" :auto-height="true">
    <mot-tab-pane title="Tab 1" pane-key="0">
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
    </mot-tab-pane>
    <mot-tab-pane title="Tab 2" pane-key="1"> Tab 2 </mot-tab-pane>
    <mot-tab-pane title="Tab 3" pane-key="2"> Tab 3 </mot-tab-pane>
  </mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab2value: '0',
    });
    return { state };
  }
};
</script>
```

### 数据异步渲染 3s

```html
<template>
<mot-tabs v-model="state.tab3value">
  <mot-tab-pane v-for="item in state.list3" :title="'Tab '+ item">
    Tab {{item}}
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab3value: '0',
      list3: Array.from(new Array(2).keys()),
    });
    setTimeout(() => {
      state.list3.push(999);
    }, 3000);
    return { state };
  }
};
</script>
```

### 数量多，滚动操作

可通过`direction`属性修改标题栏自动滚动方向。

```html
<template>
<mot-tabs v-model="state.tab4value" title-scroll title-gutter="10">
  <mot-tab-pane v-for="item in state.list4" :title="'Tab '+ item">
    Tab {{item}}
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab4value: '0',
      list4: Array.from(new Array(10).keys()),
    });
    return { state };
  }
};
</script>
```

### 左右布局

```html
<template>
<mot-tabs style="height:300px" v-model="state.tab5value" title-scroll direction="vertical">
  <mot-tab-pane v-for="item in state.list5" :pane-key="item" :title="'Tab '+ item">
    Tab {{item}}
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab5value: '0',
      list5: Array.from(new Array(2).keys()),
    });
    return { state };
  }
};
</script>
```

### 左右布局-微笑曲线

```html
<template>
<mot-tabs style="height:300px" v-model="state.tab6value" type="smile" title-scroll direction="vertical">
  <mot-tab-pane v-for="item in state.list5" :pane-key="item" :title="'Tab '+ item">
    Tab {{item}}
  </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab6value: '0',
      list5: Array.from(new Array(2).keys()),
    });
    return { state };
  }
};
</script>
```

### 标签栏字体尺寸 large normal small

```html
<template>
<mot-tabs v-model="state.tab1value" size="large">
  <mot-tab-pane title="Tab 1"> Tab 1 </mot-tab-pane>
  <mot-tab-pane title="Tab 2"> Tab 2 </mot-tab-pane>
  <mot-tab-pane title="Tab 3"> Tab 3 </mot-tab-pane>
</mot-tabs>
<mot-tabs v-model="state.tab1value" size="normal">
  <mot-tab-pane title="Tab 1"> Tab 1 </mot-tab-pane>
  <mot-tab-pane title="Tab 2"> Tab 2 </mot-tab-pane>
  <mot-tab-pane title="Tab 3"> Tab 3 </mot-tab-pane>
</mot-tabs>
<mot-tabs v-model="state.tab1value" size="small">
  <mot-tab-pane title="Tab 1"> Tab 1 </mot-tab-pane>
  <mot-tab-pane title="Tab 2"> Tab 2 </mot-tab-pane>
  <mot-tab-pane title="Tab 3"> Tab 3 </mot-tab-pane>
</mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
    });
    return { state };
  }
};
</script>
```

### 自定义标签栏

```html
<template>
  <mot-tabs v-model="state.tab7value" swipeable>
      <template #titles>
        <div class="title-list">
          <view
            v-for="item in state.list6" :key="item.paneKey" class="title-item"
            :class="{ 'tabs-active': state.tab7value === item.paneKey }" @click="state.tab7value = item.paneKey"
          >
            <mot-icon name="dongdong" />
            <view class="mot-tabs__titles-item__text">
              {{ item.title }}
            </view>
            <view class="item__line" />
          </view>
        </div>
      </template>
      <mot-tab-pane v-for="item in state.list6" :key="item" :pane-key="item.paneKey">
        {{ item.title }}
      </mot-tab-pane>
  </mot-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab7value: 'c1',
       list6: [
        {
          title: '自定义 1',
          paneKey: 'c1'
        },
        {
          title: '自定义 2',
          paneKey: 'c2'
        },
        {
          title: '自定义 3',
          paneKey: 'c3'
        }
      ]
    });
    return { state };
  }
};
</script>
<style lang="scss" scoped>
.title-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  .title-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  .tabs-active {
    font-weight: bold;
    color: $tabs-titles-item-active-color;
    opacity: $tabs-titles-item-line-opacity;
    transition: width 0.3s ease;

    .item__line {
      position: absolute;
      bottom: -10%;
      left: 50%;
      overflow: hidden;
      content: ' ';
      border-radius: $tabs-titles-item-line-border-radius;
      opacity: $tabs-titles-item-line-opacity;
      transition: width 0.3s ease;
      transform: translate(-50%, 0);
      width: $tabs-horizontal-titles-item-active-line-width;
      height: 3px;
      content: ' ';
      background: $tabs-horizontal-tab-line-color;
    }
  }
}
</style>
```

## API

### Tabs Props

| 参数             | 说明                                                                                                          | 类型             | 默认值       |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ---------------- | ------------ |
| v-model          | 绑定当前选中标签的标识符                                                                                      | number \| string | `0`          |
| custom-color     | 标签选中色                                                                                                    | string           | `#1a1a1a`    |
| background       | 标签栏背景颜色                                                                                                | string           | `#f5f5f5`    |
| direction        | 使用横纵方向 可选值 horizontal、vertical                                                                      | string           | `horizontal` |
| type             | 选中底部展示样式 可选值 line、smile                                                                           | string           | `line`       |
| swipeable        | 是否开启手势左右滑动切换                                                                                      | boolean          | `false`      |
| title-scroll     | 标签栏是否可以滚动                                                                                            | boolean          | `false`      |
| ellipsis         | 是否省略过长的标题文字                                                                                        | boolean          | `true`       |
| animated-time    | 切换动画时长，单位 ms。0 代表无动画，此时必须设置 `pane-key`(_小程序场景数据过大建议设置0，解决切换卡顿问题_) | number \| string | `300`        |
| title-gutter     | 标签间隙                                                                                                      | number \| string | `0`          |
| size             | 标签栏字体尺寸大小 可选值  large normal small                                                                 | string           | `normal`     |
| auto-height      | 自动高度。设置为 true 时，mot-tabs 和 mot-tabs__content 会随着当前 mot-tab-pane 的高度而发生变化。            | boolean          | `false`      |
| name `1.6.0废弃` | 在`uni`环境下，必须设置 name 才能开启 title-scroll 功能，版本 >=1.6.0 时不再需要。                            | string           | ''           |
| align `1.6.0`    | 横轴方向的标题对齐方式，可选值 left、center                                                                   | string           | `center`     |

### Tabs Slots

| 名称    | 说明           |
| ------- | -------------- |
| titles  | 自定义导航区域 |
| default | 自定义内容     |

### TabPane Props

| 参数     | 说明                    | 类型    | 默认值           |
| -------- | ----------------------- | ------- | ---------------- |
| title    | 标题                    | string  |                  |
| pane-key | 标签 Key , 匹配的标识符 | string  | 默认索引0,1,2... |
| disabled | 是否禁用标签            | boolean | false            |

### TabPane Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

### Tabs Events

| 事件名 | 说明                     | 回调参数               |
| ------ | ------------------------ | ---------------------- |
| click  | 点击标签时触发           | title,paneKey,disabled |
| change | 当前激活的标签改变时触发 | title,paneKey,disabled |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                                                  | 默认值                                                                          |
|-----------------------------------------------------|------------------------------------------------------------------------------|
| --mot-tabs-tab-smile-color                          | var(--mot-primary-color)                                                     |
| --mot-tabs-titles-border-radius                     | 0                                                                            |
| --mot-tabs-titles-item-large-font-size              | var(--mot-font-size-3)                                                       |
| --mot-tabs-titles-item-font-size                    | var(--mot-font-size-2)                                                       |
| --mot-tabs-titles-item-small-font-size              | var(--mot-font-size-1)                                                       |
| --mot-tabs-titles-item-color                        | var(--mot-title-color)                                                       |
| --mot-tabs-titles-item-active-color                 | var(--mot-title-color)                                                       |
| --mot-tabs-titles-background-color                  | var(--mot-help-color)                                                        |
| --mot-tabs-horizontal-tab-line-color                | linear-gradient(90deg,var(--mot-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)  |
| --mot-tabs-horizontal-titles-height                 | 46px                                                                         |
| --mot-tabs-horizontal-titles-item-min-width         | 50px                                                                         |
| --mot-tabs-horizontal-titles-item-active-line-width | 40px                                                                         |
| --mot-tabs-vertical-tab-line-color                  | linear-gradient(180deg,var(--mot-primary-color) 0%,rgba(#fa2c19, 0.15) 100%) |
| --mot-tabs-vertical-titles-item-height              | 40px                                                                         |
| --mot-tabs-vertical-titles-item-active-line-height  | 14px                                                                         |
| --mot-tabs-vertical-titles-width                    | 100px                                                                        |
| --mot-tabs-titles-item-line-border-radius           | 0                                                                            |
| --mot-tabs-titles-item-line-opacity                 | 1                                                                            |
| --mot-tab-pane-padding `1.7.11`                     | 24px 20px                                                                    |
| --mot-tab-pane-background `1.7.11`                  | #fff                                                                         |
