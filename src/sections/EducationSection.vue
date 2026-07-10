<script setup lang="ts">
import { education, courses } from '@/data/cv'
import { useIntersection } from '@/composables/useIntersection'

const { el, visible } = useIntersection()
</script>

<template>
  <section id="education" class="section" aria-labelledby="education-heading" ref="el">
    <div class="section-inner" :class="{ 'fade-up': true, visible }">
      <div class="section-label">
        <span class="mono-chip">05</span>
        <span>Formación</span>
      </div>

      <h2 id="education-heading" class="section-title">
        Educación y <span class="gradient-text">certificaciones</span>
      </h2>

      <div class="edu-grid">
        <!-- Formal education -->
        <div class="edu-block">
          <h3 class="block-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Formación académica
          </h3>
          <ul class="edu-list" role="list">
            <li v-for="item in education" :key="item.degree" class="edu-card card-base">
              <div class="edu-header">
                <div>
                  <h4 class="edu-degree">{{ item.degree }}</h4>
                  <p class="edu-institution">{{ item.institution }}</p>
                </div>
                <div class="edu-right">
                  <time class="edu-period">{{ item.period }}</time>
                  <span class="edu-location">{{ item.location }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Courses -->
        <div class="edu-block">
          <h3 class="block-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Cursos y certificaciones
          </h3>
          <ul class="courses-list" role="list">
            <li v-for="course in courses" :key="course.title" class="course-item">
              <span class="course-dot" aria-hidden="true" />
              <div>
                <p class="course-title">{{ course.title }}</p>
                <p class="course-provider">{{ course.provider }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-grid {
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.block-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  margin-bottom: 1.25rem;
  font-family: var(--font-mono);
}

.block-title svg { color: var(--accent); }

.edu-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.edu-card {
  padding: 1.25rem 1.375rem;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.edu-degree {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
}

.edu-institution {
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 500;
  margin-top: 0.25rem;
}

.edu-right {
  text-align: right;
  flex-shrink: 0;
}

.edu-period {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-3);
}

.edu-location {
  font-size: 0.75rem;
  color: var(--text-3);
}

/* Courses — lower visual weight */
.courses-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surface);
}

.course-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border);
}
.course-item:last-child { border-bottom: none; }

.course-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 0.45rem;
}

.course-title {
  font-size: 0.875rem;
  color: var(--text-2);
  font-weight: 500;
  line-height: 1.4;
}

.course-provider {
  font-size: 0.78rem;
  color: var(--text-3);
  margin-top: 0.2rem;
  font-family: var(--font-mono);
}

@media (max-width: 720px) {
  .edu-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
