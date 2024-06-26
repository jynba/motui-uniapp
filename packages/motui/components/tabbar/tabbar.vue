<script setup lang="ts">
import { type ComponentInternalInstance, computed, defineComponent, getCurrentInstance, onMounted, provide, reactive, ref, toRefs, watch } from 'vue'
import { PREFIX, UPDATE_MODEL_EVENT } from '../_constants'
import { useSelectorQuery } from '../_hooks'
import { getMainClass } from '../_utils'
import { tabbarEmits, tabbarProps } from './tabbar'

const props = defineProps(tabbarProps)
const emit = defineEmits(tabbarEmits)
const instance = getCurrentInstance() as ComponentInternalInstance
const { getSelectorNodeInfo } = useSelectorQuery(instance)

const { bottom, placeholder, safeAreaInsetBottom } = toRefs(props)
const mdValue = reactive({
  val: props.modelValue,
  children: [],
})
const height = ref()
const classes = computed(() => {
  return getMainClass(props, componentName, {
    'mot-tabbar-bottom': bottom.value,
    'mot-tabbar-safebottom': safeAreaInsetBottom.value,
  })
})
function changeIndex(index: number, active: number | string) {
  emit(UPDATE_MODEL_EVENT, active)
  parentData.modelValue = active

  emit('tabSwitch', parentData.children[index], active)
}
let parentData = reactive({
  children: mdValue.children,
  size: props.size,
  modelValue: mdValue.val,
  unactiveColor: props.unactiveColor,
  activeColor: props.activeColor,
  dot: props.dot,
  changeIndex,
})
provide('parent', parentData)
watch(
  () => props.modelValue,
  (value) => {
    parentData.modelValue = value
  },
)
onMounted(() => {
  if (bottom.value && placeholder.value) {
    setTimeout(async () => {
      height.value = (await getSelectorNodeInfo('.mot-tabbar')).height
    }, 500)
  }
})
</script>

<script lang="ts">
const componentName = `${PREFIX}-tabbar`

export default defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
})
</script>

<template>
  <div :class="{ 'mot-tabbar__placeholder': bottom && placeholder }" :style="{ height: `${height}px` }">
    <view
      :class="classes"
      :style="customStyle"
    >
      <slot />
    </view>
  </div>
</template>

<style lang="scss">
@import './index';
</style>
