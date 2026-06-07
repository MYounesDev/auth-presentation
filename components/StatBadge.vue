<script setup lang="ts">
defineProps<{
  value: string
  label: string
  variant?: 'neon' | 'cyan' | 'hot' | 'amber'
}>()
const c = {
  neon: '#00ff9c', cyan: '#22d3ee', hot: '#ff2d55', amber: '#ffb020',
}
</script>

<template>
  <div class="stat" :style="{ '--c': c[variant || 'hot'] }">
    <div class="stat-val">{{ value }}</div>
    <div class="stat-lbl">{{ label }}</div>
  </div>
</template>

<style scoped>
.stat {
  text-align: center;
  padding: 14px 10px;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
  background: color-mix(in srgb, var(--c) 7%, transparent);
}
.stat-val {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 1.9rem;
  line-height: 1;
  color: var(--c);
  text-shadow: 0 0 18px color-mix(in srgb, var(--c) 55%, transparent);
}
.stat-lbl { margin-top: 0.5rem; font-size: 0.78rem; color: #aab6cc; }
</style>
