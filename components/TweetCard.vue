<script setup lang="ts">
defineProps<{
  name: string
  handle: string
  avatar?: string        // initials or emoji
  color?: string         // avatar bg
  verified?: boolean
  date?: string
  replies?: string
  retweets?: string
  likes?: string
}>()
</script>

<template>
  <div class="tw-card">
    <div class="flex items-center gap-3">
      <div class="tw-avatar" :style="{ background: color || 'linear-gradient(135deg,#1d9bf0,#22d3ee)' }">
        {{ avatar || name.charAt(0) }}
      </div>
      <div class="leading-tight">
        <div class="flex items-center gap-1">
          <span class="font-bold text-white">{{ name }}</span>
          <svg v-if="verified" class="w-4 h-4" viewBox="0 0 24 24" fill="#1d9bf0"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.943 3.486-.02.18-.03.36-.03.547 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.187-.01-.367-.03-.547 1.16-.688 1.943-1.99 1.943-3.484zm-6.616-3.418l-4.5 6.5c-.137.198-.357.32-.598.336h-.046c-.226 0-.443-.094-.6-.26l-2.5-2.66c-.32-.34-.302-.876.038-1.196.34-.32.876-.302 1.196.038l1.785 1.9 3.957-5.72c.26-.375.776-.47 1.15-.21.377.26.47.775.21 1.15z"/></svg>
          <span class="text-[#71767b] text-sm">{{ handle }}</span>
        </div>
      </div>
      <svg class="w-5 h-5 ml-auto text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </div>

    <div class="tw-text">
      <slot />
    </div>

    <div v-if="date" class="text-[#71767b] text-sm mt-2">{{ date }}</div>

    <div class="tw-stats">
      <span class="tw-stat"><span class="i-mdi:comment-outline" /> {{ replies || '—' }}</span>
      <span class="tw-stat"><span class="i-mdi:repeat-variant" /> {{ retweets || '—' }}</span>
      <span class="tw-stat"><span class="i-mdi:heart-outline" /> {{ likes || '—' }}</span>
    </div>
  </div>
</template>

<style scoped>
.tw-card {
  background: #15202b;
  border: 1px solid #38444d;
  border-radius: 16px;
  padding: 14px 18px;
  box-shadow: 0 10px 40px -12px rgba(29, 155, 240, 0.4);
}
.tw-avatar {
  width: 42px; height: 42px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 800; font-size: 1.05rem; flex: none;
}
.tw-text {
  margin-top: 10px;
  color: #e7e9ea;
  font-size: 1.02rem;
  line-height: 1.5;
}
.tw-stats {
  display: flex; gap: 2.2rem; margin-top: 12px;
  padding-top: 10px; border-top: 1px solid #38444d;
  color: #71767b; font-size: 0.85rem;
}
.tw-stat { display: inline-flex; align-items: center; gap: 0.4rem; }
</style>
