<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {},
  setup() {
    return { }
  },
})
</script>

<template>
  <div class="trendarrow-demo demo h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell>
      <mot-trend-arrow :sync-text-color="false" :rate="1" />
      <mot-trend-arrow :sync-text-color="false" :rate="-0.2535" />
    </mot-cell>
    <view class="title">
      改变文字颜色
    </view>
    <mot-cell>
      <mot-trend-arrow :rate="10.2365" />
      <mot-trend-arrow :rate="-0.2535" />
    </mot-cell>
    <view class="title">
      指定小数位
    </view>
    <mot-cell>
      <mot-trend-arrow :digits="3" :rate="10.2365" />
      <mot-trend-arrow :digits="1" :rate="-0.2535" />
    </mot-cell>
    <view class="title">
      箭头在前面
    </view>
    <mot-cell>
      <mot-trend-arrow arrow-left :rate="0.2535" />
      <mot-trend-arrow arrow-left :rate="-0.2535" />
    </mot-cell>
    <view class="title">
      显示正负号
    </view>
    <mot-cell>
      <mot-trend-arrow show-sign :rate="1" />
      <mot-trend-arrow show-sign :rate="-0.2535" />
    </mot-cell>
    <view class="title">
      是否展示0
    </view>
    <mot-cell>
      <mot-trend-arrow show-sign :rate="0" />
      <mot-trend-arrow show-sign show-zero :rate="0" />
    </mot-cell>
    <view class="title">
      自定义颜色
    </view>
    <mot-cell>
      <mot-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)" />
      <mot-trend-arrow :rate="-0.2535" show-sign drop-color="rgb(255, 190, 13)" />
      <mot-trend-arrow
        :sync-text-color="false"
        show-sign
        :rate="-0.2535"
        text-color="rgb(39,197,48)"
        drop-color="rgb(255, 190, 13)"
      />
    </mot-cell>
    <view class="title">
      自定义图标
    </view>
    <mot-cell>
      <mot-trend-arrow :rate="10.2365">
        <template #upIcon>
          <mot-icon name="success" custom-color="blue" size="18px" />
        </template>
      </mot-trend-arrow>
      <mot-trend-arrow :rate="-10.2365">
        <template #downIcon>
          <mot-icon name="failure" custom-color="red" />
        </template>
      </mot-trend-arrow>
    </mot-cell>
  </div>
</template>

<style lang="scss">
.trendarrow-demo {
  .title {
    font-size: 14px;
    color: rgb(144, 156, 164);
    padding: 0 10px;
    font-weight: normal;
  }
  .mot-trend-arrow {
    margin-right: 10px;
  }
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "TrendArrow"
  }
}
</route>
