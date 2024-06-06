<script setup lang="ts">

</script>

<template>
  <div class="demo h-100vh!">
    <h2 class="title">
      点击触发
    </h2>

    <div class="ani-demo-div">
      <mot-animate type="slide-right" action="click">
        <mot-button type="primary">
          由右向左划入
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="slide-left" action="click">
        <mot-button type="primary">
          由左向右划入
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="slide-top" action="click">
        <mot-button type="primary">
          由上至下划入
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="slide-bottom" action="click">
        <mot-button type="primary">
          由下至上划入
        </mot-button>
      </mot-animate>
    </div>

    <h2 class="title">
      循环动画
    </h2>

    <div class="ani-demo-div">
      <mot-animate type="shake" :loop="true">
        <mot-button type="primary">
          shake-抖动
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="ripple" :loop="true">
        <mot-button type="primary">
          ripple-心跳
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="breath" :loop="true">
        <mot-button type="primary">
          breath-呼吸灯
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="twinkle" :loop="true">
        <mot-button type="primary">
          twinkle-水波
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="flicker" :loop="true">
        <mot-button type="primary">
          flicker-擦亮
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="jump" :loop="true">
        <mot-button type="primary">
          jump-跳跃
        </mot-button>
      </mot-animate>
    </div>

    <div class="ani-demo-div">
      <mot-animate type="float" :loop="true">
        <mot-button type="primary">
          float-漂浮
        </mot-button>
      </mot-animate>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
}

.ani-demo-div {
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
}

.ani-demo-div2 {
  margin-top: 60px;
}
</style>
