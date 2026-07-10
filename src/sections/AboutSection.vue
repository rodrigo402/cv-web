<script setup lang="ts">
import { profile } from '@/data/cv'
import { useIntersection } from '@/composables/useIntersection'

const { el, visible } = useIntersection()
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-heading" ref="el">
    <div class="section-inner" :class="{ 'fade-up': true, visible }">
      <div class="section-label">
        <span class="mono-chip">01</span>
        <span>Sobre mí</span>
      </div>

      <h2 id="about-heading" class="section-title">
        Construyo software <span class="gradient-text">que escala</span>
      </h2>

      <div class="about-grid">
        <div class="about-body">
          <p>
            Soy desarrollador Flutter con foco en aplicaciones fintech de alto impacto.
            Trabajo en el desarrollo de billeteras digitales y plataformas de pagos usadas por
            miles de usuarios en Argentina, integrando medios de pago, autenticación biométrica
            y arquitecturas limpias orientadas a escalabilidad.
          </p>
          <p>
            Mi stack cubre el ciclo completo: mobile con Flutter/Dart, backend con Laravel y
            microservicios REST/SOAP, integraciones con sistemas legados y automatización de
            pipelines CI/CD con GitHub Actions y Fastlane. Me interesa construir productos
            sólidos desde la arquitectura hasta la experiencia de usuario final.
          </p>
          <p>
            También tengo experiencia en desarrollo web (Angular, Vue) y en roles técnicos de
            soporte y consultoría, lo que me da una visión completa del ciclo de vida de los
            sistemas en producción.
          </p>
        </div>

        <ul class="about-facts" aria-label="Datos rápidos">
          <li class="fact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.29 6.29l.91-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z"/>
            </svg>
            <span>{{ profile.location }}</span>
          </li>
          <li class="fact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Inglés — Intermedio (B1)</span>
          </li>
          <li class="fact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>Trabajo remoto · Presencial · Híbrido</span>
          </li>
          <li class="fact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Flutter · Fintech · Full Stack</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 4rem;
  align-items: start;
  margin-top: 2.5rem;
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-body p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--text-2);
}

.about-facts {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  position: sticky;
  top: calc(var(--nav-h) + 1.5rem);
}

.fact-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.875rem;
  color: var(--text-2);
}

.fact-item svg {
  color: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .about-facts {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}
</style>
