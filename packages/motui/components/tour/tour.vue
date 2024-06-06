<script setup lang="ts">
import type { ComponentInternalInstance } from 'vue'
import { computed, defineComponent, getCurrentInstance, onMounted, reactive, ref, watch } from 'vue'
import { CHANGE_EVENT, CLOSE_EVENT, PREFIX, UPDATE_MODEL_EVENT } from '../_constants'
import MotIcon from '../icon/icon.vue'
import MotPopover from '../popover/popover.vue'
import { useRect } from '../_hooks'
import { getMainClass, getRandomId } from '../_utils'
import { tourEmits, tourProps } from './tour'

const props = defineProps(tourProps)

const emit = defineEmits(tourEmits)
const instance = getCurrentInstance() as ComponentInternalInstance
const refRandomId = getRandomId()
const state = reactive({
  showTour: props.modelValue,
  active: 0,
})

const showPopup = ref([false])

const maskRect: any[] = []

const maskStyles = ref<any[]>([])

const classes = computed(() => {
  return getMainClass(props, componentName)
})

function maskStyle(index: number) {
  const { offset, maskWidth, maskHeight } = props

  if (!maskRect[index])
    return {}
  const { width, height, left, top } = maskRect[index]

  const center = [left + width / 2, top + height / 2] // 中心点 【横，纵】
  const w = Number(maskWidth || width)
  const h = Number(maskHeight || height)

  const styles = {
    width: `${w + +offset[1] * 2}px`,
    height: `${h + +offset[0] * 2}px`,
    top: `${center[1] - h / 2 - +offset[0]}px`,
    left: `${center[0] - w / 2 - +offset[1]}px`,
  }
  maskStyles.value[index] = styles
}

function changeStep(type: string) {
  const current = state.active
  let next = current

  if (type === 'next')
    next = current + 1
  else
    next = current - 1

  showPopup.value[current] = false

  setTimeout(() => {
    showPopup.value[next] = true
    state.active = next
  }, 300)

  emit(CHANGE_EVENT, state.active)
}

function getRootPosition() {
  props.steps.forEach(async (item, i) => {
    let rect
    // #ifdef H5
    rect = await useRect(item.target)
    // #endif
    // #ifndef H5
    // TODO  uniapp微信小程序无法实现，获取不到组件外节点的信息
    rect = await useRect(item.target, instance.root)
    if (rect.left! < 0)
      rect.left = -rect.left!

    if (rect.top! < 0)
      rect.top = -rect.top!
    if (rect.right! < 0)
      rect.right = -rect.right!
    if (rect.bottom! < 0)
      rect.bottom = -rect.bottom!

    // #endif

    maskRect[i] = rect
    maskStyle(i)
  })
}

function close() {
  state.showTour = false
  showPopup.value[state.active] = false
  emit(CLOSE_EVENT, state.active)
  emit(UPDATE_MODEL_EVENT, false)
}

function handleClickMask() {
  props.closeOnClickOverlay && close()
}

onMounted(() => {
  setTimeout(() => {
    getRootPosition()
  }, 500)
})

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      state.active = 0
      getRootPosition()
    }
    state.showTour = val
    showPopup.value[state.active] = val
  },
)
</script>

<script lang="ts">
const componentName = `${PREFIX}-tour`

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
    <view v-if="state.showTour" class="mot-tour-masked" @click="handleClickMask" />

    <view v-for="(step, i) in steps" :key="i" style="height: 0;">
      <view
        v-if="state.showTour"
        :id="`mot-tour-popid${i}${refRandomId}`"
        class="mot-tour-mask"
        :class="[mask ? (showPopup[i] ? '' : 'mot-tour-mask-hidden') : 'mot-tour-mask-none']"
        :style="maskStyles[i]"
      />
      <MotPopover
        v-if="state.showTour"
        v-model:visible="showPopup[i]"
        :location="step.location || location"
        :target-id="`mot-tour-popid${i}${refRandomId}`"
        :bg-color="bgColor"
        :theme="theme"
        :close-on-click-outside="false"
        :offset="step.popoverOffset || [0, 12]"
        :arrow-offset="step.arrowOffset || 0"
        :duration="200"
      >
        <template #content>
          <slot>
            <view v-if="type === 'step'" class="mot-tour-content">
              <view v-if="showTitleBar" class="mot-tour-content-top">
                <view @click="close">
                  <MotIcon name="close" class="mot-tour-content-top-close" size="10px" />
                </view>
              </view>
              <view class="mot-tour-content-inner">
                {{ step.content }}
              </view>
              <view class="mot-tour-content-bottom">
                <view class="mot-tour-content-bottom-init">
                  {{ state.active + 1 }}/{{ steps.length }}
                </view>
                <view class="mot-tour-content-bottom-operate">
                  <slot name="prev-step">
                    <view
                      v-if="state.active !== 0 && showPrevStep"
                      class="mot-tour-content-bottom-operate-btn"
                      @click="changeStep('prev')"
                    >
                      {{ prevStepTxt }}
                    </view>
                  </slot>
                  <view
                    v-if="steps.length - 1 === state.active"
                    class="mot-tour-content-bottom-operate-btn active"
                    @click="close"
                  >
                    {{ completeTxt }}
                  </view>

                  <slot name="next-step">
                    <view
                      v-if="steps.length - 1 !== state.active"
                      class="mot-tour-content-bottom-operate-btn active"
                      @click="changeStep('next')"
                    >
                      {{ nextStepTxt }}
                    </view>
                  </slot>
                </view>
              </view>
            </view>

            <view v-if="type === 'tile'" class="mot-tour-content mot-tour-content-tile">
              <view class="mot-tour-content-inner">
                {{ step.content }}
              </view>
            </view>
          </slot>
        </template>
      </MotPopover>
    </view>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
