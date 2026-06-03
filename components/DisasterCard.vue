<template>
  <div class="disaster-card relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:scale-[1.03] bg-gradient-to-br from-gray-900 to-black group border border-white/5">
    <!-- Animated Glowing Border Effect -->
    <div class="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 rounded-2xl transition-all duration-500"></div>
    
    <!-- Neon Glow Background -->
    <div class="absolute -top-16 -right-16 w-48 h-48 bg-red-600/10 rounded-full blur-[60px] group-hover:bg-red-500/30 transition-all duration-700 pointer-events-none"></div>
    <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-600/10 rounded-full blur-[60px] group-hover:bg-purple-500/30 transition-all duration-700 pointer-events-none"></div>

    <div class="relative z-10">
      <!-- Header -->
      <div class="flex items-center justify-between mb-5">
        <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 flex items-center gap-3 m-0">
          <slot name="icon"></slot>
          {{ company }}
        </h3>
        <span class="px-3 py-1 text-xs font-bold tracking-widest rounded-full bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
          {{ year }}
        </span>
      </div>

      <!-- Vulnerability Type -->
      <div class="mb-5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
        <div class="absolute left-0 top-0 w-1 h-full bg-amber-500"></div>
        <div class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1 ml-2">Açık Türü</div>
        <div class="text-sm font-mono text-amber-400 ml-2 font-semibold">{{ vulnerability }}</div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-4 mb-5">
        <div class="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-md">
          <div class="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Etkilenen Kitle</div>
          <div class="text-xl font-black text-red-400">{{ impact }}</div>
        </div>
        <div class="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-md">
          <div class="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Mali Kayıp</div>
          <div class="text-xl font-black text-green-400">{{ loss }}</div>
        </div>
      </div>

      <!-- Details Slot -->
      <div class="mt-4 text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4">
        <slot name="details"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  company: String,
  year: String,
  vulnerability: String,
  impact: String,
  loss: String
})
</script>

<style scoped>
.disaster-card {
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
}
</style>
