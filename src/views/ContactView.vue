<script setup lang="ts">
import { useIntersection } from '@/composables/useIntersection'
import { profile } from '@/data/cv'

const { el: headerEl, visible: headerVisible } = useIntersection()
const { el: cardsEl, visible: cardsVisible } = useIntersection()

const contacts = [
  {
    icon: 'email',
    label: 'Email',
    display: profile.email,
    href: `mailto:${profile.email}`,
    desc: 'Respondido en menos de 24 hs',
  },
  {
    icon: 'phone',
    label: 'Teléfono',
    display: profile.phone,
    href: `tel:${profile.phone}`,
    desc: 'Disponible de lunes a viernes',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    display: 'Rodrigo Gabriel Reynoso',
    href: profile.linkedin,
    desc: 'Conectemos profesionalmente',
    external: true,
  },
  {
    icon: 'github',
    label: 'GitHub',
    display: 'rodrigo402',
    href: profile.github,
    desc: 'Revisá mis proyectos',
    external: true,
  },
]
</script>

<template>
  <main class="page">
    <div ref="headerEl" :class="['header-block', 'fade-up', { visible: headerVisible }]">
      <p class="section-label">// contacto</p>
      <h2 class="section-title">Hablemos.</h2>
      <div class="section-bar" />
      <p class="intro">
        Estoy abierto a nuevas oportunidades laborales, proyectos freelance o simplemente charlar
        sobre tecnología. ¡No dudes en escribirme!
      </p>
    </div>

    <div ref="cardsEl" class="contact-grid">
      <a
        v-for="(c, i) in contacts"
        :key="c.label"
        :href="c.href"
        :target="c.external ? '_blank' : undefined"
        :rel="c.external ? 'noopener noreferrer' : undefined"
        :class="['contact-card', 'fade-up', `d${i + 1}`, { visible: cardsVisible }]"
      >
        <div class="card-icon">
          <!-- Email -->
          <svg v-if="c.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <!-- Phone -->
          <svg v-else-if="c.icon === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <!-- LinkedIn -->
          <svg v-else-if="c.icon === 'linkedin'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <!-- GitHub -->
          <svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </div>

        <div class="card-body">
          <span class="card-label">{{ c.label }}</span>
          <span class="card-value">{{ c.display }}</span>
          <span class="card-desc">{{ c.desc }}</span>
        </div>

        <div class="card-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </a>
    </div>
  </main>
</template>

<style scoped>
.header-block { margin-bottom: 0; }

.intro {
  max-width: 500px;
  font-size: 1rem;
  margin-bottom: 2.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.125rem;
  padding: 1.375rem 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--t);
  text-decoration: none;
}
.contact-card:hover {
  border-color: var(--accent);
  background: var(--surface-2);
  box-shadow: var(--accent-glow);
  transform: translateY(-2px);
}
.contact-card:hover .card-arrow { opacity: 1; transform: translateX(4px); }

.card-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--accent-dim);
  border: 1px solid rgba(139,92,246,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}
.card-icon svg { width: 20px; height: 20px; }

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.card-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
}

.card-value {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-desc {
  font-size: 0.78125rem;
  color: var(--text-3);
}

.card-arrow {
  color: var(--accent);
  opacity: 0;
  transition: opacity var(--t), transform var(--t);
  flex-shrink: 0;
}
.card-arrow svg { width: 16px; height: 16px; }

@media (max-width: 640px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
