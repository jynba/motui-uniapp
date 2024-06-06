<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { ToastInst } from 'motui-uniapp'

export default defineComponent({
  setup() {
    const toastRef = ref<ToastInst>()
    const tab1value = ref(0)
    const tab2value = ref(0)

    const methods = {
      back() {
        toastRef.value?.showToast.text('header头部， 点击返回')
      },
      title() {
        toastRef.value?.showToast.text('header头部， 点击title')
      },
      icon() {
        toastRef.value?.showToast.text('icon')
      },

      rightClick() {
        toastRef.value?.showToast.text('右侧点击事件')
      },
      changeTab(tab: any) {
        tab1value.value = tab.paneKey as number
      },
      changeTabList(tab: any) {
        tab2value.value = tab.paneKey as number
      },
    }

    return {
      tab1value,
      tab2value,
      toastRef,
      ...methods,
    }
  },
})
</script>

<template>
  <div class="demo full h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-toast
      ref="toastRef"
    />
    <mot-navbar title="Title" />

    <h2 class="title">
      自定义左侧插槽
    </h2>
    <mot-navbar title="Title" @on-click-back="back" @on-click-title="title">
      <template #left>
        <mot-icon name="left" />
      </template>
    </mot-navbar>
    <mot-navbar custom-class="mt-20px" title="Title" @on-click-back="back" @on-click-title="title">
      <template #left>
        <mot-icon name="left" /> Back
      </template>
    </mot-navbar>
    <h2 class="title">
      自定义右侧插槽
    </h2>
    <mot-navbar title="Title" @on-click-back="back" @on-click-title="title">
      <template #right>
        Share
      </template>
    </mot-navbar>
    <mot-navbar custom-class="mt-20px" title="Title" @on-click-back="back" @on-click-title="title">
      <template #right>
        <mot-icon name="share" />
      </template>
    </mot-navbar>
    <h2 class="title">
      自定义导航栏中间内容
    </h2>
    <mot-navbar desc="编辑" @on-click-back="back" @on-click-title="title" @on-click-right="rightClick">
      <template #content>
        <div class="h-full">
          <mot-tabs v-model="tab1value" @click="changeTab">
            <mot-tab-pane title="商品" />
            <mot-tab-pane title="店铺" />
          </mot-tabs>
        </div>
      </template>

      <template #right>
        <mot-icon name="more-x" class="right" width="16px" />
      </template>
    </mot-navbar>
    <mot-navbar
      custom-class="mt-20px"
      :left-show="false"
      title="购物车"
      :title-icon="true"
      desc="编辑"
      @on-click-back="back"
      @on-click-title="title"
      @on-click-icon="icon"
    >
      <template #titleIcon>
        <mot-icon name="cart2" width="16px" />
      </template>
    </mot-navbar>

    <h2 class="title">
      多tab切换导航
    </h2>
    <mot-navbar @on-click-back="back">
      <template #content>
        <div class="h-full">
          <mot-tabs v-model="tab2value" @click="changeTabList">
            <mot-tab-pane title="商品" />
            <mot-tab-pane title="评价" />
            <mot-tab-pane title="详情" />
            <mot-tab-pane title="推荐" />
          </mot-tabs>
        </div>
      </template>

      <template #right>
        <mot-icon name="horizontal-n" class="right" width="16px" />
      </template>
    </mot-navbar>
  </div>
</template>

<style lang="scss">
.mot-navbar {
  padding: 0 !important;
}
</style>

<route lang="json">
{
"style": {
    "navigationBarTitleText": "NavBar"
  }
}
</route>
