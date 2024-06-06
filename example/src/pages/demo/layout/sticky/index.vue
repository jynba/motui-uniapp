<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({

  setup() {
    const container = ref(null)
    return {
      container,
    }
  },
})
</script>

<template>
  <div class=" sticky-demo">
    <h2 class="title">
      基础用法
    </h2>
    <view class="container">
      <mot-cell title="滚动页面,即可看到下方的按钮会吸顶" />
    </view>
    <mot-sticky>
      <mot-button type="primary" style="margin-left: 50px">
        吸顶按钮
      </mot-button>
    </mot-sticky>
    <h2 class="title">
      吸顶距离
    </h2>
    <mot-sticky offset-top="200">
      <mot-button type="primary" style="margin-left: 50px">
        吸顶距离 120px
      </mot-button>
    </mot-sticky>
    <view style="height: 1500px" />
    <mot-divider>已到底部</mot-divider>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Sticky"
  }
}
</route>

<style lang="scss" scoped>
.mot-theme-dark {
  .sticky-demo {
    background: black !important;
  }
}

.sticky-demo {
  padding: 17px 17px 17px;
  background: #f7f8fa;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .title {
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: normal;
    color: rgb(144 156 164 / 100%);
  }

}
</style>
