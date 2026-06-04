<script setup lang="ts">
defineProps<{
  icon?: string
  title?: string
  variant?: 'neon' | 'cyan' | 'hot' | 'amber'
}>()
const map = {
  neon: { b: 'rgba(0,255,156,.30)', g: 'rgba(0,255,156,.35)', c: '#00ff9c' },
  cyan: { b: 'rgba(34,211,238,.32)', g: 'rgba(34,211,238,.35)', c: '#22d3ee' },
  hot:  { b: 'rgba(255,45,85,.35)',  g: 'rgba(255,45,85,.40)',  c: '#ff2d55' },
  amber:{ b: 'rgba(255,176,32,.35)', g: 'rgba(255,176,32,.40)', c: '#ffb020' },
}
</script>

<template>
  <div
    class="ncard"
    :style="{
      '--b': (map[variant || 'neon']).b,
      '--g': (map[variant || 'neon']).g,
      '--c': (map[variant || 'neon']).c,
    }"
  >
    <div v-if="title || icon" class="ncard-head">
      <span v-if="icon" :class="icon" class="text-xl" :style="{ color: 'var(--c)' }" />
      <span v-if="title" class="ncard-title">{{ title }}</span>
    </div>
    <div class="ncard-body"><slot /></div>
  </div>
</template>

<style scoped>
.ncard {
  background: rgba(255,255,255,0.035);
  border: 1px solid var(--b);
  border-radius: 16px;
  padding: 14px 18px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 40px -14px var(--g);
  height: 100%;
}
.ncard-head { display: flex; align-items: center; gap: 0.55rem; margin-bottom: 0.5rem; }
.ncard-title { font-weight: 800; color: #f3f7ff; font-size: 1.02rem; }
.ncard-body { color: #b9c5da; font-size: 0.9rem; line-height: 1.5; }
</style>
