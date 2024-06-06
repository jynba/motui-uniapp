<script lang="ts">
export default {

  props: {},
  setup() {
    const handleClick = () => {
      uni.showToast({ title: '触发点击头像' })
    }
    const avatarCount = ref(4)
    const addAvatar = () => {
      avatarCount.value += 1
    }

    return { handleClick, addAvatar, avatarCount }
  },
}
</script>

<template>
  <div class="demo full avatar-demo">
    <h2 class="title">
      支持三种尺寸：small、normal、large
    </h2>
    <mot-cell>
      <mot-avatar size="large">
        <image
          mode="scaleToFill"
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </mot-avatar>
      <mot-avatar size="normal">
        <image
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </mot-avatar>
      <mot-avatar size="small">
        <image
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </mot-avatar>
    </mot-cell>
    <h2 class="title">
      支持两种形状：square、round
    </h2>
    <mot-cell>
      <mot-avatar shape="square">
        <mot-icon name="my" />
      </mot-avatar>
      <mot-avatar shape="round">
        <mot-icon name="my" />
      </mot-avatar>
    </mot-cell>
    <h2 class="title">
      支持三种类型：图片、Icon 以及字符
    </h2>
    <mot-cell>
      <mot-avatar>
        <image

          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </mot-avatar>
      <mot-avatar><mot-icon name="my" /></mot-avatar>
      <mot-avatar>王</mot-avatar>
    </mot-cell>
    <h2 class="title">
      Icon 和字符型可以自定义颜色及背景色
    </h2>
    <mot-cell>
      <mot-avatar class="demo-avatar" bg-color="#FA2C19">
        <mot-icon name="my" color="#fff" />
      </mot-avatar>
      <mot-avatar custom-color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
        小明
      </mot-avatar>
    </mot-cell>
    <h2 class="title">
      带徽标的头像
    </h2>
    <mot-cell>
      <mot-badge value="8">
        <mot-avatar shape="square">
          <mot-icon name="my" />
        </mot-avatar>
      </mot-badge>
      <mot-badge dot>
        <mot-avatar shape="square">
          <mot-icon name="my" />
        </mot-avatar>
      </mot-badge>
    </mot-cell>
    <h2 class="title">
      头像组合展现
    </h2>
    <mot-cell>
      <mot-avatar-group span="-4">
        <mot-avatar>
          <image

            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          />
        </mot-avatar>
        <mot-avatar><mot-icon name="my" /></mot-avatar>
        <mot-avatar custom-color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          小明
        </mot-avatar>
      </mot-avatar-group>
    </mot-cell>

    <mot-cell>
      <mot-avatar-group max-count="3" max-color="#fff" max-bg-color="#498ff2">
        <mot-avatar>
          <image

            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          />
        </mot-avatar>
        <mot-avatar><mot-icon name="my" /></mot-avatar>
        <mot-avatar custom-color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          小明
        </mot-avatar>
        <mot-avatar><mot-icon name="my" /></mot-avatar>
      </mot-avatar-group>
    </mot-cell>
    <h2 class="title">
      组合头像可控制层级方向
    </h2>
    <mot-cell>
      <mot-avatar-group max-count="3" z-index="right" max-content="...">
        <mot-avatar>
          <image
            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          />
        </mot-avatar>
        <mot-avatar><mot-icon name="my" /></mot-avatar>
        <mot-avatar custom-color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          小明
        </mot-avatar>
        <mot-avatar><mot-icon name="my" /></mot-avatar>
      </mot-avatar-group>
    </mot-cell>

    <h2 class="title">
      点击头像触发事件
    </h2>
    <mot-cell>
      <mot-avatar @click="handleClick">
        <mot-icon name="my" />
      </mot-avatar>
    </mot-cell>
    <h2 class="title demo-avatar-group-title">
      动态添加头像
      <mot-button size="mini" @click="addAvatar">
        添加
      </mot-button>
    </h2>
    <mot-cell>
      <mot-cell>
        <mot-avatar-group :max-count="4" z-index="right">
          <mot-avatar v-for="i in avatarCount" :key="i">
            <mot-icon v-if="i % 2 === 0" name="my" />
            <image
              v-else
              src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
            />
          </mot-avatar>
        </mot-avatar-group>
      </mot-cell>
    </mot-cell>
  </div>
</template>

<style lang="scss">
.avatar-demo {
  .mot-cell {
    align-items: flex-end;
    border-radius: 0;
    & > view {
      margin-right: 30px;
    }
  }
  .demo-avatar {
    color: #fff;
  }
}
image{
  width: 100%;
  height: 100%;
}
.demo-avatar-group-title {
  display: flex;
  align-items: center;
  row-gap: 8px;
  column-gap: 8px;
}
</style>

<route lang="json">
{
"style": {
    "navigationBarTitleText": "Avatar"
  }
}
</route>
