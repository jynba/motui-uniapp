<script lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue'
import { isH5 } from '@uni-helper/uni-env'
import type { CountdownInst } from 'motui-uniapp'

export default {
  setup() {
    const Countdown = ref<CountdownInst>()
    const state = reactive({
      serverTime: Date.now() - 20 * 1000,
      end: Date.now() + 60 * 1000,
      starttime: Date.now(),
      asyncEnd: 0,
      paused: false,
      resetTime: {
        d: '1',
        h: '00',
        m: '00',
        s: '00',
      },
    })

    const toggle = () => {
      state.paused = !state.paused
    }
    const onend = () => {
      uni.showToast({ title: 'countdown: ended.' })
    }
    const onpaused = (v: any) => {
      uni.showToast({ title: `paused: ${JSON.stringify(v)}` })
    }
    const onrestart = (v: any) => {
      uni.showToast({ title: `restart: ${JSON.stringify(v)}` })
    }
    const start = () => {
      Countdown.value?.start()
    }

    const pause = () => {
      Countdown.value?.pause()
    }

    const reset = () => {
      Countdown.value?.reset()
    }
    onMounted(() => {

    })

    setTimeout(() => {
      state.asyncEnd = Date.now() + 30 * 1000
    }, 3000)

    return {
      ...toRefs(state),
      toggle,
      onend,
      onpaused,
      onrestart,
      Countdown,
      start,
      pause,
      reset,
      isH5,
    }
  },
}
</script>

<template>
  <div class="demo">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell>
      <mot-countdown :end-time="end" @on-end="onend" />
    </mot-cell>
    <h2 class="title">
      自定义格式
    </h2>
    <mot-cell>
      <mot-countdown :end-time="end" format="DD 天 HH 时 mm 分 ss 秒" />
    </mot-cell>

    <h2 class="title">
      毫秒级渲染
    </h2>

    <mot-cell>
      <mot-countdown :end-time="end" millisecond format="HH:mm:ss:SS" />
    </mot-cell>

    <h2 class="title">
      以服务端的时间为准
    </h2>

    <mot-cell>
      <mot-countdown :start-time="serverTime" :end-time="end" />
    </mot-cell>

    <h2 class="title">
      异步更新结束时间
    </h2>

    <mot-cell>
      <mot-countdown :end-time="asyncEnd" />
    </mot-cell>

    <h2 class="title">
      控制开始和暂停的倒计时
    </h2>

    <mot-cell>
      <mot-countdown :end-time="end" :paused="paused" @on-paused="onpaused" @on-restart="onrestart" />
      <div style="position: absolute; top: 9px; right: 10px">
        <mot-button type="primary" size="small" @click="toggle">
          {{ paused ? 'start' : 'stop' }}
        </mot-button>
      </div>
    </mot-cell>

    <h2 class="title">
      自定义展示样式
    </h2>

    <mot-cell>
      <span>
        <mot-countdown v-model="resetTime" :end-time="end">
          <div class="countdown-part-box">
            <div class="part-item-symbol">{{ resetTime.d }}天</div>
            <div class="part-item h">{{ resetTime.h }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m">{{ resetTime.m }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s">{{ resetTime.s }}</div>
          </div>
        </mot-countdown>
      </span>
    </mot-cell>

    <h2 class="title">
      手动控制
    </h2>
    <mot-cell>
      <mot-countdown ref="Countdown" time="20000" :auto-start="false" format="ss:SS" />
    </mot-cell>

    <mot-grid :column-num="3">
      <mot-grid-item>
        <mot-button type="primary" @click="start">
          开始
        </mot-button>
      </mot-grid-item>
      <mot-grid-item>
        <mot-button type="primary" @click="pause">
          暂停
        </mot-button>
      </mot-grid-item>
      <mot-grid-item>
        <mot-button type="primary" @click="reset">
          重置
        </mot-button>
      </mot-grid-item>
    </mot-grid>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "CountDown"
  }
}
</route>

<style lang="scss">
.countdown-part-box {
  display: flex;
  align-items: center;

  .part-item {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 25px;
    font-size: 14px;
    color: #fff;
    background: #e8220e;
    border-radius: 6px;
  }

  .part-item-symbol {
    margin: 0 5px;
  }
}
</style>
