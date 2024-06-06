<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const overlayStyle = ref({
  backgroundColor: 'rgba(0, 0, 0, .2)',
})
</script>

<template>
  <div class="demo h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell>
      <mot-button type="primary" @click="show = true">
        显示遮罩层
      </mot-button>
      <mot-overlay v-model:visible="show" />
    </mot-cell>
    <h2 class="title">
      遮罩样式
    </h2>
    <mot-cell>
      <mot-button type="primary" @click="show3 = true">
        显示遮罩层
      </mot-button>
      <mot-overlay v-model:visible="show3" :z-index="2000" :overlay-style="overlayStyle" />
    </mot-cell>
    <h2 class="title">
      设置动画时间
    </h2>
    <mot-cell>
      <mot-button type="primary" @click="show4 = true">
        设置动画时间
      </mot-button>
      <mot-overlay v-model:visible="show4" :duration="2500" />
    </mot-cell>
    <h2 class="title">
      锁定背景滚动
    </h2>
    <mot-cell>
      <mot-button type="primary" @click="show5 = true">
        锁定背景滚动
      </mot-button>
      <mot-overlay v-model:visible="show5" lock-scroll />
    </mot-cell>
    <h2 class="title">
      嵌套内容
    </h2>
    <mot-cell>
      <mot-button type="success" @click="show2 = true">
        嵌套内容
      </mot-button>
      <mot-overlay v-model:visible="show2" :z-index="2000">
        <div class="wrapper">
          <div class="content t-bg-2">
            这里是正文
          </div>
        </div>
      </mot-overlay>
    </mot-cell>
    <h2 class="title">
      点击遮罩不关闭
    </h2>
    <mot-cell>
      <mot-button type="primary" @click="show6 = true">
        点击遮罩不关闭
      </mot-button>
      <mot-overlay v-model:visible="show6" lock-scroll :close-on-click-overlay="false">
        <div class="wrapper">
          <div class="content t-bg-2" @click.stop="show6 = false">
            close
          </div>
        </div>
      </mot-overlay>
    </mot-cell>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Overlay"
  }
}
</route>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    color: red;
    border-radius: 8px;
  }
}
</style>
