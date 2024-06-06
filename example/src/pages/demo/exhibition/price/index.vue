<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const price = ref(0)
    setInterval(() => {
      price.value = Math.random() * 10000000
      // console.log('price.value1', price.value)
    }, 1000)
    return {
      price,
    }
  },
}
</script>

<template>
  <div class="demo h-100vh!">
    <mot-cell-group title="支持三种尺寸：small、normal、large">
      <mot-cell>
        <mot-price :price="0" size="small" :need-symbol="false" />
      </mot-cell>
      <mot-cell>
        <mot-price :price="0" size="normal" :need-symbol="false" />
      </mot-cell>
      <mot-cell>
        <mot-price :price="0" size="large" :need-symbol="false" />
      </mot-cell>
    </mot-cell-group>
    <h2 class="title">
      不保留小数
    </h2>
    <mot-cell>
      <mot-price :price="8888" :decimal-digits="0" />
    </mot-cell>
    <h2 class="title">
      划线价
    </h2>
    <mot-cell>
      <mot-price :price="8888" :decimal-digits="0" size="normal" need-symbol thousands strike-through />
    </mot-cell>
    <h2 class="title">
      货币符号
    </h2>
    <mot-cell>
      <mot-price :price="10010.01" symbol="¥" />
    </mot-cell>
    <h2 class="title">
      货币符号位置
    </h2>
    <mot-cell>
      <mot-price :price="8888.01" position="after" symbol="元" />
    </mot-cell>
    <h2 class="title">
      千位分隔
    </h2>
    <mot-cell>
      <mot-price :price="15213.1221" :decimal-digits="3" :thousands="true" />
    </mot-cell>
  </div>
</template>

<style lang="scss"></style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Price"
  }
}
</route>
