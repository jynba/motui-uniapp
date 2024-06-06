<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(2)
    const activeName = ref('category')
    function tabSwitch(item: any, index: number | string) {
      // eslint-disable-next-line no-console
      console.log(item, index)
    }
    const activeImg = ref(
      'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png',
    )
    const unactiveImg = ref(
      'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png',
    )
    const List = [
      {
        title: '标签',
        icon: 'home',
        name: 'home',
      },
      {
        title: '标签',
        icon: 'category',
        name: 'category',
      },
      {
        title: '标签',
        icon: 'find',
        name: 'find',
      },
      {
        title: '标签',
        icon: 'cart',
        name: 'cart',
      },
      {
        title: '标签',
        icon: 'my',
        name: 'my',
      },
    ]
    return {
      active,
      activeImg,
      unactiveImg,
      activeName,
      List,
      tabSwitch,

    }
  },
}
</script>

<template>
  <div class="demo">
    <h2 class="title">
      基础用法
    </h2>
    <mot-tabbar @tab-switch="tabSwitch">
      <mot-tabbar-item badge-hidden tab-title="首页">
        <template #icon>
          <mot-icon size="16" name="home" />
        </template>
      </mot-tabbar-item>
      <mot-tabbar-item tab-title="分类">
        <template #icon>
          <mot-icon size="16" name="category" />
        </template>
      </mot-tabbar-item>
      <mot-tabbar-item tab-title="发现">
        <template #icon>
          <mot-icon size="16" name="find" />
        </template>
      </mot-tabbar-item>
      <mot-tabbar-item tab-title="购物车">
        <template #icon>
          <mot-icon size="16" name="cart" />
        </template>
      </mot-tabbar-item>
      <mot-tabbar-item tab-title="我的">
        <template #icon>
          <mot-icon size="16" name="my" />
        </template>
      </mot-tabbar-item>
    </mot-tabbar>
    <h2 class="title">
      通过名称匹配
    </h2>

    <mot-tabbar v-model="activeName" @tab-switch="tabSwitch">
      <mot-tabbar-item
        v-for="(item, index) in List"
        :key="index"
        :name="item.name"
        :tab-title="item.title"
        :icon="item.icon"
      />
    </mot-tabbar>
    <h2 class="title">
      自定义图标
    </h2>
    <mot-tabbar @tab-switch="tabSwitch">
      <mot-tabbar-item tab-title="首页">
        <template #icon="props">
          <img v-if="props.active" class="icon-img" :src="activeImg">
          <img v-else class="icon-img" :src="unactiveImg">
        </template>
      </mot-tabbar-item>
      <mot-tabbar-item tab-title="分类">
        <template #icon="props">
          <img v-if="props.active" class="icon-img" :src="activeImg">
          <img v-else class="icon-img" :src="unactiveImg">
        </template>
      </mot-tabbar-item>
      <mot-tabbar-item tab-title="发现">
        <template #icon="props">
          <img v-if="props.active" class="icon-img" :src="activeImg">
          <img v-else class="icon-img" :src="unactiveImg">
        </template>
      </mot-tabbar-item>
    </mot-tabbar>

    <h2 class="title">
      自定义选中
    </h2>
    <mot-tabbar v-model="active">
      <mot-tabbar-item v-for="(item, index) in List" :key="index" :tab-title="item.title" :icon="item.icon" />
    </mot-tabbar>

    <h2 class="title">
      徽标提示
    </h2>
    <mot-tabbar>
      <mot-tabbar-item tab-title="首页" icon="home" :value="11" />
      <mot-tabbar-item tab-title="分类" icon="category" :dot="true" />
      <mot-tabbar-item tab-title="发现" icon="find" :value="110" />
      <mot-tabbar-item tab-title="购物车" icon="cart" />
      <mot-tabbar-item tab-title="我的" icon="my" />
    </mot-tabbar>

    <h2 class="title">
      自定义颜色
    </h2>
    <mot-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <mot-tabbar-item v-for="(item, index) in List" :key="index" :tab-title="item.title" :icon="item.icon" />
    </mot-tabbar>
    <h2 class="title">
      三个icon的tabbar
    </h2>
    <mot-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <mot-tabbar-item tab-title="首页" icon="home" />
      <mot-tabbar-item tab-title="分类" icon="category" />
      <mot-tabbar-item tab-title="发现" icon="find" />
    </mot-tabbar>
    <h2 class="title">
      固定底部，可自由跳转
    </h2>
    <mot-tabbar :bottom="true" :safe-area-inset-bottom="true" placeholder>
      <mot-tabbar-item tab-title="首页" href="" icon="home" />
      <mot-tabbar-item tab-title="分类" icon="category" />
      <mot-tabbar-item tab-title="发现" icon="find" />
      <mot-tabbar-item tab-title="购物车" icon="cart" />
      <mot-tabbar-item tab-title="我的" icon="my" />
    </mot-tabbar>
  </div>
</template>

<style lang="scss">
.icon-img{
  width: 18px;
  height: 18px;
}
</style>

<route lang="json">
{
"style": {
    "navigationBarTitleText": "TabBar"
  }
}
</route>
