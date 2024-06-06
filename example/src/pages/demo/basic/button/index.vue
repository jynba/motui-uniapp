<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(false)
function changeLoading() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}

function click(val: any) {
  /* eslint-disable no-console */
  console.log(val)
}
</script>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Button"
  }
}
</route>

<template>
  <div class="demo">
    <h2 class="title">
      按钮类型
    </h2>
    <div class="demo-button-row">
      <mot-button type="primary" @click="click">
        主要按钮
      </mot-button>
      <mot-button type="info">
        信息按钮
      </mot-button>
      <mot-button type="default">
        默认按钮
      </mot-button>
    </div>
    <div class="demo-button-row2">
      <mot-button type="danger">
        危险按钮
      </mot-button>
      <mot-button type="warning">
        警告按钮
      </mot-button>
      <mot-button type="success">
        成功按钮
      </mot-button>
    </div>
    <h2 class="title">
      朴素按钮
    </h2>
    <div class="demo-button-row2">
      <mot-button plain type="primary">
        朴素按钮
      </mot-button>
      <mot-button plain type="info">
        朴素按钮
      </mot-button>
    </div>
    <h2 class="title">
      禁用状态
    </h2>
    <div class="demo-button-row2">
      <mot-button disabled type="primary">
        禁用状态
      </mot-button>
      <mot-button plain disabled type="info">
        禁用状态
      </mot-button>
      <mot-button plain disabled type="primary">
        禁用状态
      </mot-button>
    </div>
    <h2 class="title">
      按钮形状
    </h2>
    <div class="demo-button-row2">
      <mot-button shape="square" type="primary">
        方形按钮
      </mot-button>
      <mot-button type="info">
        圆形按钮
      </mot-button>
    </div>
    <h2 class="title">
      加载状态
    </h2>
    <div class="demo-button-row2">
      <mot-button loading type="info" />
      <mot-button loading type="warning">
        加载中...
      </mot-button>
      <mot-button :loading="isLoading" type="success" @click="changeLoading">
        Click me!
      </mot-button>
    </div>
    <h2 class="title">
      图标按钮
    </h2>
    <div class="demo-button-row2">
      <mot-button shape="square" plain type="primary">
        <template #icon>
          <mot-icon name="star-fill" />
        </template>
      </mot-button>
      <mot-button shape="square" type="primary">
        <template #icon>
          <mot-icon name="star" />
        </template>
        收藏
      </mot-button>
    </div>

    <h2 class="title">
      按钮尺寸
    </h2>
    <mot-button size="large" type="primary" style="margin-bottom: 10px">
      大号按钮
    </mot-button>
    <div class="demo-button-row2" style="margin-top:5px">
      <mot-button type="primary">
        普通按钮
      </mot-button>
      <mot-button size="small" type="primary">
        小型按钮
      </mot-button>
      <mot-button size="mini" type="primary">
        迷你按钮
      </mot-button>
    </div>
    <h2 class="title">
      块级元素
    </h2>
    <div class="demo-button-row2">
      <mot-button block type="primary">
        块级元素
      </mot-button>
    </div>
    <h2 class="title">
      自定义颜色
    </h2>
    <div class="demo-button-row2">
      <mot-button custom-color="#7232dd">
        单色按钮
      </mot-button>
      <mot-button custom-color="#7232dd" plain>
        单色按钮
      </mot-button>
      <mot-button custom-color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变按钮
      </mot-button>
    </div>
  </div>
</template>

<style lang="scss">
.demo-button-row {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}

.demo-button-row2 {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  margin-bottom: 10px;
}

.mot-button {
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>
