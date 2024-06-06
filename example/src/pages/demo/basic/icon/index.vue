<script lang="ts" setup>
import icons from '../../../../../icon-config.json'

function copy(text: string) {
  uni.setClipboardData({
    data: text,
    success: () => {
      uni.showToast({
        title: '复制成功',
        icon: 'none',
      })
    },
  })
}
</script>

<template>
  <div class="demo">
    <h2 class="title">
      基础用法
    </h2>
    <mot-cell>
      <mot-icon name="dongdong" />
      <mot-icon name="JD" />
    </mot-cell>
    <h2 class="title">
      图片链接
    </h2>
    <mot-cell>
      <mot-icon
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      />
    </mot-cell>
    <h2 class="title">
      图标颜色
    </h2>
    <mot-cell>
      <mot-icon name="dongdong" custom-color="#fa2c19" />
      <mot-icon name="dongdong" custom-color="#64b578" />
      <mot-icon name="JD" custom-color="#fa2c19" />
    </mot-cell>

    <h2 class="title">
      图标大小
    </h2>
    <mot-cell>
      <mot-icon name="dongdong" />
      <mot-icon name="dongdong" size="24" />
      <mot-icon name="dongdong" size="26" />
    </mot-cell>

    <mot-cell-group v-for="item in icons.data" :key="item.name" :title="item.name">
      <mot-cell>
        <view class="ul">
          <view v-for="icon in item.icons" :key="icon" class="li cursor-pointer" @click="copy(icon)">
            <mot-icon :name="icon" />
            <text class="span text-center">
              {{ icon }}
            </text>
          </view>
        </view>
      </mot-cell>
    </mot-cell-group>

    <mot-cell-group v-for="item in icons.style" :key="item.name" :title="item.name">
      <mot-cell>
        <view class="icon-ul">
          <view v-for="it in item.icons" :key="it.name" class="icon-li">
            <mot-icon
              :name="it.name"
              :custom-class="`mot-icon-${it['animation-name']} mot-icon-${it['animation-time']}`"
            />
            <text class="text-center">
              {{ it['animation-name'] }}
            </text>
          </view>
        </view>
      </mot-cell>
    </mot-cell-group>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Icon"
  }
}
</route>

<style lang="scss">
.mot-cell {
  > .motui-iconfont {
    margin-right: 10px;
  }

  .icon-ul,
  .h5-ul,
  .ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .icon-li,
    .h5-li,
    .li {
      display: flex;
      flex: 0 0 25%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 25%;

      .span {
        height: 40px;
        font-size: 12px;
        text-align: center;
      }

      .motui-iconfont {
        margin: 16px 0;
      }
    }
  }
}
</style>
