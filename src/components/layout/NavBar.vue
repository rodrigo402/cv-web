<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import { useActiveSection } from '@/composables/useActiveSection'

const { activeSection } = useActiveSection()
const menuOpen = ref(false)

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Formación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
]

function handleNav(href: string) {
  menuOpen.value = false
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function isActive(href: string) {
  return activeSection.value === href.replace('#', '')
}
</script>

<template>
  <header class="nav-wrap">
    <nav class="nav" aria-label="Navegación principal">
      <a href="#hero" class="logo" aria-label="Inicio" @click.prevent="handleNav('#hero')">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-name">RR</span>
        <span class="logo-bracket">/&gt;</span>
      </a>

      <ul class="links" role="list">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="nav-link"
            :class="{ active: isActive(link.href) }"
            :aria-current="isActive(link.href) ? 'page' : undefined"
            @click.prevent="handleNav(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="right">
        <ThemeToggle />
        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          :aria-expanded="menuOpen"
          aria-label="Abrir menú"
          @click="menuOpen = !menuOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>

    <Transition name="menu">
      <div v-if="menuOpen" class="mobile-menu" role="dialog" aria-label="Menú de navegación">
        <ul role="list">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="mobile-link"
              :class="{ active: isActive(link.href) }"
              @click.prevent="handleNav(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(9, 9, 11, 0.82);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid var(--border);
  transition: background var(--t-slow);
}
[data-theme='light'] .nav-wrap {
  background: rgba(255, 255, 255, 0.85);
}

.nav {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--pad);
  height: var(--nav-h);
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.05rem;
  white-space: nowrap;
  margin-right: auto;
  cursor: pointer;
}
.logo-bracket { color: var(--accent); }
.logo-name { color: var(--text); margin: 0 0.1rem; }

.links {
  display: flex;
  gap: 0.125rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 450;
  color: var(--text-3);
  padding: 0.4rem 0.7rem;
  border-radius: var(--radius);
  transition: all var(--t);
  cursor: pointer;
}
.nav-link:hover { color: var(--text); }
.nav-link.active {
  color: var(--accent);
  background: var(--accent-dim);
}

.right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 7px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
}
.hamburger span {
  display: block;
  width: 16px;
  height: 1.5px;
  background: var(--text-2);
  border-radius: 1px;
  transition: all 220ms ease;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--bg);
  padding: 0.5rem var(--pad) 1rem;
}
.mobile-link {
  display: block;
  padding: 0.75rem 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-2);
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: color var(--t);
}
.mobile-link:last-child { border-bottom: none; }
.mobile-link:hover,
.mobile-link.active { color: var(--accent); }

.menu-enter-active,
.menu-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; transform: translateY(-6px); }

@media (max-width: 700px) {
  .links { display: none; }
  .hamburger { display: flex; }
}
</style>
