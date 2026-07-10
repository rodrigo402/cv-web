<script setup lang="ts">
import { useIntersection } from '@/composables/useIntersection'
import { projects } from '@/data/cv'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const { el: headerEl, visible: headerVisible } = useIntersection()
const { el: gridEl, visible: gridVisible } = useIntersection()
</script>

<template>
  <main class="page">
    <div ref="headerEl" :class="['fade-up', { visible: headerVisible }]">
      <p class="section-label">// proyectos</p>
      <h2 class="section-title">Portfolio.</h2>
      <div class="section-bar" />
      <p class="intro">
        Proyectos personales y prácticos desarrollados durante mi formación y trabajo.
        Hacé click en cualquier proyecto para verlo en vivo.
      </p>
    </div>

    <div ref="gridEl" class="grid">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        :class="['fade-up', `d${Math.min(i + 1, 6)}`, { visible: gridVisible }]"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.intro {
  max-width: 540px;
  margin-bottom: 2.5rem;
  font-size: 0.9375rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
