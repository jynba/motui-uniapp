<script setup lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { PREFIX } from '../_constants'
import { TypeOfFun } from '../_utils'
import MotInputNumber from '../inputnumber/inputnumber.vue'

const props = defineProps({
  modelValue: {
    type: [Number, String],
  },

  // 购买数量最大值
  stepperMax: {
    type: [Number, String],
    default: 99999,
  },

  stepperMin: {
    type: [Number, String],
    default: 1,
  },

  // stepper 前文案提示
  stepperExtraText: {
    type: [Function, Boolean],
    default: false,
  },

  // 数量选择左侧文案
  stepperTitle: {
    type: String,
    default: '购买数量',
  },
})

const emit = defineEmits(['click', 'changeSku', 'changeStepper', 'clickBtnOptions', 'overLimit', 'reduce', 'add'])

defineExpose({
  reset,
})

const goodsCount = ref(props.stepperMin)

onMounted(() => {
  goodsCount.value = props.stepperMin
})

const getExtraText = computed(() => {
  const { stepperExtraText } = props

  if (stepperExtraText && TypeOfFun(stepperExtraText) === 'function')
    return (stepperExtraText as any)()

  else return ''
})

// 修改购买数量 add 加  reduce 减
function add(value: any) {
  emit('add', value.detail.vlaue)
}

function reduce(value: any) {
  emit('reduce', value.detail.vlaue)
}

// stepper 极限值
function overlimit(e: Event, action: string) {
  emit('overLimit', {
    action,
    value: Number.parseInt(`${goodsCount.value}`),
  })
}
// stepper 发生了改变
function changeStepper(value: number) {
  goodsCount.value = value

  emit('changeStepper', value)
}

// 重置值
function reset() {
  goodsCount.value = props.stepperMin
}
</script>

<script  lang="ts">
const componentName = `${PREFIX}-sku-stepper`

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
  <view class="mot-sku-stepper">
    <view class="mot-sku-stepper-title">
      {{ stepperTitle }}
    </view>
    <rich-text class="mot-sku-stepper-limit" :nodes="getExtraText" />
    <view class="mot-sku-stepper-count">
      <MotInputNumber
        v-model="goodsCount" :min="stepperMin" :max="stepperMax" @add="(add as any)" @reduce="(reduce as any)"
        @overlimit="overlimit" @change="(changeStepper as any)"
      />
    </view>
  </view>
</template>

<style lang="scss">
.mot-theme-dark {
  .mot-sku {
    &-stepper {
      &-title {
        color: $dark-color;
      }

      &-limit {
        color: $dark-color;
      }

      &-count {
        &-lowestBuy {
          color: $primary-color;
        }
      }
    }
  }
}

.mot-sku{
  &-stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right:  30px;
    margin: 10px 0 30px;

    &-title {
      margin-right: 12px;
      font-size: 13px;
      font-weight: bold;
      color: $black;
    }

    &-limit,
    rich-text {
      display: flex;
      flex: 1;
      align-items: center;
      font-size: 12px;
      color: $text-color;
    }

    &-count {
      display: flex;
      align-items: center;

      &-lowestBuy {
        font-size: 12px;
        color: $primary-color;
      }
    }
  }
}
</style>
