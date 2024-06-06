<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const inputVal = ref<any>('')
    const danmu = ref<any>(null)
    const list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结'])
    function addDanmu() {
      const n = Math.random()
      danmu.value.add(`随机——${String(n).substr(2, 10)}`)
    }
    return {
      inputVal,
      danmu,
      list,
      addDanmu,
    }
  },
}
</script>

<template>
  <div class="demo barrage-demo h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell custom-class="danmu-box">
      <mot-barrage ref="danmu" :danmu="list" />
    </mot-cell>
    <div class="test">
      <mot-button custom-class="add mot-button--primary" @click="addDanmu">
        随机添加
      </mot-button>
    </div>
  </div>
</template>

<style lang="scss">
.barrage-demo {
  .danmu-box,
  .mot-barrage {
    padding: 20px 0;
    height: 150px;
  }
  .mot-button {
    width: 100%;
  }
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Barrage"
  }
}
</route>
