<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { PREFIX } from '../_constants'
import MotPrice from '../price/price.vue'
import MotTag from '../tag/tag.vue'
import { getMainClass } from '../_utils'
import { cardProps } from './card'

const props = defineProps(cardProps)
const classes = computed(() => {
  return getMainClass(props, componentName)
})
</script>

<script lang="ts">
const componentName = `${PREFIX}-card`

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
  <div :class="classes" :style="customStyle">
    <div class="mot-card__left">
      <image :src="imgUrl" alt="" />
    </div>
    <div class="mot-card__right">
      <div class="mot-card__right__title">
        {{ title }}
      </div>
      <slot name="prolist" />
      <div v-if="isNeedPrice" class="mot-card__right__price">
        <slot name="price">
          <MotPrice v-if="price" :price="price" />
        </slot>
        <slot name="origin">
          <view class="mot-card__right__price__origin">
            <MotPrice v-if="vipPrice" :price="vipPrice" />
          </view>
        </slot>
      </div>
      <div class="mot-card__right__other">
        <slot name="shopTag">
          <MotTag type="danger">
            {{ shopDesc }}
          </MotTag>
          <MotTag plain>
            {{ delivery }}
          </MotTag>
        </slot>
      </div>
      <div class="mot-card__right__shop">
        <slot name="shopName">
          <div class="mot-card__right__shop__name">
            {{ shopName }}
          </div>
        </slot>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './index';
</style>
[mask ?!showPopup[i] !? !'' !: !'mot-tour-mask-hidden' : 'mot-tour-mask-none']{ 'mot-hidden': !scrollY !> !2 !&& !isSticky }[mask ?!showPopup[i] !? !'' !: !'mot-tour-mask-hidden' : 'mot-tour-mask-none']