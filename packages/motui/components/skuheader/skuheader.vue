<script setup lang="ts">
import { defineComponent, useSlots } from 'vue'
import { useTranslate } from '../../locale'
import { isH5 } from '../_utils'
import { PREFIX } from '../_constants'
import MotPrice from '../price/price.vue'

defineProps({
  /**
   * @description 商品
   */
  goods: {
    type: Object,
    default: () => {},
  },
})

const slots = useSlots()
const getSlots = (name: string) => slots[name]
</script>

<script  lang="ts">
const componentName = `${PREFIX}-sku-header`
const { translate } = useTranslate(componentName)
export default defineComponent ({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
})
</script>

<template>
  <view class="mot-sku-header">
    <image v-if="!isH5" class="mot-sku-header-img" :src="goods.imagePath" />
    <image v-else class="mot-sku-header-img" :src="goods.imagePath" />
    <view class="mot-sku-header-right">
      <template v-if="getSlots('skuHeaderPrice')">
        <slot name="skuHeaderPrice" />
      </template>
      <MotPrice v-else :price="goods.price" :need-symbol="true" :thousands="false" />

      <template v-if="getSlots('skuHeaderExtra')">
        <slot name="skuHeaderExtra" />
      </template>
      <view v-if="goods.skuId && !getSlots('skuHeaderExtra')" class="mot-sku-header-right-extra">
        {{ translate('skuId')
        }}&nbsp;:&nbsp;{{ goods.skuId }}
      </view>
    </view>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
