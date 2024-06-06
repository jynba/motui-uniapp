<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1,
    })

    const handleStep = (params: string | number) => {
      if (state[params as 'current1'] >= 3)
        state[params as 'current1'] = 1
      else
        state[params as 'current1'] += 1
    }

    return {
      ...toRefs(state),
      handleStep,
    }
  },
}
</script>

<template>
  <div class="demo padding">
    <h2 class="title">
      基础用法
    </h2>
    <div class="steps-wrapper">
      <mot-steps :current="current1">
        <mot-step title="步骤一">
          1
          <template #title>
            步骤一
          </template>
        </mot-step>
        <mot-step title="步骤二">
          2
        </mot-step>
        <mot-step title="步骤三">
          3
        </mot-step>
      </mot-steps>
      <div class="steps-button">
        <mot-button type="primary" @click="handleStep('current1')">
          下一步
        </mot-button>
      </div>
    </div>
    <h2 class="title">
      基础用法（点状）
    </h2>
    <div class="steps-wrapper">
      <mot-steps :current="current2" progress-dot>
        <mot-step />
        <mot-step />
        <mot-step />
      </mot-steps>
      <div class="steps-button">
        <mot-button size="mini" type="primary" @click="handleStep('current2')">
          下一步
        </mot-button>
      </div>
    </div>
    <h2 class="title">
      标题和描述信息
    </h2>
    <div class="steps-wrapper">
      <mot-steps :current="current3">
        <mot-step title="步骤一" content="步骤描述">
          1
        </mot-step>
        <mot-step title="步骤二" content="步骤描述" />
        <mot-step title="步骤三" content="步骤描述" />
      </mot-steps>
      <div class="steps-button" style="margin-top: 10px">
        <mot-button type="primary" @click="handleStep('current3')">
          下一步
        </mot-button>
      </div>
    </div>
    <h2 class="title">
      自定义图标
    </h2>
    <div class="steps-wrapper">
      <mot-steps current="4">
        <mot-step title="已完成" icon="service">
          1
        </mot-step>
        <mot-step title="进行中" icon="people">
          2
        </mot-step>
        <mot-step title="未开始" icon="location2">
          3
        </mot-step>
      </mot-steps>
    </div>
    <h2 class="title">
      竖向步骤条
    </h2>
    <div class="steps-wrapper" style="height: 300px; padding: 15px 30px">
      <mot-steps direction="vertical" current="2">
        <mot-step title="已完成" content="您的订单已经打包完成，商品已发出">
          1
        </mot-step>
        <mot-step title="进行中" content="您的订单正在配送途中">
          2
        </mot-step>
        <mot-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">
          3
        </mot-step>
      </mot-steps>
    </div>
    <h2 class="title">
      点状步骤和垂直方向
    </h2>
    <div class="steps-wrapper" style="height: 300px; padding: 15px 40px">
      <mot-steps direction="vertical" progress-dot current="2">
        <mot-step title="已完成" content="您的订单已经打包完成，商品已发出">
          1
        </mot-step>
        <mot-step title="进行中" content="您的订单正在配送途中">
          2
        </mot-step>
        <mot-step title="未开始">
          3
          <template #content>
            <p>收货地址为：</p>
            <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
          </template>
        </mot-step>
      </mot-steps>
    </div>
  </div>
</template>

<style lang="scss">
.padding {
  padding-left: 0 !important;
  padding-right: 0 !important;
  .title {
    padding-left: 27px !important;
  }
}
.steps-wrapper {
  width: 100%;
  padding: 15px 0;
  // background-color: #fff;
  .steps-button {
    text-align: center;
  }
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Steps"
  }
}
</route>
