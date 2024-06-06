import type { defaultAnimations } from './use-transition'

export type TransitionName = keyof typeof defaultAnimations

export interface MotAnimation {
  enter: string
  leave: string
}

export const motAnimationName = ['fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'zoom', 'none'] as const
export type MotAnimationName = (typeof motAnimationName)[number]
export const motAnimationtimingFunction = ['linear', 'ease', 'ease-in', 'ease-in-out', 'ease-out', 'step-start', 'step-end'] as const
export type MotAnimationtimingFunction = (typeof motAnimationtimingFunction)[number]
export interface MotAnimations {
  [key: string]: MotAnimation
}
