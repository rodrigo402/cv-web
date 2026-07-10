<script setup lang="ts">
import { useIntersection } from '@/composables/useIntersection'
import { experience } from '@/data/cv'

const { el: headerEl, visible: headerVisible } = useIntersection()
const { el: listEl, visible: listVisible } = useIntersection()
</script>

<template>
  <main class="page">
    <div ref="headerEl" :class="['fade-up', { visible: headerVisible }]">
      <p class="section-label">// trayectoria</p>
      <h2 class="section-title">Experiencia.</h2>
      <div class="section-bar" />
    </div>

    <div ref="listEl" class="timeline">
      <div
        v-for="(item, i) in experience"
        :key="i"
        :class="['entry', 'fade-up', `d${Math.min(i + 1, 6)}`, { visible: listVisible }]"
      >
        <div class="entry-marker">
          <div class="dot" />
          <div class="line" />
        </div>

        <div class="entry-content">
          <span class="mono-chip entry-period">{{ item.period }}</span>
          <h3 class="entry-role">{{ item.role }}</h3>
          <p class="entry-desc">{{ item.description }}</p>
          <div class="entry-tags">
            <span v-for="tag in item.tags" :key="tag" class="skill-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
}

.entry {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 1.25rem;
  padding-bottom: 2.5rem;
}

.entry:last-child { padding-bottom: 0; }

/* Marker column */
.entry-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.25rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 3px var(--accent-dim);
  flex-shrink: 0;
  z-index: 1;
}

.entry:last-child .dot {
  box-shadow: 0 0 0 3px var(--accent-dim), var(--accent-glow);
}

.line {
  flex: 1;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), var(--border));
  margin-top: 4px;
  opacity: 0.4;
}
.entry:last-child .line { display: none; }

/* Content */
.entry-content {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding-bottom: 0.5rem;
}

.entry-period {
  margin-bottom: 0.125rem;
}

.entry-role {
  font-size: 1.125rem;
  color: var(--text);
  line-height: 1.3;
}

.entry-desc {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-2);
}

.entry-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.25rem;
}

@media (max-width: 600px) {
  .entry {
    grid-template-columns: 20px 1fr;
    gap: 0.875rem;
  }
  .dot { width: 10px; height: 10px; }
}
</style>
