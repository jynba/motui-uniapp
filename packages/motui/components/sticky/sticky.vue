<script setup lang="ts">
import { computed, defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
import { PREFIX } from '../_constants'
import { getMainClass } from '../_utils'
import { stickyProps } from './sticky'

const props = defineProps(stickyProps)
const $emit = defineEmits<{
  (e: 'changeShow', ev: boolean): void
}>()
const componentName = `${PREFIX}-sticky`
const cls = ref([componentName, getMainClass(props, componentName), 'hidden'])
const offsetTopValue = computed(() => +props.offsetTop + +props.customNavHeight + props.unit)

onMounted(() => {
  if (props.disabled)
    return

  const stickyShow = computed(() => props.stickyShow)
  if (stickyShow.value)
    observeContent()
  else
    cls.value = dealShowCss(['show'])
})

async function observeContent() {
  // 第一次的时候默认隐藏  initialRatio 存在不兼容的情况
  let firstLoad = true

  const instance = getCurrentInstance()?.parent
  if (!instance)
    return

  const contentObserver = uni.createIntersectionObserver(instance, {
    // 检测的区间范围
    thresholds: [0.95, 0.98, 1],
  })
  // 指定页面显示区域作为参照区域之一
  contentObserver.relativeToViewport({
    top: -props.offsetTop,
  })

  contentObserver.observe(`#${props.containerId}`, (res) => {
    const { top } = res.boundingClientRect
    if (firstLoad) {
      firstLoad = false
      return
    }
    if (top < +props.offsetTop) {
      cls.value = [...cls.value, ...dealShowCss(['show', 'opactiy-transition'])]
      $emit('changeShow', true)
    }
    else {
      cls.value = [...cls.value, ...dealShowCss(['hidden', 'opactiy-transition'])]
      $emit('changeShow', false)
    }
  })
}

function dealShowCss(arg: string[]) {
  return [componentName, ...arg]
}
</script>

<script lang="ts">
export default defineComponent({
  name: `${PREFIX}-sticky`,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
})
</script>

<template>
  <view :class="cls" :style="customStyle">
    <slot />
  </view>
</template>

<style lang="scss">
@import './index';

.mot-sticky {
  position: sticky;
  position: -webkit-sticky;
  z-index: v-bind(zIndex);
  top: v-bind(offsetTopValue);
  min-height: 1px;
}
</style>
