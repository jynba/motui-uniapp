<script setup lang="ts">
</script>

<template>
  <div class="demo h-100vh!">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell>
      <mot-indicator :size="3" :current="3">
        step1
      </mot-indicator>
    </mot-cell>
    <mot-cell>
      <mot-row>
        <mot-col :span="12">
          <mot-button size="small" type="primary">
            主要按钮
          </mot-button>
        </mot-col>
        <mot-col :span="12">
          <mot-indicator :block="true" align="right" :size="6" :current="5">
            step1
          </mot-indicator>
        </mot-col>
      </mot-row>
    </mot-cell>
    <h2 class="title">
      block用法
    </h2>
    <mot-cell>
      <mot-indicator :block="true" algin="center" :size="6" :current="5">
        step1
      </mot-indicator>
    </mot-cell>
    <mot-cell>
      <mot-indicator :block="true" align="left" :size="6" :current="1">
        step1
      </mot-indicator>
    </mot-cell>
    <mot-cell>
      <mot-indicator :block="true" align="right" :size="6" :current="5">
        step1
      </mot-indicator>
    </mot-cell>
    <h2 class="title">
      不补0
    </h2>
    <mot-cell>
      <mot-indicator :fill-zero="false" :size="6" :current="5">
        step1
      </mot-indicator>
    </mot-cell>
  </div>
</template>

<route lang="json">
{
"style": {
    "navigationBarTitleText": "Indicator"
  }
}
</route>
