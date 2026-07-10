<script setup lang="ts">
import { techStack } from '@/data/cv'
import { useIntersection } from '@/composables/useIntersection'

const { el, visible } = useIntersection()
</script>

<template>
  <section id="stack" class="section" aria-labelledby="stack-heading" ref="el">
    <div class="section-inner" :class="{ 'fade-up': true, visible }">
      <div class="section-label">
        <span class="mono-chip">04</span>
        <span>Stack</span>
      </div>

      <h2 id="stack-heading" class="section-title">
        Tecnologías que <span class="gradient-text">uso</span>
      </h2>

      <div class="stack-grid">
        <article
          v-for="cat in techStack"
          :key="cat.name"
          class="stack-card card-base"
          :aria-label="cat.name"
        >
          <div class="stack-header">
            <span class="stack-icon" aria-hidden="true">{{ cat.icon }}</span>
            <h3 class="stack-name">{{ cat.name }}</h3>
          </div>

          <ul class="skill-list" role="list">
            <li v-for="skill in cat.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-grid {
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.125rem;
}

.stack-card {
  padding: 1.375rem 1.5rem;
  transition: border-color var(--t), transform var(--t), box-shadow var(--t);
}

.stack-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--accent-glow);
}

.stack-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.125rem;
}

.stack-icon {
  font-size: 1.25rem;
  line-height: 1;
}

.stack-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text);
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}
</style>
