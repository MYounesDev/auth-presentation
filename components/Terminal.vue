<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="term">
    <div class="term-bar">
      <span class="dot bg-[#ff5f56]" />
      <span class="dot bg-[#ffbd2e]" />
      <span class="dot bg-[#27c93f]" />
      <span class="term-title">{{ title || 'bash — attacker@kali' }}</span>
    </div>
    <div class="term-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.term {
  background: #04060c;
  border: 1px solid rgba(0,255,156,0.25);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 50px -16px rgba(0,255,156,0.5);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}
.term-bar {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 8px 12px; background: #0c1322;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.dot { width: 12px; height: 12px; border-radius: 50%; }
.term-title { margin-left: 0.6rem; color: #6b7a96; font-size: 0.78rem; }
.term-body {
  padding: 14px 18px;
  font-size: 0.92rem;
  line-height: 1.7;
  color: #c9d6ea;
}
:slotted(.cmd)  { color: #00ff9c; }
:slotted(.cmd::before) { content: '$ '; color: #22d3ee; }
:slotted(.out)  { color: #8b9bb4; }
:slotted(.ok)   { color: #39ff14; }
:slotted(.err)  { color: #ff2d55; }
:slotted(.warn) { color: #ffb020; }
:slotted(.dim)  { color: #5c6b85; }
</style>
