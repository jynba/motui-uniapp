<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const tabValue = ref(0)
    return {
      tabValue,
    }
  },
}
</script>

<template>
  <div class="demo">
    <h2 class="title">
      基础用法
    </h2>
    <div class="show">
      <mot-empty description="无数据" />
    </div>

    <h2 class="title">
      图片类型，内置3个
    </h2>
    <div class="show">
      <mot-tabs v-model="tabValue">
        <mot-tab-pane title="无内容">
          <mot-empty image="empty" description="无内容" />
        </mot-tab-pane>
        <mot-tab-pane title="加载失败/错误">
          <mot-empty image="error" description="加载失败/错误" />
        </mot-tab-pane>
        <mot-tab-pane title="无网络">
          <mot-empty image="network" description="无网络" />
        </mot-tab-pane>
      </mot-tabs>
    </div>

    <h2 class="title">
      自定义图片
    </h2>
    <div class="show">
      <mot-empty description="无优惠券">
        <template #image>
          <image src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" />
        </template>
      </mot-empty>
    </div>

    <h2 class="title">
      底部内容
    </h2>
    <div class="show">
      <mot-empty image="error" description="加载失败">
        <div style="margin-top: 10px">
          <mot-button icon="refresh" type="primary">
            重试
          </mot-button>
        </div>
      </mot-empty>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Empty"
  }
}
</route>
