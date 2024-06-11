# TimeSelect 配送时间

### 介绍

用于配送时间选择

### 基础用法

``` html
<template>
  <mot-cell @click="handleClick1">
    <span><label>请选择配送时间</label></span>
  </mot-cell>
  <mot-time-select v-model:visible="visible1" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
    <template #pannel>
      <mot-time-pannel name="2月23日(今天)" pannel-key="0" @change="handleChange1"></mot-time-pannel>
      <mot-time-pannel name="2月24日(星期三)" pannel-key="1" @change="handleChange1"></mot-time-pannel>
    </template>
    <template #detail>
      <mot-time-detail :times="times1" @select="selectTime1"></mot-time-detail>
    </template>
  </mot-time-select>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        visible1: false,
        currentKey1: 0,
        currentTime1: [] as any[],
        times1: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ],
      });

      const handleChange1 = (pannelKey: number) => {
        state.currentKey1 = pannelKey;
        state.currentTime1 = [];
        state.currentTime1.push({
          key: state.currentKey1,
          list: []
        });
      };

      const handleClick1 = () => {
        state.visible1 = true;
      };

      const selectTime1 = (item: string) => {
        let curTimeIndex = state.currentTime1[0]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime1[0]['list'].push(item);
        } else {
          state.currentTime1[0]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected1 = (obj: any) => {
        console.log(`您选择了：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime1.push({
          key: state.currentKey1,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange1,
        handleSelected1,
        selectTime1,
        handleClick1, 
      };
    }
  };
</script>
```

### 可选择多个日期时间

``` html
<template>
  <mot-cell @click="handleClick2">
    <span><label>请选择配送时间</label></span>
  </mot-cell>
  <mot-time-select v-model:visible="visible2" height="50%" :current-key="currentKey2" :current-time="currentTime2" @select="handleSelected2">
    <template #pannel>
      <mot-time-pannel name="2月23日(今天)" pannel-key="0" @change="handleChange2"></mot-time-pannel>
      <mot-time-pannel name="2月24日(星期三)" pannel-key="1" @change="handleChange2"></mot-time-pannel>
    </template>
    <template #detail>
      <mot-time-detail :times="times2" @select="selectTime2"></mot-time-detail>
    </template>
  </mot-time-select>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        visible2: false,
        currentKey2: 0,
        currentTime2: [] as any[],
        times2: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ]
      });

      const handleChange2 = (pannelKey: number) => {
        state.currentKey2 = pannelKey;
        let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
        if(!curTime) {
          state.currentTime2.push({
            key: pannelKey,
            list: []
          });
        }
      };

      const handleClick2 = () => {
        state.visible2 = true;
      };

      const selectTime2 = (item: string) => {
        let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
        let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime2[findIndex]['list'].push(item);
        } else {
          state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected2 = (obj: any) => {
        console.log(`您选择了：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime2.push({
          key: state.currentKey2,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2, 
      };
    }
  };
</script>
```

### 更改标题

``` html
<template>
  <mot-cell @click="handleClick2">
    <span><label>请选择配送时间</label></span>
  </mot-cell>
  <mot-time-select v-model:visible="visible2" height="50%" :current-key="currentKey2" :current-time="currentTime2" @select="handleSelected2">
    <template #title>
      <div class="timeselect-title">
        <p class="title">我是标题</p>
        <p class="subtitle">我是副标题</p>
      </div>
    </template>
    <template #pannel>
      <mot-time-pannel name="2月23日(今天)" pannel-key="0" @change="handleChange2"></mot-time-pannel>
      <mot-time-pannel name="2月24日(星期三)" pannel-key="1" @change="handleChange2"></mot-time-pannel>
    </template>
    <template #detail>
      <mot-time-detail :times="times2" @select="selectTime2"></mot-time-detail>
    </template>
  </mot-time-select>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        visible2: false,
        currentKey2: 0,
        currentTime2: [] as any[],
        times2: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ]
      });

      const handleChange2 = (pannelKey: number) => {
        state.currentKey2 = pannelKey;
        let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
        if(!curTime) {
          state.currentTime2.push({
            key: pannelKey,
            list: []
          });
        }
      };

      const handleClick2 = () => {
        state.visible2 = true;
      };

      const selectTime2 = (item: string) => {
        let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
        let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime2[findIndex]['list'].push(item);
        } else {
          state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected2 = (obj: any) => {
        console.log(`您选择了：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime2.push({
          key: state.currentKey2,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2, 
      };
    }
  };
</script>
<style lang="scss">
.timeselect-title {
  height: 50px;
  p {
    line-height: 1;
    padding: 0;
    margin: 0;
    &.title {
      margin: 10px 0;
      font-size: 16px;
      font-weight: bold;
    }
    &.subtitle {
      color: #999;
    }
  }
}
</style>
```

## API

### TimeSelect Props

| 参数               | 说明                                                     | 类型             | 默认值     |
| ------------------ | -------------------------------------------------------- | ---------------- | ---------- |
| visible            | 是否显示弹层                                             | boolean          | `false`    |
| height             | 弹层的高度                                               | string           | `20%`      |
| title              | 弹层标题                                                 | string           | `取件时间` |
| current-key        | 唯一标识                                                 | string \| number | `0`        |
| current-time       | 当前选择的时间，数组元素包含:key: string; list: string[] | Array            | `[]`       |
| lock-scroll   `H5` | 背景是否锁定                                             | boolean          | `true`     |

### Slots

| 名称   | 说明         |
| ------ | ------------ |
| title  | 更改标题     |
| pannel | 左侧列表     |
| detail | 右侧详细内容 |

### TimePannel Props

| 参数       | 说明                                         | 类型             | 默认值 |
| ---------- | -------------------------------------------- | ---------------- | ------ |
| name       | 显示的名称                                   | string           | ``     |
| pannel-key | 唯一标识，和 current-key一起标识当前选择的天 | string \| number | `0`    |

### TimeDetail Props

| 参数  | 说明                                    | 类型  | 默认值 |
| ----- | --------------------------------------- | ----- | ------ |
| times | 可选择的时间，数组元素同 `current-time` | Array | `[]`   |

### TimeSelect Event

| 事件名 | 说明               | 回调参数                          |
| ------ | ------------------ | --------------------------------- |
| select | 关闭遮罩之后的回调 | `key: string \| number, list: []` |

### TimePannel Event

| 事件名 | 说明           | 回调参数                       |
| ------ | -------------- | ------------------------------ |
| change | 点击内容的回调 | `pannelKey: string \｜ number` |

### TimeDetail Event

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| select | 点击时间的回调 | `time: string` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/basic/configprovider)。

| 名称                                            | 默认值                   |
| ----------------------------------------------- | ------------------------ |
| --mot-timeselect-title-font-size                | var(--mot-font-size-2)   |
| --mot-timeselect-title-color                    | var(--mot-title-color)   |
| --mot-timeselect-title-width                    | 100%                     |
| --mot-timeselect-title-height                   | 50px                     |
| --mot-timeselect-title-line-height              | 50px                     |
| --mot-timeselect-pannel-bg-color                | #f6f7f9                  |
| --mot-timeselect-timepannel-text-color          | var(--mot-title-color2)  |
| --mot-timeselect-timepannel-font-size           | var(--mot-font-size-2)   |
| --mot-timeselect-timepannel-cur-bg-color        | var(--mot-white)         |
| --mot-timeselect-timepannel-cur-text-color      | #333333                  |
| --mot-timeselect-timepannel-width               | 140px                    |
| --mot-timeselect-timepannel-height              | 40px                     |
| --mot-timeselect-timepannel-padding             | 15px                     |
| --mot-timeselect-timedetail-padding             | 0 5px 50px 13px          |
| --mot-timeselect-timedetail-item-width          | 100px                    |
| --mot-timeselect-timedetail-item-height         | 50px                     |
| --mot-timeselect-timedetail-item-line-height    | 50px                     |
| --mot-timeselect-timedetail-item-bg-color       | #f6f7f9                  |
| --mot-timeselect-timedetail-item-border-radius  | 5px                      |
| --mot-timeselect-timedetail-item-text-color     | #333333                  |
| --mot-timeselect-timedetail-item-text-font-size | var(--mot-font-size-2)   |
| --mot-timeselect-timedetail-item-cur-bg-color   | var(--mot-primary-color) |
| --mot-timeselect-timedetail-item-cur-border     | var(--mot-primary-color) |
| --mot-timeselect-timedetail-item-cur-text-color | var(--mot-primary-color) |
