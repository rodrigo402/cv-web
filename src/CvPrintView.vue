<script setup lang="ts">
import { experience, techStack, education, courses, profile } from '@/data/cv'

const mainExp = experience.filter(e =>
  e.company === 'Pepper Labs' || e.company === 'SG Financial Technology – Ágil Pagos'
)

const prevExp = experience.filter(e =>
  e.company !== 'Pepper Labs' && e.company !== 'SG Financial Technology – Ágil Pagos'
)

const pepperPoints = [
  'Responsable del ecosistema completo: app Flutter (Android/iOS), backend Laravel 8 y Backoffice Web Vue.js.',
  'Diseño e implementación de funcionalidades end-to-end integrando las tres capas del producto.',
  'Desarrollo de soluciones White Label multi-entidad con branding configurable sobre un único core de negocio.',
  'Integración de APIs REST y servicios SOAP con sistemas financieros externos; flujos de onboarding, autenticación biométrica y compliance.',
  'Gestión de múltiples ambientes (Dev, QA, UAT, Producción), resolución de incidentes y migraciones de Flutter.',
]

const sgPoints = [
  'Desarrollo de aplicaciones Flutter para Android e iOS en contexto fintech, cubriendo arquitectura, implementación y publicación.',
  'Gestión de estado con patrón BLoC; integración de Firebase, notificaciones push y APIs REST con autenticación por token.',
  'Implementación de login biométrico y persistencia segura de sesión y preferencias de usuario.',
  'Migración de Flutter Dart a versiones actualizadas; despliegue en Google Play y App Store.',
]

const capabilities = [
  {
    title: 'Ecosistema de billeteras white label',
    desc: 'Apps Flutter multi-entidad con branding configurable por cliente sobre un único core de negocio escalable.',
  },
  {
    title: 'Full Stack end-to-end',
    desc: 'Desarrollo integrado Flutter + Laravel 8 + Vue.js cubriendo mobile, backend y panel administrativo.',
  },
  {
    title: 'CI/CD y despliegue',
    desc: 'Pipelines GitHub Actions, GitLab CI y Codemagic para builds, firma y publicación en Google Play y App Store.',
  },
  {
    title: 'Seguridad y compliance',
    desc: 'Flujos de onboarding, autenticación biométrica, tokens seguros y gestión de sesión en apps financieras.',
  },
]

const relevantCourses = courses.slice(0, 4)
</script>

<template>
  <div class="cv-root">

    <!-- ══ HEADER ══ -->
    <header class="cv-header">
      <div class="hd-left">
        <h1 class="hd-name">Rodrigo Gabriel Reynoso</h1>
        <p class="hd-title">Flutter &amp; Full Stack Developer</p>
        <p class="hd-tagline">Mobile · Fintech · White Label</p>
        <p class="hd-loc">Santa Fe, Argentina · Trabajo remoto</p>
      </div>
      <div class="hd-right">
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <a href="https://linkedin.com/in/rodrigo-gabriel-reynoso-00194a1b1" target="_blank">linkedin.com/in/rodrigo-gabriel-reynoso</a>
        <a href="https://github.com/rodrigo402" target="_blank">github.com/rodrigo402</a>
        <a href="https://rodrigo402.github.io/cv-web/" target="_blank">rodrigo402.github.io/cv-web</a>
      </div>
    </header>
    <div class="accent-bar" />

    <!-- ══ PERFIL ══ -->
    <section class="cv-section">
      <h2 class="sec-title">Perfil profesional</h2>
      <p class="profile-text">{{ profile.bio }}</p>
    </section>

    <!-- ══ EXPERIENCIA PRINCIPAL ══ -->
    <section class="cv-section">
      <h2 class="sec-title">Experiencia</h2>

      <!-- Pepper Labs -->
      <div class="exp-card main-exp">
        <div class="exp-head">
          <div class="exp-head-left">
            <span class="exp-company">Pepper Labs</span>
            <span class="exp-role">Desarrollador Full Stack</span>
          </div>
          <div class="exp-head-right">
            <span class="exp-period">Dic 2022 – Actualidad</span>
            <span class="exp-loc">Montevideo, Uruguay · Remoto</span>
          </div>
        </div>
        <p class="exp-summary">
          Responsable del desarrollo y evolución del ecosistema tecnológico de una plataforma Fintech White Label: aplicaciones móviles en Flutter, backend en Laravel 8 y Backoffice administrativo en Vue.js.
        </p>
        <ul class="exp-bullets">
          <li v-for="p in pepperPoints" :key="p">{{ p }}</li>
        </ul>
        <div class="exp-tags">
          <span v-for="t in ['Flutter', 'Dart', 'Laravel 8', 'PHP 8', 'MySQL', 'Vue.js', 'REST APIs', 'SOAP', 'Firebase', 'CI/CD']" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>

      <!-- SG Financial -->
      <div class="exp-card">
        <div class="exp-head">
          <div class="exp-head-left">
            <span class="exp-company">SG Financial Technology – Ágil Pagos</span>
            <span class="exp-role">Desarrollador Front-end</span>
          </div>
          <div class="exp-head-right">
            <span class="exp-period">Oct 2021 – Jul 2024</span>
            <span class="exp-loc">Argentina</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li v-for="p in sgPoints" :key="p">{{ p }}</li>
        </ul>
        <div class="exp-tags">
          <span v-for="t in ['Flutter', 'Dart', 'BLoC', 'Firebase', 'REST API', 'Biometría', 'Angular']" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
    </section>

    <!-- ══ PAGE 2 ══ -->
    <div class="page-break" />

    <!-- ══ CAPACIDADES ══ -->
    <section class="cv-section">
      <h2 class="sec-title">Capacidades destacadas</h2>
      <div class="cap-grid">
        <div v-for="c in capabilities" :key="c.title" class="cap-item">
          <p class="cap-title">{{ c.title }}</p>
          <p class="cap-desc">{{ c.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ══ EXPERIENCIA PREVIA ══ -->
    <section class="cv-section">
      <h2 class="sec-title">Experiencia previa</h2>
      <table class="prev-table">
        <tbody>
          <tr v-for="e in prevExp" :key="e.company + e.role">
            <td class="prev-company">{{ e.company }}</td>
            <td class="prev-role">{{ e.role }}</td>
            <td class="prev-period">{{ e.period }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- ══ STACK ══ -->
    <section class="cv-section">
      <h2 class="sec-title">Stack tecnológico</h2>
      <div class="stack-grid">
        <div v-for="cat in techStack" :key="cat.name" class="stack-cat">
          <p class="stack-cat-name">{{ cat.name }}</p>
          <p class="stack-skills">{{ cat.skills.join(' · ') }}</p>
        </div>
      </div>
    </section>

    <!-- ══ FORMACIÓN + CURSOS + IDIOMAS ══ -->
    <section class="cv-section bottom-grid">

      <div class="bottom-col">
        <h2 class="sec-title">Formación</h2>
        <div v-for="e in education" :key="e.degree" class="edu-item">
          <p class="edu-degree">{{ e.degree }}</p>
          <p class="edu-inst">{{ e.institution }} · {{ e.period }}</p>
        </div>

        <h2 class="sec-title mt-sm">Idiomas</h2>
        <p class="lang-line"><strong>Español</strong> — Nativo</p>
        <p class="lang-line"><strong>Inglés</strong> — Técnico (B1)</p>
      </div>

      <div class="bottom-col">
        <h2 class="sec-title">Cursos y certificaciones</h2>
        <div v-for="c in relevantCourses" :key="c.title" class="course-item">
          <p class="course-title">{{ c.title }}</p>
          <p class="course-prov">{{ c.provider }}</p>
        </div>
      </div>

    </section>

  </div>
</template>

<style>
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: #ffffff;
  color: #18181b;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  line-height: 1.55;
}

a {
  color: inherit;
  text-decoration: none;
}

@page {
  size: A4;
  margin: 14mm 16mm;
}

/* ── Root ── */
.cv-root {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 28px 0 20px;
  color: #18181b;
}

/* For screen preview */
@media screen {
  body { background: #e8e8ed; padding: 24px; }
  .cv-root { background: #fff; padding: 40px 48px; box-shadow: 0 4px 24px rgba(0,0,0,.14); border-radius: 4px; max-width: 762px; }
}

@media print {
  body { background: #fff; padding: 0; }
  .cv-root { max-width: 100%; padding: 0; box-shadow: none; border-radius: 0; }
}

/* ── Header ── */
.cv-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 10px;
}

.hd-name {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #09090b;
  line-height: 1.05;
  margin-bottom: 5px;
}

.hd-title {
  font-size: 13px;
  font-weight: 600;
  color: #7c3aed;
  margin-bottom: 2px;
}

.hd-tagline {
  font-size: 11px;
  color: #71717a;
  margin-bottom: 3px;
}

.hd-loc {
  font-size: 10.5px;
  color: #71717a;
}

.hd-right {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 4px;
  flex-shrink: 0;
}

.hd-right a {
  font-size: 10px;
  color: #52525b;
}

.accent-bar {
  height: 2px;
  background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 60%, transparent 100%);
  margin-bottom: 14px;
  border-radius: 1px;
}

/* ── Sections ── */
.cv-section {
  margin-bottom: 14px;
  page-break-inside: avoid;
  break-inside: avoid;
}

.sec-title {
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #7c3aed;
  margin-bottom: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid #e4e4e7;
}

/* ── Profile ── */
.profile-text {
  font-size: 11.5px;
  color: #3f3f46;
  line-height: 1.65;
}

/* ── Experience cards ── */
.exp-card {
  margin-bottom: 10px;
  padding-left: 10px;
  border-left: 2.5px solid #e4e4e7;
  page-break-inside: avoid;
  break-inside: avoid;
}

.exp-card.main-exp {
  border-left-color: #7c3aed;
}

.exp-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 5px;
}

.exp-head-left {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.exp-company {
  font-size: 12.5px;
  font-weight: 700;
  color: #09090b;
}

.exp-role {
  font-size: 11px;
  font-weight: 500;
  color: #7c3aed;
}

.exp-head-right {
  text-align: right;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.exp-period {
  font-size: 10px;
  color: #71717a;
  font-weight: 500;
}

.exp-loc {
  font-size: 9.5px;
  color: #a1a1aa;
}

.exp-summary {
  font-size: 11px;
  color: #52525b;
  line-height: 1.6;
  margin-bottom: 5px;
  font-style: italic;
}

.exp-bullets {
  list-style: none;
  padding: 0;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.exp-bullets li {
  font-size: 11px;
  color: #3f3f46;
  line-height: 1.5;
  padding-left: 12px;
  position: relative;
}

.exp-bullets li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #7c3aed;
  font-size: 9px;
  top: 1px;
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  font-size: 9.5px;
  font-weight: 500;
  color: #52525b;
  background: #f4f4f5;
  border: 1px solid #e4e4e7;
  border-radius: 4px;
  padding: 1px 6px;
}

/* ── Page break ── */
.page-break {
  page-break-before: always;
  break-before: page;
  height: 0;
}

@media screen {
  .page-break {
    height: 32px;
    background: transparent;
    border-top: 2px dashed #d4d4d8;
    margin: 20px -48px;
    position: relative;
  }
  .page-break::after {
    content: 'Página 2';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 9px;
    color: #a1a1aa;
    background: #fff;
    padding: 0 8px;
  }
}

/* ── Capabilities ── */
.cap-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.cap-item {
  padding: 7px 10px;
  background: #f9f9fb;
  border: 1px solid #e4e4e7;
  border-left: 3px solid #7c3aed;
  border-radius: 0 4px 4px 0;
  page-break-inside: avoid;
  break-inside: avoid;
}

.cap-title {
  font-size: 10.5px;
  font-weight: 700;
  color: #09090b;
  margin-bottom: 2px;
}

.cap-desc {
  font-size: 10px;
  color: #52525b;
  line-height: 1.5;
}

/* ── Previous experience ── */
.prev-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 10.5px;
}

.prev-table tr {
  border-bottom: 1px solid #f4f4f5;
}

.prev-table tr:last-child {
  border-bottom: none;
}

.prev-table td {
  padding: 4px 0;
  vertical-align: top;
}

.prev-company {
  font-weight: 600;
  color: #18181b;
  width: 38%;
  padding-right: 8px;
}

.prev-role {
  color: #52525b;
  width: 40%;
  padding-right: 8px;
}

.prev-period {
  color: #a1a1aa;
  text-align: right;
  width: 22%;
  white-space: nowrap;
}

/* ── Stack ── */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.stack-cat {
  padding: 6px 8px;
  background: #f9f9fb;
  border: 1px solid #e4e4e7;
  border-radius: 4px;
  page-break-inside: avoid;
  break-inside: avoid;
}

.stack-cat-name {
  font-size: 9.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #7c3aed;
  margin-bottom: 3px;
}

.stack-skills {
  font-size: 9.5px;
  color: #52525b;
  line-height: 1.5;
}

/* ── Bottom grid ── */
.bottom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  page-break-inside: avoid;
  break-inside: avoid;
}

.bottom-col {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.bottom-col .sec-title {
  margin-top: 0;
}

.mt-sm { margin-top: 12px; }

.edu-item {
  margin-bottom: 6px;
  page-break-inside: avoid;
  break-inside: avoid;
}

.edu-degree {
  font-size: 10.5px;
  font-weight: 600;
  color: #18181b;
}

.edu-inst {
  font-size: 9.5px;
  color: #71717a;
}

.lang-line {
  font-size: 10.5px;
  color: #3f3f46;
  margin-bottom: 2px;
}

.lang-line strong {
  color: #18181b;
  font-weight: 600;
}

.course-item {
  margin-bottom: 5px;
  page-break-inside: avoid;
  break-inside: avoid;
}

.course-title {
  font-size: 10.5px;
  font-weight: 500;
  color: #18181b;
  line-height: 1.35;
}

.course-prov {
  font-size: 9px;
  color: #71717a;
}
</style>
