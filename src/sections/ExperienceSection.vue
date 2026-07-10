<script setup lang="ts">
import { experience } from '@/data/cv'
import { useIntersection } from '@/composables/useIntersection'

const { el, visible } = useIntersection()
</script>

<template>
  <section id="experience" class="section" aria-labelledby="experience-heading" ref="el">
    <div class="section-inner" :class="{ 'fade-up': true, visible }">
      <div class="section-label">
        <span class="mono-chip">02</span>
        <span>Experiencia</span>
      </div>

      <h2 id="experience-heading" class="section-title">
        Trayectoria <span class="gradient-text">profesional</span>
      </h2>

      <ol class="timeline" role="list">
        <li
          v-for="(item, i) in experience"
          :key="i"
          class="timeline-item"
          :class="{ current: item.current }"
        >
          <div class="timeline-dot" aria-hidden="true">
            <span v-if="item.current" class="pulse-ring" />
          </div>

          <article class="timeline-card card-base">
            <header class="card-header">
              <div class="card-meta">
                <h3 class="card-role">{{ item.role }}</h3>
                <p class="card-company">
                  {{ item.company }}
                  <span v-if="item.current" class="badge-current" aria-label="Trabajo actual">
                    <span class="badge-dot" aria-hidden="true" />
                    Actual
                  </span>
                </p>
              </div>
              <div class="card-info">
                <time class="card-period">{{ item.period }}</time>
                <span class="card-location">{{ item.location }}</span>
              </div>
            </header>

            <p v-if="item.summary" class="card-summary">{{ item.summary }}</p>

            <ul class="card-points" v-if="item.points.length">
              <li v-for="(point, j) in item.points" :key="j">{{ point }}</li>
            </ul>

            <div class="card-tags" v-if="item.tags.length">
              <span v-for="tag in item.tags" :key="tag" class="skill-tag">{{ tag }}</span>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  margin-top: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 2rem;
  border-left: 1px solid var(--border-2);
}

.timeline-item {
  position: relative;
  padding: 0 0 2.5rem 2rem;
}
.timeline-item:last-child { padding-bottom: 0; }

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 0.25rem;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border-2);
  border: 2px solid var(--bg);
  z-index: 1;
}

.timeline-item.current .timeline-dot {
  background: var(--accent);
  border-color: var(--bg);
}

.pulse-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid var(--accent);
  opacity: 0.4;
  animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse-ring {
  0%   { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(2.2); opacity: 0; }
}

.timeline-card {
  padding: 1.375rem 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.card-role {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
}

.card-company {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 500;
  margin-top: 0.25rem;
}

.card-info {
  text-align: right;
  flex-shrink: 0;
}

.card-period {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-3);
}

.card-location {
  font-size: 0.8rem;
  color: var(--text-3);
}

.card-summary {
  font-size: 0.9rem;
  color: var(--text-2);
  line-height: 1.7;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--border);
}

.card-points {
  margin: 0 0 1rem;
  padding-left: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-points li {
  font-size: 0.9rem;
  color: var(--text-2);
  line-height: 1.65;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 600px) {
  .timeline {
    padding-left: 1.25rem;
  }
  .timeline-item {
    padding-left: 1.25rem;
  }
  .timeline-dot {
    left: -1.25rem;
  }
  .card-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  .card-info {
    text-align: left;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pulse-ring { animation: none; }
}
</style>
