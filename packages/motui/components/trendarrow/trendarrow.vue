<script setup lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { getMainClass, myFixed } from '../_utils'
import { PREFIX } from '../_constants'
import MotIcon from '../icon/icon.vue'
import { trendarrowProps } from './trendarrow'

const props = defineProps(trendarrowProps)

const state = reactive({
  rateTrend: props.rate > 0,
})
const classes = computed(() => {
  return getMainClass(props, componentName)
})
const calcRate = computed(() => {
  const { rate, digits, showSign, showZero } = props
  /* eslint-disable vue/no-side-effects-in-computed-properties */
  state.rateTrend = rate > 0
  const absRate = Math.abs(rate)
  if (!showZero && rate === 0)
    return '--'

  const resultRate = `${showSign && rate !== 0 ? (state.rateTrend ? '+' : '-') : ''}${myFixed(
        Number(absRate),
        digits,
      )}%`

  return resultRate
})
const calcStyle = computed(() => {
  const { dropColor, riseColor, syncTextColor, textColor, rate } = props
  const style = {
    color: rate === 0 ? textColor : syncTextColor ? (state.rateTrend ? riseColor : dropColor) : textColor,
  }
  return style
})
</script>

<script lang="ts">
const componentName = `${PREFIX}-trend-arrow`

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
    <span v-if="!arrowLeft" class="mot-trend-arrow-icon-before mot-trend-arrow-rate" :style="calcStyle">{{
      calcRate
    }}</span>
    <slot v-if="Number(rate) !== 0 && state.rateTrend" name="upIcon">
      <MotIcon name="triangle-up" :custom-color="riseColor" />
    </slot>
    <slot v-if="Number(rate) !== 0 && !state.rateTrend" name="downIcon">
      <MotIcon name="triangle-down" :custom-color="dropColor" />
    </slot>
    <span v-if="arrowLeft" class="mot-trend-arrow-icon-after mot-trend-arrow-rate" :style="calcStyle">{{
      calcRate
    }}</span>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
