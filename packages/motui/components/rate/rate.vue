<script setup lang="ts">
import { computed, defineComponent, ref, toRef } from 'vue'
import { getMainClass, getRandomId, pxCheck } from '../_utils'
import { CHANGE_EVENT, PREFIX, UPDATE_MODEL_EVENT } from '../_constants'
import MotIcon from '../icon/icon.vue'
import { useFormDisabled } from '../form/form'
import { rateEmits, rateProps } from './rate'

const props = defineProps(rateProps)
const emit = defineEmits(rateEmits)
const disabled = useFormDisabled(toRef(props, 'disabled'))

const refRandomId = getRandomId()
const rateRefs = ref<HTMLElement[]>([])
const classes = computed(() => {
  return getMainClass(props, componentName)
})
function updateVal(value: number) {
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
}
function onClick(e: number, index: number) {
  if (disabled.value || props.readonly)
    return
  let value = 0
  if (index === 1 && props.modelValue === index) {
    //
  }
  else {
    value = index
    if (props.allowHalf && e === 2)
      value -= 0.5
  }
  updateVal(value)
}
</script>

<script lang="ts">
const componentName = `${PREFIX}-rate`

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
  <view :class="classes" :style="customStyle">
    <view
      v-for="n in Number(count)" :id="`rateRefs-${refRandomId}${n}`" :key="n" ref="rateRefs" class="mot-rate-item"
      :style="n < Number(count) ? { marginRight: pxCheck(spacing!) } : {}"
    >
      <view class="mot-rate-item__icon--full" @click="onClick(1, n)">
        <MotIcon :size="props.size" :custom-class="`mot-rate-item__icon ${disabled || n > +modelValue ? 'mot-rate-item__icon--disabled' : ''}`" :name="customIcon" :custom-color="n <= +modelValue ? activeColor : voidColor" />
      </view>
      <view v-if="allowHalf && Number(modelValue) + 1 > n" class="mot-rate-item__icon--half" @click="onClick(2, n)">
        <MotIcon :size="props.size" custom-class="mot-rate-item__icon" :name="customIcon" :custom-color="n <= Number(modelValue) + 1 ? activeColor : voidColor" @click="onClick(2, n)" />
      </view>
      <view v-else-if="allowHalf && Number(modelValue) + 1 < n" class="mot-rate-item__icon--half" @click="onClick(2, n)">
        <MotIcon :size="props.size" :name="customIcon" custom-class="mot-rate-item__icon mot-rate-item__icon--disabled" :custom-color="voidColor" />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
