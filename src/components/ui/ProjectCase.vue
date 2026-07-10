<script setup lang="ts">
import type { ProjectCase } from '@/types'
import TechBadge from '@/components/ui/TechBadge.vue'

defineProps<{
  project: ProjectCase
  index: number
}>()
</script>

<template>
  <article class="case">
    <div class="case-header">
      <span class="case-num">{{ String(index + 1).padStart(2, '0') }}</span>
      <h4 class="case-title">{{ project.title }}</h4>
    </div>

    <dl class="case-body">
      <div class="case-field">
        <dt>Contexto</dt>
        <dd>{{ project.context }}</dd>
      </div>
      <div class="case-field">
        <dt>Solución</dt>
        <dd>{{ project.solution }}</dd>
      </div>
      <div class="case-field">
        <dt>Rol</dt>
        <dd>{{ project.role }}</dd>
      </div>
      <div class="case-field">
        <dt>Impacto</dt>
        <dd>{{ project.impact }}</dd>
      </div>
    </dl>

    <div class="case-stack">
      <TechBadge v-for="s in project.stack" :key="s" :label="s" />
    </div>
  </article>
</template>

<style scoped>
.case {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color var(--t), transform var(--t), box-shadow var(--t);
}
.case:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--accent-glow);
}

.case-header {
  padding: 1.375rem 1.375rem 1rem;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(135deg, var(--accent-dim) 0%, transparent 80%);
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.case-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.06em;
}

.case-title {
  font-size: 0.9375rem;
  color: var(--text);
  line-height: 1.3;
}

.case-body {
  padding: 1.125rem 1.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex: 1;
}

.case-field dt {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-3);
  margin-bottom: 0.2rem;
  font-family: var(--font-mono);
}

.case-field dd {
  font-size: 0.875rem;
  color: var(--text-2);
  line-height: 1.65;
}

.case-stack {
  padding: 0 1.375rem 1.375rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}
</style>
