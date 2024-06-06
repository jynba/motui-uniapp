<script lang="ts" setup>
import type { ToastInst, ToastProps } from 'motui-uniapp'

const toast = useToast()

function showText() {
  toast.text('文字提示')
}

function showSuccess() {
  toast.success('成功提示')
}

function showError() {
  toast.error('错误提示')
}

function showWarning() {
  toast.warning('警告提示')
}

function showLoading() {
  toast.loading('加载提示', {
    duration: 5000,
    cover: false,
  })
}

function hideLoading() {
  toast.hide()
}

function showSuccessWithTitle() {
  toast.success('成功提示', {
    title: '我是一个有标题的提示',
  })
}

function showSuccessOtherIcon() {
  toast.success('成功提示', {
    icon: 'dongdong',
    iconSize: '60rpx',
  })
}

function showSuccessWithCover() {
  toast.success('成功提示', {
    duration: 0,
    cover: true,
    coverColor: 'rgba(0, 0, 0, 0.5)',
    closeOnClickOverlay: true,
  })
}

function showSuccessBottom() {
  toast.success('成功提示', {
    center: false,
  })
}

const toastRef = ref<ToastInst | null>(null)

function showSuccessRef() {
  toastRef.value?.success('成功提示')
}

function showErrorRef() {
  toastRef.value?.error('错误提示')
}

function showWarningRef() {
  toastRef.value?.warning('警告提示')
}

const toastState = ref<Pick<ToastProps, 'visible' | 'type' | 'msg'>>({
  visible: false,
  type: 'text',
  msg: '',
})

function showSuccessProps() {
  toastState.value = {
    visible: true,
    type: 'success',
    msg: '成功提示',
  }
}

function showErrorProps() {
  toastState.value = {
    visible: true,
    type: 'error',
    msg: '错误提示',
  }
}

function showWarningProps() {
  toastState.value = {
    visible: true,
    type: 'warning',
    msg: '警告提示',
  }
}
</script>

<template>
  <div class="demo h-100vh!">
    <h2 class="title">
      组合式函数用法
    </h2>
    <mot-toast />
    <mot-cell title="Text 文字提示" is-link @click="showText" />
    <mot-cell title="Success 成功提示" is-link @click="showSuccess" />
    <mot-cell title="Error 错误提示" is-link @click="showError" />
    <mot-cell title="Warning 警告提示" is-link @click="showWarning" />
    <mot-cell title="Loading 加载提示" is-link @click="showLoading" />
    <mot-cell title="手动关闭提示" is-link @click="hideLoading" />

    <h2 class="title">
      自定义样式
    </h2>
    <mot-cell title="带标题的提示" is-link @click="showSuccessWithTitle" />
    <mot-cell title="不同的图标" is-link @click="showSuccessOtherIcon" />
    <mot-cell title="也可以有遮罩层" is-link @click="showSuccessWithCover" />
    <mot-cell title="展示在底部" is-link @click="showSuccessBottom" />

    <h2 class="title">
      Ref用法
    </h2>
    <mot-toast ref="toastRef" selector="xx1" />
    <mot-cell title="Success 成功提示" is-link @click="showSuccessRef" />
    <mot-cell title="Error 错误提示" is-link @click="showErrorRef" />
    <mot-cell title="Warning 警告提示" is-link @click="showWarningRef" />

    <h2 class="title">
      Props用法
    </h2>
    <mot-toast v-model:visible="toastState.visible" :type="toastState.type" :msg="toastState.msg" selector="xx2" />
    <mot-cell title="Success 成功提示" is-link @click="showSuccessProps" />
    <mot-cell title="Error 错误提示" is-link @click="showErrorProps" />
    <mot-cell title="Warning 警告提示" is-link @click="showWarningProps" />
  </div>
</template>

<style lang="scss" scoped></style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "Toast"
  }
}
</route>
