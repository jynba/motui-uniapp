import type { ExtractPropTypes } from 'vue'
import { commonProps, isH5, makeNumericProp, makeStringProp } from '../_utils'

export const stickyProps = {
  ...commonProps,
  /**
   * @description 吸顶时与顶部的距离
   */
  offsetTop: makeNumericProp(0),
  /**
   * @description 吸顶时与顶部的距离的单位
   */
  unit: makeStringProp('px'),
  /**
   * @description 层级
   */
  zIndex: makeNumericProp(1000),
  /**
   * @description 是否禁用吸顶
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 到达顶部的时候才显示，其他时候隐藏
   */
  stickyShow: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 当前组件id stickyShow 必传
   */
  containerId: makeStringProp('sticky'),
  /**
   * @description 导航栏高度，自定义导航栏时，需要传入此值
   * - H5端的导航栏属于“自定义”导航栏的范畴，因为它是非原生的，与普通元素一致
   */
  customNavHeight: makeNumericProp(isH5 ? 44 : 0),
  /**
   * @description 自定义标识，用于区分是哪一个组件
   */
  index: [String, Number],
}

export type StickyProps = ExtractPropTypes<typeof stickyProps>
