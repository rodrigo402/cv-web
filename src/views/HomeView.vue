<script setup lang="ts">
import { profile } from '@/data/cv'
</script>

<template>
  <main class="home">
    <div class="blob" aria-hidden="true" />

    <div class="hero">
      <div class="hero-text">
        <span class="availability">
          <span class="availability-dot" />
          Disponible para oportunidades
        </span>

        <h1 class="name">
          Hola, soy<br />
          <span class="gradient-text">Rodrigo Reynoso</span>
        </h1>

        <p class="role">
          <span class="mono-chip">$ whoami</span>
          &nbsp;Analista de Sistemas · Front-end · Sysadmin
        </p>

        <p class="bio">{{ profile.bio }}</p>

        <div class="cta">
          <RouterLink to="/portfolio" class="btn btn-primary">
            Ver portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </RouterLink>
          <RouterLink to="/contact" class="btn btn-outline">Contactarme</RouterLink>
        </div>

        <div class="socials">
          <a :href="profile.github" target="_blank" rel="noopener" aria-label="GitHub" class="icon-link">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a :href="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="icon-link">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a :href="`mailto:${profile.email}`" aria-label="Email" class="icon-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>

      <div class="hero-photo">
        <div class="photo-ring">
          <img :src="profile.photo" :alt="`Foto de ${profile.name}`" />
        </div>
        <div class="photo-badge">
          <span class="badge-dot" />
          <span class="badge-text">Disponible</span>
        </div>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>Scroll</span>
      <span class="scroll-line" />
    </div>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

/* Background orb */
.blob {
  position: fixed;
  top: -30vh;
  right: -20vw;
  width: 70vw;
  height: 70vw;
  max-width: 700px;
  max-height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.07) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}
[data-theme='light'] .blob {
  background: radial-gradient(circle at center, rgba(124, 58, 237, 0.05) 0%, transparent 65%);
}

.hero {
  position: relative;
  z-index: 1;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: calc(var(--nav-h) + 4rem) var(--pad) 4rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

/* Text side */
.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
}

.name {
  line-height: 1.05;
  color: var(--text);
}

.role {
  font-size: 1rem;
  color: var(--text-2);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.bio {
  font-size: 1.0625rem;
  max-width: 480px;
}

.cta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn svg {
  width: 14px;
  height: 14px;
}

.socials {
  display: flex;
  gap: 0.5rem;
}

/* Photo side */
.hero-photo {
  position: relative;
  flex-shrink: 0;
}

.photo-ring {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, var(--accent), transparent 60%, var(--accent-2));
  box-shadow: var(--accent-glow);
}

.photo-ring img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg);
}

.photo-badge {
  position: absolute;
  bottom: 10px;
  right: -10px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-2);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--success);
  animation: pulse-dot 2.4s ease infinite;
}

/* Scroll hint */
.scroll-hint {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 var(--pad);
  max-width: var(--max-w);
  margin: 0 auto;
  padding-bottom: 2rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-3);
  letter-spacing: 0.08em;
}

.scroll-line {
  display: block;
  width: 40px;
  height: 1px;
  background: var(--border-2);
}

/* Responsive */
@media (max-width: 760px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
    padding-top: calc(var(--nav-h) + 3rem);
  }
  .hero-photo {
    order: -1;
    display: flex;
    justify-content: center;
  }
  .photo-ring {
    width: 180px;
    height: 180px;
  }
  .photo-badge { bottom: 4px; right: -4px; }
  .hero-text { align-items: center; }
  .bio { text-align: center; }
  .cta { justify-content: center; }
  .socials { justify-content: center; }
  .role { justify-content: center; }
  .scroll-hint { display: none; }
}
</style>
