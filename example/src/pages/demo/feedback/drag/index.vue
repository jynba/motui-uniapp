<script lang="ts">
import { isH5 } from '@uni-helper/uni-env'

export default {
  setup() {
    function right() {
      return uni.getSystemInfoSync().windowWidth - 300
    }
    function bottom() {
      return uni.getSystemInfoSync().screenHeight - 420 - 200
    }
    return {
      isH5,
      right,
      bottom,
    }
  },
}
</script>

<template>
  <div class="demo h-100vh!" catchtouchmove="true">
    <h2 class="title">
      基础用法
    </h2>
    <mot-drag class="dragDemo">
      <mot-button type="primary">
        触摸移动
      </mot-button>
    </mot-drag>
    <h2 class="title">
      y轴方向移动
    </h2>
    <mot-drag class="dragDemo" direction="y">
      <mot-button type="primary">
        Y轴移动
      </mot-button>
    </mot-drag>
    <h2 class="title">
      x轴方向移动
    </h2>
    <mot-drag class="dragDemo" direction="x">
      <mot-button type="primary">
        X轴移动
      </mot-button>
    </mot-drag>
    <h2 class="title">
      贴边
    </h2>
    <mot-drag class="dragDemo" :attract="true">
      <mot-button type="primary">
        贴边
      </mot-button>
    </mot-drag>
    <h2 class="title">
      限制拖拽边界
    </h2>
    <div class="drag-boundary" />
    <mot-drag
      :boundary="{ top: 420, left: 0, bottom: bottom(), right: right() }"
      :style="{ top: '330px', left: '50px' }"
    >
      <mot-button type="primary">
        限制拖拽边界
      </mot-button>
    </mot-drag>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Drag"
  }
}
</route>

<style lang="scss">
.dragDemo {
  margin-left: 20px;
}

.drag-boundary {
  position: absolute;
  top: 420px;
  left: 0;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}
</style>
