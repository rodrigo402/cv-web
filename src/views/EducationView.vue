<script setup lang="ts">
import { useIntersection } from '@/composables/useIntersection'
import { education, courses } from '@/data/cv'

const { el: headerEl, visible: headerVisible } = useIntersection()
const { el: eduEl, visible: eduVisible } = useIntersection()
const { el: courseEl, visible: courseVisible } = useIntersection()
</script>

<template>
  <main class="page">
    <div ref="headerEl" :class="['fade-up', { visible: headerVisible }]">
      <p class="section-label">// formación</p>
      <h2 class="section-title">Educación.</h2>
      <div class="section-bar" />
    </div>

    <!-- Formal education -->
    <section ref="eduEl" class="edu-section">
      <h3 :class="['subsection-title', 'fade-up', { visible: eduVisible }]">Formación Académica</h3>

      <div class="edu-grid">
        <div
          v-for="(item, i) in education"
          :key="i"
          :class="['edu-card', 'fade-up', `d${i + 1}`, { visible: eduVisible }]"
        >
          <div class="card-head">
            <span class="mono-chip">{{ item.period }}</span>
            <span class="card-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ item.location }}
            </span>
          </div>
          <h4 class="card-degree">{{ item.degree }}</h4>
          <p class="card-institution">{{ item.institution }}</p>
          <ul class="card-items">
            <li v-for="it in item.items" :key="it">
              <span class="bullet">▸</span>{{ it }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Courses -->
    <section ref="courseEl" class="course-section">
      <h3 :class="['subsection-title', 'fade-up', { visible: courseVisible }]">Cursos & Certificaciones</h3>

      <div class="course-grid">
        <div
          v-for="(course, i) in courses"
          :key="i"
          :class="['course-card', 'fade-up', `d${i + 1}`, { visible: courseVisible }]"
        >
          <div class="course-provider">
            <span class="provider-badge">{{ course.provider }}</span>
          </div>
          <h4 class="course-title">{{ course.title }}</h4>
          <ul class="card-items">
            <li v-for="it in course.items" :key="it">
              <span class="bullet">▸</span>{{ it }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.subsection-title {
  font-size: 1.0625rem;
  color: var(--text-2);
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

/* Formal education */
.edu-section { margin-bottom: 4rem; }

.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.edu-card, .course-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  transition: border-color var(--t), box-shadow var(--t);
}
.edu-card:hover, .course-card:hover {
  border-color: var(--accent);
  box-shadow: var(--accent-glow);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card-location {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-3);
}
.card-location svg { width: 11px; height: 11px; }

.card-degree {
  font-size: 1.0625rem;
  color: var(--text);
  line-height: 1.3;
}

.card-institution {
  font-size: 0.8125rem;
  color: var(--text-3);
}

.card-items {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.card-items li {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-2);
  line-height: 1.55;
}

.bullet {
  color: var(--accent);
  font-size: 0.65rem;
  flex-shrink: 0;
}

/* Courses */
.course-section {}

.course-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.course-provider {
  margin-bottom: 0.25rem;
}

.provider-badge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  background: var(--accent-dim);
  border-radius: 4px;
  padding: 0.2rem 0.55rem;
}

.course-title {
  font-size: 0.9375rem;
  color: var(--text);
  line-height: 1.4;
}

@media (max-width: 680px) {
  .edu-grid, .course-grid {
    grid-template-columns: 1fr;
  }
}
</style>
