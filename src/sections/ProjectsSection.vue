<script setup lang="ts">
import { projects } from '@/data/cv'
import ProjectCase from '@/components/ui/ProjectCase.vue'
import { useIntersection } from '@/composables/useIntersection'

const { el, visible } = useIntersection()
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-heading" ref="el">
    <div class="section-inner" :class="{ 'fade-up': true, visible }">
      <div class="section-label">
        <span class="mono-chip">03</span>
        <span>Proyectos</span>
      </div>

      <h2 id="projects-heading" class="section-title">
        Casos <span class="gradient-text">de trabajo</span>
      </h2>

      <p class="section-sub">
        Proyectos representativos del tipo de problemas que resuelvo y el impacto que genero.
      </p>

      <div class="cases-grid">
        <ProjectCase
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-sub {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: var(--text-3);
  max-width: 520px;
}

.cases-grid {
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

@media (max-width: 480px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
