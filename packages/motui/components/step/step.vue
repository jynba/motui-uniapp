<script setup lang="ts">
import type { ComponentInternalInstance } from 'vue'
import { computed, defineComponent, getCurrentInstance, inject, reactive } from 'vue'
import { PREFIX } from '../_constants'
import { getMainClass } from '../_utils'
import { stepEmits, stepProps } from './step'

const props = defineProps(stepProps)
defineEmits(stepEmits)
const instance = getCurrentInstance() as ComponentInternalInstance
const parent: any = inject('parent')
parent.relation(instance)

const state = reactive({
  dot: parent.props.progressDot,
})

const index = computed(() => parent.state.children.indexOf(instance) + 1)
function getCurrentStatus() {
  const activeIndex = index.value
  if (activeIndex < +parent.props.current)
    return 'finish'
  return activeIndex === +parent.props.current ? 'process' : 'wait'
}

const status = computed(() => {
  return getCurrentStatus()
})

const classes = computed(() => {
  return getMainClass(props, componentName, {
    [`${componentName}-${status.value}`]: true,
  })
})

function handleClickStep() {
  parent.onEmit(index.value)
}
</script>

<script lang="ts">
const componentName = `${PREFIX}-step`

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
  <view :class="classes" :style="customStyle" @click="handleClickStep">
    <view class="mot-step-head">
      <view class="mot-step-line" />
      <view class="mot-step-icon" :class="[!state.dot ? 'is-icon' : '']">
        <view class="mot-step-icon-inner">
          <slot name="icon">
            <template v-if="state.dot" />
            <template v-else>
              <view class="mot-step-inner">
                {{ index }}
              </view>
            </template>
          </slot>
        </view>
      </view>
    </view>
    <view class="mot-step-main">
      <view class="mot-step-title">
        <view v-if="!$slots.title">
          {{ title }}
        </view>
        <slot name="title" />
      </view>
      <view v-if="content || $slots.content" class="mot-step-content">
        <rich-text v-if="!$slots.content" :nodes="content" />
        <slot name="content" />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
