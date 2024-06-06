<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { PREFIX } from '../_constants'
import { getMainClass } from '../_utils'
import { categorypaneEmits, categorypaneProps } from './categorypane'

const props = defineProps(categorypaneProps)
const emit = defineEmits(categorypaneEmits)
const classes = computed(() => {
  return getMainClass(props, componentName)
})
function onChange(sku: string) {
  emit('onChange', sku)
}
</script>

<script lang="ts">
const componentName = `${PREFIX}-category-pane`

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
  <div :class="classes">
    <div v-if="type === 'classify'" class="mot-category-pane__cateListRight">
      <slot />
      <div v-for="(item, index) in categoryChild" :key="index">
        <div class="mot-category-pane__childTitle">
          {{ item?.catName }}
        </div>

        <div v-if="item?.catType === 1" class="mot-category-pane__childItemList">
          <div
            v-for="(sku, key) in item.childCateList"
            :key="key"
            class="mot-category-pane__childItem"
            @click="onChange(sku)"
          >
            <image class="mot-category-pane__childImg" :src="sku.backImg" />
            <div class="mot-category-pane__skuImg">
              {{ sku?.catName }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- text -->
    <div v-if="type === 'text'" class="mot-category-pane__cateListRight">
      <slot />
      <div v-for="(item, index) in categoryChild" :key="index">
        <div class="mot-category-pane__childTitle">
          {{ item?.catName }}
        </div>

        <div v-if="item?.catType === 1" class="mot-category-pane__childItemList">
          <div
            v-for="(sku, key) in item.childCateList"
            :key="key"
            class="mot-category-pane__childItem"
            @click="onChange(sku)"
          >
            <div class="mot-category-pane__skuName">
              {{ sku?.catName }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 自定义 -->

    <div v-if="type === 'custom'" class="mot-category-pane__selfItemList">
      <slot />
      <div v-for="(sku, key) in customCategory" :key="key" class="mot-category-pane__skuName" @click="onChange(sku)">
        {{ sku?.catName }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './index';
</style>
