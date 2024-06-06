<script lang="ts" setup>
import { ref } from 'vue'
import type { SwipeInts } from 'motui-uniapp'

const swipe = ref<SwipeInts | null>(null)

const checked = ref<boolean>(false)

const number = ref<number>(0)

function onSwitchChange(value: boolean) {
  if (value)
    swipe.value?.open('left')
  else
    swipe.value?.close()
}

function onOpen(obj: any) {
  checked.value = true

  uni.showToast({ title: JSON.stringify(obj) })
}

function onClose(obj: any) {
  checked.value = false

  uni.showToast({ title: JSON.stringify(obj) })
}
</script>

<template>
  <div class="demo full h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-swipe>
      <mot-cell round-radius="0" title="左滑删除" />
      <template #right>
        <mot-button shape="square" custom-style="height: 100%" type="danger">
          删除
        </mot-button>
      </template>
    </mot-swipe>
    <h2 class="title">
      禁止滑动
    </h2>
    <mot-swipe disabled>
      <mot-cell round-radius="0" title="禁止滑动" />
      <template #right>
        <mot-button shape="square" custom-style="height: 100%" type="danger">
          删除
        </mot-button>
      </template>
    </mot-swipe>
    <h2 class="title">
      左右滑动
    </h2>
    <mot-swipe>
      <template #left>
        <mot-button shape="square" custom-style="height: 100%" type="success">
          选择
        </mot-button>
      </template>
      <mot-cell round-radius="0" title="左滑右滑都可以哦" />
      <template #right>
        <view style="height: 100%">
          <mot-button shape="square" custom-style="height: 100%" type="danger">
            删除
          </mot-button>
          <mot-button shape="square" custom-style="height: 100%" type="info">
            收藏
          </mot-button>
        </view>
      </template>
    </mot-swipe>
    <h2 class="title">
      异步控制
    </h2>
    <mot-swipe ref="swipe" :close-on-click="['right']" @open="onOpen" @close="onClose">
      <mot-cell title="异步打开关闭">
        <template #link>
          <mot-switch v-model="checked" active-text="开" inactive-text="关" @change="onSwitchChange" />
        </template>
      </mot-cell>
      <template #right>
        <mot-button shape="square" custom-style="height: 100%" type="danger">
          删除
        </mot-button>
      </template>
    </mot-swipe>
    <h2 class="title">
      自定义
    </h2>
    <mot-swipe>
      <template #left>
        <mot-button shape="square" custom-style="height: 100%" type="success">
          选择
        </mot-button>
      </template>
      <mot-cell title="商品描述">
        <template #link>
          <mot-input-number v-model="number" />
        </template>
      </mot-cell>
      <template #right>
        <view style="height: 100%">
          <mot-button shape="square" custom-style="height: 100%" type="danger">
            删除
          </mot-button>
          <mot-button shape="square" custom-style="height: 100%" type="info">
            收藏
          </mot-button>
        </view>
      </template>
    </mot-swipe>
    <h2 class="title">
      使用 SwipeGroup 控制 Swipe 之间互斥
    </h2>
    <mot-swipe-group lock>
      <mot-swipe name="11">
        <mot-cell round-radius="0" title="左滑删除" />
        <template #right>
          <mot-button shape="square" style="height: 100%" type="danger">
            删除
          </mot-button>
        </template>
      </mot-swipe>
      <mot-swipe name="22">
        <mot-cell round-radius="0" title="左滑删除" />
        <template #right>
          <mot-button shape="square" style="height: 100%" type="danger">
            删除
          </mot-button>
        </template>
      </mot-swipe>
      <div>
        <mot-swipe name="33">
          <mot-cell round-radius="0" title="左滑删除" />
          <template #right>
            <mot-button shape="square" style="height: 100%" type="danger">
              删除
            </mot-button>
          </template>
        </mot-swipe>
      </div>
    </mot-swipe-group>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Swipe"
  }
}
</route>

<style lang="scss" scoped></style>
