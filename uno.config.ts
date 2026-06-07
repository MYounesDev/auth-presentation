import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      neon: '#00ff9c',
      neon2: '#39ff14',
      cyan: '#22d3ee',
      hot: '#ff2d55',
      amber: '#ffb020',
      ink: '#05070d',
      ink2: '#0a0e1a',
      panel: '#0e1424',
    },
  },
  shortcuts: {
    // Neon glass card
    'neon-card': 'rounded-2xl border border-neon/25 bg-white/4 backdrop-blur-md shadow-[0_0_40px_-12px_rgba(0,255,156,0.35)]',
    'cyan-card': 'rounded-2xl border border-cyan/30 bg-cyan/5 backdrop-blur-md shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]',
    'danger-card': 'rounded-2xl border border-hot/35 bg-hot/8 backdrop-blur-md shadow-[0_0_40px_-12px_rgba(255,45,85,0.4)]',
    'chip': 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono border',
    'chip-neon': 'chip border-neon/40 text-neon bg-neon/10',
    'chip-cyan': 'chip border-cyan/40 text-cyan bg-cyan/10',
    'chip-hot': 'chip border-hot/40 text-hot bg-hot/10',
    'chip-amber': 'chip border-amber/40 text-amber bg-amber/10',
  },
})
