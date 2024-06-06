<script lang="ts">
import { reactive, ref, toRefs } from 'vue'
import { isH5 } from '@uni-helper/uni-env'

const activeColor = ref('red')
export default {
  setup() {
    const data = reactive({
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked6: true,
      checked7: true,
      checked8: true,
    })
    const checkedAsync = ref(true)
    const loadingAsync = ref(false)

    const change = (value: boolean) => {
      uni.showToast({ title: `value：${value}` })
    }
    const changeAsync = (value: boolean) => {
      uni.showModal({
        title: '提示',
        content: '是否切换开关？',
        success: ({ confirm }) => {
          if (confirm)
            checkedAsync.value = value
        },
      })
    }

    return {
      ...toRefs(data),
      checkedAsync,
      loadingAsync,
      change,
      changeAsync,
      isH5,
      activeColor,
    }
  },
}
</script>

<template>
  <div class="demo h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell>
      <mot-switch v-model="checked1" />
    </mot-cell>

    <h2 class="title">
      禁用状态
    </h2>
    <mot-cell>
      <mot-switch v-model="checked2" disable />
    </mot-cell>

    <h2 class="title">
      加载状态
    </h2>
    <mot-cell>
      <mot-switch v-model="checked3" :active-color="activeColor" loading />
    </mot-cell>

    <h2 class="title">
      change事件
    </h2>
    <mot-cell>
      <mot-switch v-model="checked4" @change="change" />
    </mot-cell>

    <h2 class="title">
      异步控制
    </h2>
    <mot-cell>
      <mot-switch :model-value="checkedAsync" @update:model-value="changeAsync" />
    </mot-cell>

    <h2 class="title">
      自定义颜色
    </h2>
    <mot-cell>
      <mot-switch v-model="checked6" :active-color="activeColor" />
    </mot-cell>

    <h2 class="title">
      支持文字
    </h2>
    <mot-cell>
      <mot-switch v-model="checked7" active-text="开" inactive-text="关" />
    </mot-cell>

    <h2 class="title">
      自定义加载图标
    </h2>
    <mot-cell>
      <mot-switch v-model="checked8" loading>
        <template #icon>
          <mot-icon name="loading" color="blue" />
        </template>
      </mot-switch>
    </mot-cell>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Switch"
  }
}
</route>
