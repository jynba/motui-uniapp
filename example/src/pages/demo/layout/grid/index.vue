<script setup lang="ts">
import { useAppStore } from '@/store'

const { darkMode } = storeToRefs(useAppStore())
</script>

<template>
  <div class="demo full">
    <h2 class="title">
      基础用法
    </h2>
    <mot-grid>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
    </mot-grid>

    <h2 class="title">
      自定义列数
    </h2>
    <mot-grid :column-num="3">
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
    </mot-grid>

    <h2 class="title">
      正方形格子
    </h2>
    <mot-grid :column-num="3" square>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
    </mot-grid>

    <h2 class="title">
      格子间距
    </h2>
    <mot-grid :gutter="10">
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
    </mot-grid>

    <h2 class="title">
      内容翻转
    </h2>
    <mot-grid reverse>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
    </mot-grid>

    <h2 class="title">
      内容横向
    </h2>
    <mot-grid direction="horizontal">
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
    </mot-grid>

    <h2 class="title">
      图标颜色/大小
    </h2>
    <mot-grid :column-num="3">
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon name="dongdong" size="40px" custom-color="#478EF2" />
      </mot-grid-item>
      <mot-grid-item text="文字">
        <mot-icon :custom-color="darkMode ? '#fff' : '#000'" name="dongdong" />
      </mot-grid-item>
    </mot-grid>

    <h2 class="title">
      页面导航
    </h2>
    <mot-grid :column-num="2">
      <mot-grid-item icon="home" text="路由跳转 ’/‘ " to="/" />
      <mot-grid-item icon="search" text="URL 跳转" url="https://jd.com" />
    </mot-grid>

    <h2 class="title">
      自定义内容
    </h2>
    <mot-grid :border="false">
      <mot-grid-item v-for="i in 4" :key="i">
        <mot-avatar size="large">
          <image
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        </mot-avatar>
      </mot-grid-item>
    </mot-grid>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Grid"
  }
}
</route>
