<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive<{ count: any[] }>({
      count: Array.from({ length: 100 }).fill(0),
    })

    const handleScroll = () => {
      const arr = Array.from({ length: 100 }).fill(0)
      const len = state.count.length
      state.count = state.count.concat(arr.map((item, index: number) => len + index + 1))
    }

    onMounted(() => {
      state.count = state.count.map((item: number, index: number) => index + 1)
    })

    return { ...toRefs(state), handleScroll }
  },
})
</script>

<template>
  <div class="demo list-demo">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell>
      <mot-list :height="50" :list-data="count" @scroll-bottom="handleScroll">
        <template #default="{ item }">
          <view class="ilist-item">
            {{ item }}
          </view>
        </template>
      </mot-list>
    </mot-cell>
  </div>
</template>

<style lang="scss">
.list-demo {
  .ilist-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "List"
  }
}
</route>
