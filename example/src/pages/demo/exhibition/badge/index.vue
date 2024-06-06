<script lang="ts" setup>

</script>

<template>
  <view class="demo badge-demo h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-row>
      <mot-badge :value="8">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge :value="76">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge value="NEW">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge value="NEW" bubble>
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge dot>
        <mot-avatar shape="square" />
      </mot-badge>
    </mot-row>
    <h2 class="title">
      最大值
    </h2>
    <mot-row>
      <mot-badge :value="200" :max="9">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge :value="200" :max="20">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge :value="200" :max="99">
        <mot-avatar shape="square" />
      </mot-badge>
    </mot-row>

    <h2 class="title">
      自定义颜色
    </h2>
    <mot-row>
      <mot-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <mot-avatar shape="square" />
      </mot-badge>
    </mot-row>

    <h2 class="title">
      自定义徽标内容
    </h2>
    <mot-row>
      <mot-badge>
        <template #icon>
          <mot-icon name="check" color="#1919" size="12px" />
        </template>
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge>
        <template #icon>
          <mot-icon name="link" color="#ffffff" size="12px" />
        </template>
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge>
        <template #icon>
          <mot-icon name="download" color="#ffffff" size="12px" />
        </template>
        <mot-avatar shape="square" />
      </mot-badge>
    </mot-row>

    <h2 class="title">
      自定义位置
    </h2>
    <mot-row>
      <mot-badge :value="8" top="5" right="5">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge :value="76" top="10" right="10">
        <mot-avatar shape="square" />
      </mot-badge>
      <mot-badge value="NEW">
        <mot-avatar shape="square" />
      </mot-badge>
    </mot-row>

    <h2 class="title">
      独立展示
    </h2>
    <mot-row>
      <mot-badge :value="8" />
      <mot-badge :value="76" />
      <mot-badge value="NEW" />
    </mot-row>
  </view>
</template>

<style lang="scss">
.badge-demo {
  .mot-badge {
    margin-top: 20px;
    margin-right: 40px;
  }
}
</style>

<route lang="json">
{
"style": {
    "navigationBarTitleText": "Badge"
  }
}
</route>
