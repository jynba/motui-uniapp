<script lang="ts">
import { ref } from 'vue'

export default {
  props: {},
  setup() {
    const val = ref(0)
    const setAddVal = () => {
      if (val.value >= 100)
        return false

      val.value += 10
    }
    const setReduceVal = () => {
      if (val.value <= 0)
        return false

      val.value -= 10
    }
    return {
      val,
      setAddVal,
      setReduceVal,
    }
  },
}
</script>

<template>
  <div class="demo full">
    <h2 class="title">
      基础用法
    </h2>
    <div>
      <mot-cell>
        <mot-progress percentage="30" />
      </mot-cell>
    </div>

    <h2 class="title">
      设置颜色高度
    </h2>
    <div>
      <mot-cell>
        <mot-progress percentage="30" stroke-color=" rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
      </mot-cell>
    </div>
    <h2 class="title">
      设置百分比不显示
    </h2>
    <div>
      <mot-cell>
        <mot-progress percentage="50" :show-text="false" stroke-height="24" />
      </mot-cell>
    </div>
    <h2 class="title">
      设置百分比内显
    </h2>
    <div>
      <mot-cell>
        <mot-progress percentage="60" :text-inside="true" />
      </mot-cell>
    </div>
    <h2 class="title">
      设置百分比内显自定义内容
    </h2>
    <div>
      <mot-cell>
        <mot-progress percentage="60" :text-inside="true">
          <image
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
            width="30"
            height="30"
            style="display: block; width: 30px; height: 30px"
          />
        </mot-progress>
      </mot-cell>
    </div>
    <h2 class="title">
      设置自定义尺寸
    </h2>
    <div>
      <mot-cell>
        <mot-progress percentage="30" size="small" />
      </mot-cell>
      <mot-cell>
        <mot-progress percentage="50" :text-inside="true" size="base" />
      </mot-cell>
      <mot-cell>
        <mot-progress percentage="70" size="large" />
      </mot-cell>
    </div>
    <h2 class="title">
      设置状态显示
    </h2>
    <div>
      <mot-cell>
        <mot-progress
          percentage="30"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
        />
      </mot-cell>
      <mot-cell>
        <mot-progress percentage="50" status="icon" />
      </mot-cell>
      <mot-cell>
        <mot-progress
          percentage="100"
          stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          stroke-width="15"
          status="icon"
        >
          <template #iconName>
            <mot-icon name="issue" custom-color="red" width="15px" height="15px" />
          </template>
        </mot-progress>
      </mot-cell>
    </div>
    <h2 class="title">
      设置百分比
    </h2>
    <div>
      <mot-cell>
        <mot-progress :percentage="val" />
      </mot-cell>
      <mot-cell>
        <mot-button type="default" @click="setReduceVal">
          减少
        </mot-button>
        <mot-button type="primary" @click="setAddVal">
          增加
        </mot-button>
      </mot-cell>
    </div>
  </div>
</template>

<style lang="scss">
.mot-button {
  margin-right: 10px;
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Progress"
  }
}
</route>
