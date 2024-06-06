<script setup lang="ts">
import { defineComponent } from 'vue'
import MotTransition from '../transition/transition.vue'
import MotOverlay from '../overlay/overlay.vue'
import MotIcon from '../icon/icon.vue'
import { PREFIX } from '../_constants'
import { popupEmits, popupProps } from './popup'
import { usePopup } from './use-popup'

const props = defineProps(popupProps)
const emit = defineEmits(popupEmits)
const { onClickOverlay, showSlot, onClickCloseIcon, closed, transitionName, onOpened, onClosed, classes, popStyle, onClick } = usePopup(props, emit)
</script>

<script lang="ts">
const componentName = `${PREFIX}-popup`
export default defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    // #ifndef H5
    styleIsolation: 'shared',
    // #endif
  },
})
</script>

<template>
  <MotOverlay
    v-if="overlay"
    :visible="visible"
    :close-on-click-overlay="closeOnClickOverlay"
    :z-index="zIndex"
    :lock-scroll="lockScroll"
    :duration="duration"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :destroy-on-close="destroyOnClose"
    v-bind="$attrs"
    @click="onClickOverlay"
  />
  <MotTransition
    :name="transitionName"
    :custom-class="classes"
    :show="visible"
    :destroy-on-close="destroyOnClose"
    :custom-style="popStyle"
    :duration="Number(duration)"
    @after-enter="onOpened"
    @after-leave="onClosed"
    @click="onClick"
  >
    <slot v-if="showSlot" />
    <view
      v-if="closed"
      class="mot-popup__close-icon"
      :class="`mot-popup__close-icon--${closeIconPosition}`"
      @click="(onClickCloseIcon as any)"
    >
      <slot name="closeIcon">
        <MotIcon name="close" height="12px" />
      </slot>
    </view>
  </MotTransition>
</template>

<style lang="scss">
@import './index';
</style>
