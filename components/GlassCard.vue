<template>
  <div class="glass-card relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
    <div :class="['absolute top-0 left-0 w-1.5 h-full', colorClass]"></div>
    <div class="relative z-10">
      <div v-if="title" class="flex items-center gap-3 mb-4">
        <div :class="['p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm', iconColorClass]">
          <slot name="icon"></slot>
        </div>
        <h3 class="text-xl font-bold text-white m-0 tracking-wide">{{ title }}</h3>
      </div>
      <div class="text-gray-300 text-sm leading-relaxed">
        <slot></slot>
      </div>
    </div>
    <!-- Dekoratif Işık Hüzmesi -->
    <div :class="['absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none', colorClass]"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  color: {
    type: String,
    default: 'blue'
  }
})

const colorClass = computed(() => {
  const map = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-emerald-500',
    amber: 'bg-amber-500',
    purple: 'bg-purple-500',
    cyan: 'bg-cyan-500'
  }
  return map[props.color] || map.blue
})

const iconColorClass = computed(() => {
  const map = {
    blue: 'text-blue-400',
    red: 'text-red-400',
    green: 'text-emerald-400',
    amber: 'text-amber-400',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400'
  }
  return map[props.color] || map.blue
})
</script>

<style scoped>
.glass-card {
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
}
</style>
