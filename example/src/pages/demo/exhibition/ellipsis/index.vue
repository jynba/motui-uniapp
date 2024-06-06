<script setup lang="ts">
import { ref } from 'vue'

const content = ref(
  'MotUI4.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 MotUI 能够为更多的开发者带来便利，我们决定在 MotUI 中增加小程序多端适配的能力。',
)
</script>

<template>
  <div class="demo h-[100vh]!">
    <h2 class="title">
      头部省略
    </h2>
    <mot-cell>
      <mot-ellipsis :content="content" direction="start" class="elli" />
    </mot-cell>

    <h2 class="title">
      尾部省略
    </h2>
    <mot-cell>
      <mot-ellipsis :content="content" direction="end" class="elli" />
    </mot-cell>

    <h2 class="title">
      中间省略
    </h2>
    <mot-cell>
      <mot-ellipsis :content="content" direction="middle" class="elli" />
    </mot-cell>

    <h2 class="title">
      多行省略
    </h2>
    <mot-cell>
      <mot-ellipsis :content="content" direction="start" rows="3" />
    </mot-cell>

    <h2 class="title">
      展开收起
    </h2>
    <mot-cell>
      <mot-ellipsis :content="content" direction="start" expand-text="展开" collapse-text="收起" />
    </mot-cell>
    <mot-cell>
      <mot-ellipsis :content="content" direction="middle" expand-text="展开" collapse-text="收起" />
    </mot-cell>
    <mot-cell>
      <mot-ellipsis :content="content" direction="end" rows="3" expand-text="展开" collapse-text="收起" />
    </mot-cell>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Ellipsis"
  }
}
</route>
