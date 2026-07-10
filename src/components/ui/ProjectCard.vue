<script setup lang="ts">
import type { ProjectItem } from '@/types'

defineProps<{ project: ProjectItem }>()
</script>

<template>
  <a :href="project.url" target="_blank" rel="noopener noreferrer" class="card">
    <div class="img-wrap">
      <img :src="project.image" :alt="project.title" loading="lazy" />
      <div class="overlay">
        <span class="open-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      </div>
    </div>
    <div class="body">
      <h4 class="title">{{ project.title }}</h4>
      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--t);
}
.card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: var(--accent-glow);
}

.img-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.card:hover .img-wrap img {
  transform: scale(1.04);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--t);
}
.card:hover .overlay { opacity: 1; }

.open-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.open-icon svg {
  width: 20px;
  height: 20px;
}

.body {
  padding: 1rem 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.title {
  color: var(--text);
  font-size: 0.9375rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  background: var(--accent-dim);
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
}
</style>
