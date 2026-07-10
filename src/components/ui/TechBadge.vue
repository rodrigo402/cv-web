<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="tech-badge">{{ label }}</span>
</template>

<style scoped>
.tech-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-2);
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.25rem 0.6rem;
  transition: all var(--t);
  cursor: default;
}
.tech-badge:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
}
</style>
