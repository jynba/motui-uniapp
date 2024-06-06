<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {

  props: {},
  setup() {
    const data = reactive({
      radioVal: '1',
      radioVal2: '2',
      radioVal3: '1',
      radioVal4: '1',
      radioVal5: '1',
      radioVal6: '1',
    })
    const handleChange = (value: any) => {
      /* eslint-disable no-console */

      console.log(value)
    }
    return {
      ...toRefs(data),
      handleChange,
    }
  },
}
</script>

<template>
  <div class="demo full">
    <mot-cell-group title="基础用法">
      <mot-cell>
        <mot-radio-group v-model="radioVal">
          <mot-radio label="1">
            选项1
          </mot-radio>
          <mot-radio disabled label="2">
            选项2
          </mot-radio>
          <mot-radio label="3">
            选项3
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
      <mot-cell>
        <mot-radio-group v-model="radioVal" text-position="left">
          <mot-radio label="1">
            选项1
          </mot-radio>
          <mot-radio disabled label="2">
            选项2
          </mot-radio>
          <mot-radio label="3">
            选项3
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
      <mot-cell>
        <mot-radio-group v-model="radioVal">
          <mot-radio shape="button" label="1">
            选项1
          </mot-radio>
          <mot-radio disabled shape="button" label="2">
            选项2
          </mot-radio>
          <mot-radio shape="button" label="3">
            选项3
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
    </mot-cell-group>
    <mot-cell-group title="水平使用">
      <mot-cell>
        <mot-radio-group v-model="radioVal" direction="horizontal">
          <mot-radio label="1">
            选项1
          </mot-radio>
          <mot-radio label="2">
            选项2
          </mot-radio>
          <mot-radio label="3">
            选项3
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
      <mot-cell>
        <mot-radio-group v-model="radioVal" text-position="left" direction="horizontal">
          <mot-radio label="1">
            选项1
          </mot-radio>
          <mot-radio label="2">
            选项2
          </mot-radio>
          <mot-radio label="3">
            选项3
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
      <mot-cell>
        <mot-radio-group v-model="radioVal" direction="horizontal">
          <mot-radio shape="button" size="large" label="1">
            选项1
          </mot-radio>
          <mot-radio shape="button" label="2">
            选项2
          </mot-radio>
          <mot-radio shape="button" label="3">
            选项3
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
    </mot-cell-group>
    <mot-cell-group title="自定义尺寸">
      <mot-cell>
        <mot-radio-group v-model="radioVal4">
          <mot-radio label="1" icon-size="12">
            自定义尺寸12
          </mot-radio>
          <mot-radio label="2" icon-size="12">
            自定义尺寸12
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
    </mot-cell-group>
    <mot-cell-group title="自定义图标">
      <mot-cell>
        <mot-radio-group v-model="radioVal5">
          <mot-radio label="1">
            自定义图标
            <template #icon>
              <mot-icon name="checklist" />
            </template>
            <template #checkedIcon>
              <mot-icon name="checklist" custom-color="red" />
            </template>
          </mot-radio>
          <mot-radio label="2">
            自定义图标
            <template #icon>
              <mot-icon name="checklist" />
            </template>
            <template #checkedIcon>
              <mot-icon name="checklist" custom-color="red" />
            </template>
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
    </mot-cell-group>
    <mot-cell-group title="触发事件">
      <mot-cell>
        <mot-radio-group v-model="radioVal6" @change="handleChange">
          <mot-radio label="1">
            触发事件
          </mot-radio>
          <mot-radio label="2">
            触发事件
          </mot-radio>
        </mot-radio-group>
      </mot-cell>
      <mot-cell title="当前选中值" :desc="radioVal6" />
    </mot-cell-group>
  </div>
</template>

<style lang="scss" scoped></style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Radio"
  }
}
</route>
