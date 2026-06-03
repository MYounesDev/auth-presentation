<template>
  <div :class="['modern-alert relative overflow-hidden rounded-2xl p-5 border backdrop-blur-xl shadow-2xl transition-all duration-300', alertClasses]">
    <!-- Decorative background icon -->
    <div class="absolute -right-4 -top-4 opacity-10 transform rotate-12 scale-[2.5] pointer-events-none transition-transform duration-700 hover:scale-[3] hover:rotate-45">
      <slot name="icon-large"></slot>
    </div>
    
    <!-- Animated Gradient Border Glow -->
    <div :class="['absolute inset-0 opacity-20 bg-gradient-to-r blur-xl pointer-events-none', glowClasses]"></div>

    <div class="relative z-10 flex items-start gap-5">
      <div :class="['text-3xl mt-1 drop-shadow-lg', iconColor]">
        <slot name="icon"></slot>
      </div>
      <div>
        <h4 v-if="title" :class="['font-black tracking-wide mb-2 m-0 text-lg drop-shadow-md', titleColor]">{{ title }}</h4>
        <div :class="['text-sm leading-relaxed font-medium', textColor]">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info' // info, warning, danger, success
  },
  title: String
})

const alertClasses = computed(() => {
  const map = {
    info: 'bg-blue-500/10 border-blue-500/30',
    warning: 'bg-amber-500/10 border-amber-500/30',
    danger: 'bg-red-500/10 border-red-500/40',
    success: 'bg-emerald-500/10 border-emerald-500/30'
  }
  return map[props.type] || map.info
})

const glowClasses = computed(() => {
  const map = {
    info: 'from-blue-600 to-cyan-600',
    warning: 'from-amber-600 to-orange-600',
    danger: 'from-red-600 to-pink-600',
    success: 'from-emerald-600 to-teal-600'
  }
  return map[props.type] || map.info
})

const titleColor = computed(() => {
  const map = {
    info: 'text-blue-300',
    warning: 'text-amber-300',
    danger: 'text-red-300',
    success: 'text-emerald-300'
  }
  return map[props.type] || map.info
})

const iconColor = computed(() => {
  return titleColor.value
})

const textColor = computed(() => {
  const map = {
    info: 'text-blue-100/80',
    warning: 'text-amber-100/80',
    danger: 'text-red-100/80',
    success: 'text-emerald-100/80'
  }
  return map[props.type] || map.info
})
</script>
