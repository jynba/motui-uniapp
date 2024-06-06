<script lang="ts" setup>
const text = ref<string>('')
const text1 = ref<string>('')
const text2 = ref<string>('')
const text3 = ref<string>('')
const text4 = ref<string>('')
const text5 = ref<string>('')
const text6 = ref<string>('')
const text7 = ref<string>('')
const text8 = ref<string>('')
const text9 = ref<string>('')
const text10 = ref<string>('')
const text11 = ref<string>('')
const text12 = ref<string>('')
const text13 = ref<string>('')
const text14 = ref<string>('')
const text15 = ref<string>('')

const form = ref({
  text: '',
})

function clearValue() {
  text8.value = ''
}

function formatter(value: string) {
  return value.replace(/\d/g, '')
}

const show = ref<boolean>(false)
const message = ref<string>('')

function showToast(msg: string) {
  message.value = msg
  show.value = true
}

function onClear() {
  showToast('clear')
}

function onInputClick() {
  showToast('clickInput')
}
</script>

<template>
  <div class="demo full">
    <h2 class="title">
      基础用法
    </h2>
    <mot-input v-model="text" type="text" placeholder="文本" autofocus />

    <h2 class="title">
      自定义类型
    </h2>
    <mot-input v-model="text1" placeholder="文本" />
    <mot-input v-model="text2" type="password" placeholder="密码" />
    <mot-input v-model="text3" type="digit" placeholder="数字" />
    <mot-input v-model="text4" type="number" placeholder="整数" />

    <h2 class="title">
      禁用和只读
    </h2>
    <mot-input v-model="text5" placeholder="只读" readonly />
    <mot-input v-model="text6" placeholder="禁用" disabled />

    <h2 class="title">
      显示清除图标
    </h2>
    <mot-input v-model="text7" clearable clear-size="14" placeholder="显示清除图标" />
    <mot-input
      v-model="text8"
      placeholder="自定义清除图标"
      clearable
      clear-size="14"
      show-word-limit
      max-length="50"
      show-clear-icon
    >
      <template #clear>
        <mot-icon name="close" size="12" width="12" height="12" @click="clearValue" />
      </template>
    </mot-input>

    <h2 class="title">
      配合表单使用
    </h2>
    <mot-form :model-value="form">
      <mot-form-item label="文本" label-align="center">
        <mot-input v-model="form.text" placeholder="请输入文本" :border="false" />
      </mot-form-item>
    </mot-form>

    <h2 class="title">
      格式化输入内容
    </h2>
    <mot-input v-model="text9" error :formatter="formatter" placeholder="在输入时执行格式化" />
    <mot-input
      v-model="text10"
      :formatter="formatter"
      format-trigger="onBlur"
      placeholder="在失焦时执行格式化"
    />

    <h2 class="title">
      显示字数统计
    </h2>
    <mot-input
      v-model="text11"
      type="text"
      max-length="50"
      show-word-limit
      placeholder="留言"
    />

    <h2 class="title">
      无边框
    </h2>
    <mot-input v-model="text12" placeholder="无边框" :border="false" />
    <mot-input v-model="text13" placeholder="无边框" :border="false" />

    <h2 class="title">
      事件演示
    </h2>
    <mot-input
      v-model="text14"
      placeholder="事件演示"
      clearable
      @clear="onClear"
      @click-input="onInputClick"
    />
    <mot-toast v-model:visible="show" :msg="message" type="text" />

    <h2 class="title">
      插槽演示
    </h2>
    <mot-input v-model="text15" placeholder="插槽演示" clearable>
      <template #left>
        <mot-icon name="ask" />
      </template>

      <template #right>
        <mot-button type="primary" size="small">
          获取验证码
        </mot-button>
      </template>
    </mot-input>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  .mot-placeholder {
    color: #ccc;
  }
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Input"
  }
}
</route>
