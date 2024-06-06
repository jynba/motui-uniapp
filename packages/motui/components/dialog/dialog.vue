<script setup lang="ts">
import { defineComponent } from 'vue'
import MotPopup from '../popup/popup.vue'
import MotButton from '../button/button.vue'
import { PREFIX } from '../_constants'
import { useTranslate } from '../../locale'
import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './use-dialog'

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const {
  contentStyle,
  showPopup,
  onClickOverlay,
  onCancel,
  onOk,
  classes,
  closed,
  dialogStatus,
  showDialog,
} = useDialog(props, emit)

defineExpose({ showDialog, onOk, onCancel })
</script>

<script lang="ts">
const componentName = `${PREFIX}-dialog`
export default defineComponent({
  name: componentName,
  inheritAttrs: false,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
})
const { translate } = useTranslate(componentName)
</script>

<template>
  <MotPopup
    v-model:visible="showPopup"
    :close-on-click-overlay="false"
    :lock-scroll="lockScroll"
    :pop-class="popClass"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :custom-style="popStyle"
    :z-index="zIndex"
    round
    :transition="transition"
    @click-overlay="onClickOverlay"
    @click-close-icon="closed"
  >
    <view :class="classes" :style="customStyle">
      <view v-if="$slots.header || dialogStatus.title" class="mot-dialog__header">
        <slot v-if="$slots.header" name="header" />
        <template v-else>
          {{ dialogStatus.title || props.title }}
        </template>
      </view>

      <view class="mot-dialog__content" :style="contentStyle">
        <slot v-if="$slots.default" name="default" />
        <rich-text v-else-if="typeof content === 'string'" :nodes="dialogStatus.content || props.content" />
        <!-- <component :is="content" v-else /> -->
      </view>

      <view v-if="!dialogStatus.noFooter" class="mot-dialog__footer" :class="{ [footerDirection]: dialogStatus.footerDirection }">
        <slot v-if="$slots.footer" name="footer" />
        <template v-else>
          <MotButton
            v-if="!dialogStatus.noCancelBtn"
            size="small"
            plain
            type="primary"
            custom-class="mot-dialog__footer-cancel"
            @click="onCancel"
          >
            {{ dialogStatus.cancelText || props.cancelText || translate('cancel') }}
          </MotButton>
          <MotButton v-if="!dialogStatus.noOkBtn" size="small" type="primary" custom-class="mot-dialog__footer-ok" @click="onOk">
            {{ dialogStatus.okText || props.okText || translate('confirm') }}
          </MotButton>
        </template>
      </view>
    </view>
  </MotPopup>
</template>

<style lang="scss">
@import './index';
</style>