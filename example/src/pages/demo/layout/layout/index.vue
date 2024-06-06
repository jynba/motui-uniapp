<script lang="ts" setup>

</script>

<template>
  <div class="demo h-100vh! full layout-demo">
    <h2 class="title">
      基础布局
    </h2>
    <div class="box-item t-bg-2">
      <mot-row>
        <mot-col :span="24">
          <div class="flex-content">
            span:24
          </div>
        </mot-col>
      </mot-row>
      <mot-row>
        <mot-col :span="12">
          <div class="flex-content">
            span:12
          </div>
        </mot-col>
        <mot-col :span="12">
          <div class="flex-content flex-content-light">
            span:12
          </div>
        </mot-col>
      </mot-row>
      <mot-row>
        <mot-col :span="8">
          <div class="flex-content">
            span:8
          </div>
        </mot-col>
        <mot-col :span="8">
          <div class="flex-content flex-content-light">
            span:8
          </div>
        </mot-col>
        <mot-col :span="8">
          <div class="flex-content">
            span:8
          </div>
        </mot-col>
      </mot-row>
      <mot-row>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content flex-content-light">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
      </mot-row>
    </div>
    <h2 class="title">
      分栏间隔
    </h2>
    <div class="box-item t-bg-2">
      <mot-row :gutter="10">
        <mot-col :span="8">
          <div class="flex-content">
            span:8
          </div>
        </mot-col>
        <mot-col :span="8">
          <div class="flex-content flex-content-light">
            span:8
          </div>
        </mot-col>
        <mot-col :span="8">
          <div class="flex-content">
            span:8
          </div>
        </mot-col>
      </mot-row>
    </div>
    <h2 class="title">
      Flex布局
    </h2>
    <div class="box-item t-bg-2">
      <mot-row type="flex" wrap="nowrap">
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content flex-content-light">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
      </mot-row>
      <mot-row type="flex" justify="center">
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content flex-content-light">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
      </mot-row>
      <mot-row type="flex" justify="end">
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content flex-content-light">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
      </mot-row>
      <mot-row type="flex" justify="space-between">
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content flex-content-light">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
      </mot-row>
      <mot-row type="flex" justify="space-around">
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content flex-content-light">
            span:6
          </div>
        </mot-col>
        <mot-col :span="6">
          <div class="flex-content">
            span:6
          </div>
        </mot-col>
      </mot-row>
    </div>
  </div>
</template>

<style lang="scss">
.box-item t-bg-2 {
  padding: 20px 0;
  margin-bottom: 20px;
  background: #fff;
}

.layout-demo .mot-row {
  overflow: hidden;

  &:not(:last-child) .mot-col {
    margin-bottom: 15px;
  }
}

.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  background: #ff8881;
  border-radius: 6px;

  &.flex-content-light {
    background: #ffc7c4;
  }

  &.flex-content-height {
    height: 50px;
  }
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Layout"
  }
}
</route>
