<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import ExperienceSection from '@/sections/ExperienceSection.vue'
import ProjectsSection from '@/sections/ProjectsSection.vue'
import StackSection from '@/sections/StackSection.vue'
import EducationSection from '@/sections/EducationSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import { useActiveSectionTracker } from '@/composables/useActiveSection'

useActiveSectionTracker([
  'hero',
  'about',
  'experience',
  'projects',
  'stack',
  'education',
  'contact',
])
</script>

<template>
  <NavBar />
  <div class="print-header" aria-hidden="true">
    <div class="print-header-left">
      <h1>Rodrigo Gabriel Reynoso</h1>
      <p>Flutter Developer · Full Stack · Fintech</p>
      <span>Santa Fe, Argentina · Disponible para trabajo remoto</span>
    </div>
    <div class="print-header-right">
      <a href="mailto:rodrigo.gabriel.reynoso@gmail.com">rodrigo.gabriel.reynoso@gmail.com</a>
      <a href="https://linkedin.com/in/rodrigo-gabriel-reynoso-00194a1b1">linkedin.com/in/rodrigo-gabriel-reynoso</a>
      <a href="https://github.com/rodrigo402">github.com/rodrigo402</a>
    </div>
  </div>
  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <StackSection />
    <EducationSection />
    <ContactSection />
  </main>
  <Footer />
</template>

<style>
main {
  outline: none;
}
</style>
