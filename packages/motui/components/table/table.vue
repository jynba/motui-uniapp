<script setup lang="ts">
import { computed, defineComponent, reactive, watch } from 'vue'
import { PREFIX } from '../_constants'
import { useTranslate } from '../../locale'
import MotIcon from '../icon/icon.vue'
import { getMainClass } from '../_utils'
import { tableEmits, tableProps } from './table'
import type { TableColumnProps } from './types'
import RenderColumn from './renderColumn'

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const state = reactive({
  curData: props.data,
})
const classes = computed(() => {
  return getMainClass(props, componentName)
})

function cellClasses(item: TableColumnProps) {
  return {
    'mot-table__main__head__tr--border': props.bordered,
    [`mot-table__main__head__tr--align${item.align ? item.align : ''}`]: true,
  }
}

function _stylehead(item: TableColumnProps) {
  return item.stylehead ? item.stylehead : ''
}
function _stylecolumn(item: TableColumnProps) {
  return item.stylecolumn ? item.stylecolumn : ''
}

function getColumnItem(value: string): TableColumnProps {
  return props.columns.filter((item: TableColumnProps) => item.key === value)[0]
}
function getColumnItemStyle(value: string) {
  const style = props.columns.filter((item: TableColumnProps) => item.key === value)
  return style[0].stylecolumn ? style[0].stylecolumn : ''
}
function handleSorterClick(item: TableColumnProps) {
  if (item.sorter) {
    emit('sorter', item)
    state.curData
            = typeof item.sorter === 'function'
        ? state.curData.sort(item.sorter)
        : item.sorter === 'default'
          ? state.curData.sort()
          : state.curData
  }
}

function sortDataItem() {
  return props.columns.map((columns: TableColumnProps) => {
    return [columns.key, columns.render]
  })
}

watch(
  () => props.data,
  (val) => {
    state.curData = val.slice()
  },
)
</script>

<script lang="ts">
const componentName = `${PREFIX}-table`
const { translate } = useTranslate(componentName)

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
    <view class="mot-table__main" :class="{ 'mot-table__main--striped': striped }">
      <view class="mot-table__main__head">
        <view class="mot-table__main__head__tr">
          <view
            v-for="item in columns"
            :key="item.key"
            class="mot-table__main__head__tr__th"
            :class="cellClasses(item)"
            :style="item.stylehead"
            @click="handleSorterClick(item)"
          >
            {{ item.title }}
            <!-- <slot name="icon" > -->
            <MotIcon v-if="item.sorter" name="down-arrow" size="12px" />
            <!-- </slot> -->
          </view>
        </view>
      </view>
      <view class="mot-table__main__body">
        <view v-for="item in state.curData" :key="item" class="mot-table__main__body__tr">
          <view
            v-for="[value, render] in sortDataItem()"
            :key="value as string"
            class="mot-table__main__body__tr__td"
            :class="cellClasses(getColumnItem(value as string))"
            :style="getColumnItemStyle(value as string)"
          >
            <!-- #ifdef H5 -->
            <RenderColumn
              v-if="typeof item[value as string] === 'function' || typeof render === 'function'"
              :slots="[render, item[value as string]]"
              :record="item"
            />
            <view v-else>
              {{ item[value as string] }}
            </view>
            <!-- #endif -->
            <!-- #ifndef H5 -->
            <view>
              {{ item[value as string] }}
            </view>
            <!-- #endif -->
          </view>
        </view>
      </view>
    </view>
    <view v-if="summary" class="mot-table__summary">
      <rich-text class="mot-table__summary__text" :nodes="summary().value" />
    </view>
    <view v-if="!state.curData.length" class="mot-table__nodata">
      <div class="mot-table__nodata" :class="{ 'mot-table__nodata--border': bordered }">
        <slot name="nodata" />
        <div v-if="!$slots.nodata" class="mot-table__nodata__text">
          {{ translate('noData') }}
        </div>
      </div>
    </view>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
