<script setup lang="ts">
import { useIntersection } from '@/composables/useIntersection'
import { profile, skills } from '@/data/cv'

const { el: headerEl, visible: headerVisible } = useIntersection()
const { el: infoEl, visible: infoVisible } = useIntersection()
const { el: skillsEl, visible: skillsVisible } = useIntersection()
</script>

<template>
  <main class="page">
    <div ref="headerEl" :class="['fade-up', { visible: headerVisible }]">
      <p class="section-label">// sobre mí</p>
      <h2 class="section-title">Quién soy.</h2>
      <div class="section-bar" />
    </div>

    <div class="about-grid">
      <div class="photo-col">
        <div ref="infoEl" :class="['photo-wrap', 'fade-up', { visible: infoVisible }]">
          <img :src="profile.photo" :alt="`Foto de ${profile.name}`" class="photo" />
        </div>
      </div>

      <div class="info-col">
        <div :class="['fade-up', 'd1', { visible: infoVisible }]">
          <h3 class="name">{{ profile.name }}</h3>
          <p class="role-line">{{ profile.role }}</p>
        </div>

        <div :class="['info-grid', 'fade-up', 'd2', { visible: infoVisible }]">
          <div class="info-item">
            <span class="info-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Ubicación
            </span>
            <span class="info-value">{{ profile.location }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </span>
            <a :href="`mailto:${profile.email}`" class="info-link">{{ profile.email }}</a>
          </div>
          <div class="info-item">
            <span class="info-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Teléfono
            </span>
            <a :href="`tel:${profile.phone}`" class="info-link">{{ profile.phone }}</a>
          </div>
          <div class="info-item">
            <span class="info-label">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </span>
            <a :href="profile.github" target="_blank" rel="noopener" class="info-link">rodrigo402</a>
          </div>
        </div>
      </div>
    </div>

    <div ref="skillsEl" class="skills-section">
      <div :class="['fade-up', { visible: skillsVisible }]">
        <p class="section-label">// habilidades</p>
        <h3 class="skills-title">Tech stack & herramientas.</h3>
      </div>

      <div class="skills-grid">
        <div
          v-for="(group, i) in skills"
          :key="group.category"
          :class="['skill-group', 'fade-up', `d${i + 1}`, { visible: skillsVisible }]"
        >
          <div class="group-header">
            <span class="group-icon">{{ group.icon }}</span>
            <h4 class="group-title">{{ group.category }}</h4>
          </div>
          <div class="tag-list">
            <span v-for="item in group.items" :key="item" class="skill-tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3.5rem;
  align-items: start;
  margin-bottom: 5rem;
}

.photo-col { flex-shrink: 0; }

.photo-wrap {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, var(--accent), transparent 60%, var(--accent-2));
  box-shadow: var(--accent-glow);
}
.photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg);
}

.info-col {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.name {
  font-size: 1.625rem;
  color: var(--text);
  margin-bottom: 0.25rem;
}
.role-line {
  font-size: 0.9375rem;
  color: var(--accent);
  font-family: var(--font-mono);
  font-weight: 400;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-3);
}
.info-label svg { width: 12px; height: 12px; }

.info-value, .info-link {
  font-size: 0.9375rem;
  color: var(--text-2);
}
.info-link {
  transition: color var(--t);
}
.info-link:hover { color: var(--accent); }

/* Skills */
.skills-section { margin-top: 1rem; }

.skills-title {
  color: var(--text);
  margin: 0.4rem 0 2.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.skill-group {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.375rem;
  transition: border-color var(--t);
}
.skill-group:hover { border-color: var(--accent); }

.group-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.group-icon { font-size: 1.125rem; }
.group-title {
  font-size: 0.9375rem;
  color: var(--text);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 760px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .photo-col { display: flex; justify-content: center; }
  .photo-wrap { width: 150px; height: 150px; }
  .info-grid { grid-template-columns: 1fr; }
  .info-item { align-items: center; }
  .skills-grid { grid-template-columns: 1fr; }
}

@media (min-width: 761px) and (max-width: 1020px) {
  .skills-grid { grid-template-columns: 1fr 1fr; }
}
</style>
