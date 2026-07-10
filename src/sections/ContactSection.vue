<script setup lang="ts">
import { profile } from '@/data/cv'
import { useIntersection } from '@/composables/useIntersection'

const { el, visible } = useIntersection()

const contacts = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'email',
    desc: 'Respuesta en menos de 24h',
  },
  {
    label: 'LinkedIn',
    value: 'rodrigo-reynoso',
    href: profile.linkedin,
    icon: 'linkedin',
    desc: 'Red profesional',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'rodrigo402',
    href: profile.github,
    icon: 'github',
    desc: 'Código y proyectos',
    external: true,
  },
  {
    label: 'Ubicación',
    value: profile.location,
    href: undefined,
    icon: 'location',
    desc: 'Disponible para trabajo remoto',
  },
]
</script>

<template>
  <section id="contact" class="section" aria-labelledby="contact-heading" ref="el">
    <div class="section-inner" :class="{ 'fade-up': true, visible }">
      <div class="section-label">
        <span class="mono-chip">06</span>
        <span>Contacto</span>
      </div>

      <h2 id="contact-heading" class="section-title">
        Hablemos de tu <span class="gradient-text">próximo proyecto</span>
      </h2>

      <p class="section-sub">
        Abierto a proyectos fintech, posiciones Flutter remotas y colaboraciones técnicas.
      </p>

      <div class="contact-grid">
        <component
          :is="c.href ? 'a' : 'div'"
          v-for="c in contacts"
          :key="c.label"
          :href="c.href"
          :target="c.external ? '_blank' : undefined"
          :rel="c.external ? 'noopener noreferrer' : undefined"
          class="contact-card card-base"
          :class="{ 'is-link': !!c.href }"
        >
          <div class="contact-icon">
            <!-- Email -->
            <svg v-if="c.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <!-- LinkedIn -->
            <svg v-else-if="c.icon === 'linkedin'" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <!-- GitHub -->
            <svg v-else-if="c.icon === 'github'" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <!-- Location -->
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>

          <div class="contact-body">
            <p class="contact-label">{{ c.label }}</p>
            <p class="contact-value">{{ c.value }}</p>
            <p class="contact-desc">{{ c.desc }}</p>
          </div>

          <svg v-if="c.href && c.external" class="ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          <svg v-else-if="c.href" class="ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-sub {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: var(--text-3);
  max-width: 480px;
}

.contact-grid {
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.contact-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  text-decoration: none;
  transition: border-color var(--t), transform var(--t), box-shadow var(--t);
  position: relative;
}

.contact-card.is-link:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--accent-glow);
}

.contact-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: var(--accent-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.contact-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
}

.contact-value {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text);
  word-break: break-all;
}

.contact-desc {
  font-size: 0.8125rem;
  color: var(--text-3);
}

.ext-icon {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: var(--text-3);
  opacity: 0;
  transition: opacity var(--t);
}

.contact-card.is-link:hover .ext-icon {
  opacity: 1;
  color: var(--accent);
}

@media (max-width: 480px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 360px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
