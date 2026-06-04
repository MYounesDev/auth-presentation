<script setup lang="ts">
defineProps<{
  source: string
  date?: string
  headline: string
  accent?: string   // hex accent for the source bar
}>()
</script>

<template>
  <div class="news-card" :style="{ '--acc': accent || '#ff2d55' }">
    <div class="news-head">
      <span class="news-dot" />
      <span class="news-source">{{ source }}</span>
      <span v-if="date" class="news-date">{{ date }}</span>
      <span class="news-tag">BREAKING</span>
    </div>
    <h3 class="news-title">{{ headline }}</h3>
    <p class="news-body"><slot /></p>
  </div>
</template>

<style scoped>
.news-card {
  background: linear-gradient(180deg, rgba(20,26,42,0.95), rgba(10,14,26,0.95));
  border: 1px solid rgba(255,255,255,0.10);
  border-left: 4px solid var(--acc);
  border-radius: 12px;
  padding: 14px 18px;
  box-shadow: 0 10px 36px -14px rgba(0,0,0,0.7);
}
.news-head {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em;
}
.news-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--acc); box-shadow: 0 0 10px var(--acc); }
.news-source { color: var(--acc); font-weight: 800; }
.news-date { color: #5c6b85; }
.news-tag {
  margin-left: auto; color: var(--acc);
  border: 1px solid var(--acc); border-radius: 4px;
  padding: 1px 6px; font-weight: 700; font-size: 0.62rem;
}
.news-title {
  margin: 8px 0 6px; color: #f3f7ff; font-size: 1.12rem;
  font-weight: 800; line-height: 1.3;
}
.news-body { color: #aab6cc; font-size: 0.86rem; line-height: 1.45; margin: 0; }
</style>
