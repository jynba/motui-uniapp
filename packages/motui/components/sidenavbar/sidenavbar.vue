<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { PREFIX } from '../_constants'
import { useProvide } from '../_hooks'
import { getMainClass } from '../_utils'
import { SIDEN_NAVBAR_KEY, sidenavbarProps } from './sidenavbar'

const props = defineProps(sidenavbarProps)

const componentName = `${PREFIX}-side-navbar`

useProvide(SIDEN_NAVBAR_KEY, `${componentName}-item`)({ props })

const classes = computed(() => {
  return getMainClass(props, componentName)
})
</script>

<script lang="ts">
export default defineComponent({
  name: `${PREFIX}-side-navbar`,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
})
</script>

<template>
  <!-- TODO 侧标导航样式有问题 -->
  <view :class="classes" :style="customStyle">
    <view class="mot-side-navbar__content">
      <view class="mot-side-navbar__content__list">
        <slot />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
