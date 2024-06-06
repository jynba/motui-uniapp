import type { SetupContext } from 'vue'
import { computed, nextTick, ref, watch } from 'vue'
import { CLICK_EVENT, PREFIX } from '../_constants'
import { getMainClass, getMainStyle } from '../_utils'
import type { TransitionEmits, TransitionProps } from './transition'
import type { MotAnimations } from './types'

export const defaultAnimations: MotAnimations = {
  'fade': {
    enter: 'motFadeIn',
    leave: 'motFadeOut',
  },
  'fade-up': {
    enter: 'motFadeUpIn',
    leave: 'motFadeUpOut',
  },
  'fade-down': {
    enter: 'motFadeDownIn',
    leave: 'motFadeDownOut',
  },
  'fade-left': {
    enter: 'motFadeLeftIn',
    leave: 'motFadeLeftOut',
  },
  'fade-right': {
    enter: 'motFadeRightIn',
    leave: 'motFadeRightOut',
  },
  'slide-up': {
    enter: 'motSlideUpIn',
    leave: 'motSlideDownOut',
  },
  'slide-down': {
    enter: 'motSlideDownIn',
    leave: 'motSlideUpOut',
  },
  'slide-left': {
    enter: 'motSlideLeftIn',
    leave: 'motSlideLeftOut',
  },
  'slide-right': {
    enter: 'motSlideRightIn',
    leave: 'motSlideRightOut',
  },
  'zoom': {
    enter: 'motZoomIn',
    leave: 'motZoomOut',
  },

}
const componentName = `${PREFIX}-transition`

export function isKeyOfAnimations(value: string) {
  const keys = Object.keys(defaultAnimations)

  return keys.includes(value)
}

export interface IClassNames {
  enter: string
  enterActive: string
  enterTo: string
  leave: string
  leaveActive: string
  leaveTo: string
}

export interface IClassNameProps {
  enterClass?: string
  enterActiveClass?: string
  enterToClass?: string
  leaveClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
}

function getDefaultClassNames(name: string) {
  return {
    enter: `${name}-enter-from`,
    enterActive: `${name}-enter-active`,
    enterTo: `${name}-enter-to ${name}-enter-active`,
    leave: `${name}-leave-from`,
    leaveActive: `${name}-leave-active`,
    leaveTo: `${name}-leave-to ${name}-leave-active`,
  }
}

export function getClassNames(name: string, {
  enterClass,
  enterActiveClass,
  enterToClass,
  leaveClass,
  leaveActiveClass,
  leaveToClass,
}: IClassNameProps): IClassNames {
  const defaultClassNames = getDefaultClassNames(name)
  return {
    enter: enterClass || defaultClassNames.enter,
    enterActive: enterActiveClass || defaultClassNames.enterActive,
    enterTo: enterToClass || defaultClassNames.enterTo,
    leave: leaveClass || defaultClassNames.leave,
    leaveActive: leaveActiveClass || defaultClassNames.leaveActive,
    leaveTo: leaveToClass || defaultClassNames.leaveTo,
  }
}

export function useTransition(props: TransitionProps, emit: SetupContext<TransitionEmits>['emit']) {
  const display = ref(false)
  const name = computed(() => props.name || 'fade')
  const duration = computed(() => props.duration || 200)

  const animationClass = ref('')

  const classNames = computed(() =>
    getClassNames(props.name, {
      enterClass: props.enterFromClass,
      enterActiveClass: props.enterActiveClass,
      enterToClass: props.enterToClass,
      leaveClass: props.leaveFromClass,
      leaveActiveClass: props.leaveActiveClass,
      leaveToClass: props.leaveToClass,
    }),
  )

  async function enter() {
    if (display.value)
      return
    emit('beforeEnter')
    display.value = true
    animationClass.value = defaultAnimations[name.value]?.enter ? defaultAnimations[name.value]?.enter : `${classNames.value.enter} ${classNames.value.enterActive}`
    await nextTick()
    emit('enter')

    setTimeout(() => {
      if (!isKeyOfAnimations(props.name))
        animationClass.value = classNames.value.enterTo
      emit('afterEnter')
    }, duration.value)
  }

  async function leave() {
    if (!display.value)
      return
    emit('beforeLeave')
    animationClass.value = defaultAnimations[name.value]?.leave ? defaultAnimations[name.value]?.leave : `${classNames.value.leave} ${classNames.value.leaveActive}`
    await nextTick()
    emit('leave')

    setTimeout(() => {
      if (!props.show && display.value)
        display.value = false
      if (!isKeyOfAnimations(props.name))
        animationClass.value = classNames.value.leaveTo
      emit('afterLeave')
    }, duration.value)
  }

  watch(
    () => props.show,
    (val) => {
      val ? enter() : leave()
    },
    { immediate: true },
  )

  function clickHandler(evt: any) {
    // evt.stopPropagation()
    emit(CLICK_EVENT, evt)
  }

  const classes = computed(() => {
    return getMainClass(props, componentName, {
      [animationClass.value]: true,
      'mot-hidden': !display.value,
    })
  })
  const styles = computed(() => {
    return getMainStyle(props, {
      'animation-duration': isKeyOfAnimations(props.name) ? `${props.duration}ms` : '',
      'animation-timing-function': isKeyOfAnimations(props.name) ? props.timingFunction : '',
    })
  })
  return {
    display,
    classes,
    styles,
    clickHandler,
  }
}
