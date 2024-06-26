<script setup lang="ts">
import { computed, defineComponent, useSlots } from 'vue'
import MotPopup from '../popup/popup.vue'
import MotIcon from '../icon/icon.vue'
import { CANCEL_EVENT, CHOOSE_EVENT, CLOSE_EVENT, PREFIX, UPDATE_VISIBLE_EVENT } from '../_constants'
import { getMainClass } from '../_utils'
import { type ActionSheetOption, actionsheetEmits, actionsheetProps } from './actionsheet'

const props = defineProps(actionsheetProps)
const emit = defineEmits(actionsheetEmits)

const slotDefault = !!useSlots().default
const classes = computed(() => {
  return getMainClass(props, componentName)
})

function isHighlight(item: ActionSheetOption) {
  return props.chooseTagValue && props.chooseTagValue === item[props.optionTag] ? props.customColor : ''
}

function cancelActionSheet() {
  emit(CANCEL_EVENT)
  emit(UPDATE_VISIBLE_EVENT, false)
}

function chooseItem(item: ActionSheetOption, index: number) {
  if (!item.disable && !item.loading) {
    emit(CHOOSE_EVENT, item, index)
    emit(UPDATE_VISIBLE_EVENT, false)
  }
}

function close() {
  if (props.closeAbled) {
    emit(CLOSE_EVENT)
    emit(UPDATE_VISIBLE_EVENT, false)
  }
}
</script>

<script lang="ts">
const componentName = `${PREFIX}-action-sheet`

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
  <MotPopup v-bind="props" :visible="visible" position="bottom" round :close-on-click-overlay="closeAbled" @click-overlay="close">
    <view :class="classes" :style="customStyle">
      <view v-if="title" class="mot-action-sheet__title">
        {{ title }}
      </view>
      <slot />
      <view v-if="!slotDefault">
        <view v-if="description" class="mot-action-sheet__item mot-action-sheet__desc">
          {{ description }}
        </view>
        <view v-if="menuItems.length" class="mot-action-sheet__menu">
          <view
            v-for="(item, index) of menuItems"
            :key="index"
            class="mot-action-sheet__item"
            :class="{
              'mot-action-sheet__item--disabled': item.disable,
              'mot-action-sheet__item--loading': item.loading,
            }"
            :style="{ color: isHighlight(item) || item.color }"
            @click="chooseItem(item, index)"
          >
            <MotIcon v-if="item.loading" name="loading" />
            <view v-else>
              {{ item[optionTag] }}
            </view>
            <view class="mot-action-sheet__subdesc">
              {{ item[optionSubTag] }}
            </view>
          </view>
        </view>
        <view v-if="cancelTxt" class="mot-action-sheet__cancel" @click="cancelActionSheet">
          {{ cancelTxt }}
        </view>
      </view>
    </view>
  </MotPopup>
</template>

<style lang="scss">
@import './index';
</style>
