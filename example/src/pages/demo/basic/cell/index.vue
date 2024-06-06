<script setup lang="ts">
import { ref } from 'vue'

function testClick() {
  // console.log('点击事件');
}
const switchChecked = ref(true)
</script>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Cell"
  }
}
</route>

<template>
  <div class="demo">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell title="我是标题" desc="描述文字" />
    <mot-cell title="我是标题" sub-title="副标题描述" desc="描述文字" />
    <mot-cell title="点击测试" @click="testClick" />
    <mot-cell title="圆角设置 0" round-radius="0" />

    <h2 class="title">
      尺寸设置 large
    </h2>
    <mot-cell size="large" title="我是标题" desc="描述文字" />
    <mot-cell size="large" title="我是标题" sub-title="副标题描述" desc="描述文字" />

    <h2 class="title">
      直接使用插槽(slot)
    </h2>

    <mot-cell>
      <div>自定义内容</div>
    </mot-cell>

    <h2 class="title">
      直接使用插槽(slot title)
    </h2>
    <mot-cell desc="描述文字">
      <template #title>
        <span>Title <b style="color: red">1</b></span>
      </template>
    </mot-cell>

    <h2 class="title">
      直接使用插槽(slot desc)
    </h2>
    <mot-cell title="我是标题">
      <template #desc>
        <span>描述文字 <b style="color: red">2</b></span>
      </template>
    </mot-cell>

    <mot-cell-group title="链接 | 分组用法">
      <mot-cell title="链接" is-link />
      <mot-cell
        title="URL 跳转"
        desc="https://jd.com"
        is-link
        url="https://jd.com"
      />
      <mot-cell title="路由跳转 ’/‘ " to="/" />
    </mot-cell-group>
    <mot-cell-group title="自定义右侧箭头区域" desc="使用 mot-cell-group 支持 title desc slots">
      <mot-cell title="Switch">
        <template #link>
          <mot-switch v-model="switchChecked" />
        </template>
      </mot-cell>
    </mot-cell-group>

    <mot-cell-group title="自定义左侧 Icon 区域">
      <mot-cell title="图片">
        <template #icon>
          <image
            class="mot-icon"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </template>
      </mot-cell>
    </mot-cell-group>

    <h2 class="title">
      展示图标
    </h2>
    <mot-cell title="姓名" icon="my" desc="张三" is-link>
      <template #icon>
        <mot-icon name="my" />
      </template>
    </mot-cell>
    <h2 class="title">
      只展示 desc ，可通过 desc-text-align 调整内容位置
    </h2>
    <mot-cell desc-text-align="left" desc="张三" />
    <h2 class="title">
      垂直居中
    </h2>
    <mot-cell center title="我是标题" sub-title="副标题描述" desc="描述文字" />
  </div>
</template>
