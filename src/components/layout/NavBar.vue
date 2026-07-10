<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const route = useRoute()
const open = ref(false)

const links = [
  { to: '/about', label: 'Sobre mí' },
  { to: '/experience', label: 'Experiencia' },
  { to: '/education', label: 'Educación' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contacto' },
]

watch(() => route.path, () => { open.value = false })
</script>

<template>
  <header class="nav-wrap">
    <nav class="nav">
      <RouterLink to="/" class="logo" aria-label="Inicio">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-name">RR</span>
        <span class="logo-bracket">/&gt;</span>
      </RouterLink>

      <ul class="links" role="list">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" class="nav-link" :class="{ active: route.path === link.to }">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="right">
        <ThemeToggle />
        <button class="hamburger" :class="{ open }" aria-label="Menú" @click="open = !open">
          <span /><span /><span />
        </button>
      </div>
    </nav>

    <Transition name="menu">
      <div v-if="open" class="mobile-menu">
        <ul role="list">
          <li v-for="link in links" :key="link.to">
            <RouterLink :to="link.to" class="mobile-link" :class="{ active: route.path === link.to }">
              {{ link.label }}
            </RouterLink>
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
  background: rgba(9, 9, 11, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  transition: background var(--t-slow);
}
[data-theme='light'] .nav-wrap {
  background: rgba(255, 255, 255, 0.8);
}

.nav {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--pad);
  height: var(--nav-h);
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Logo */
.logo {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.05rem;
  white-space: nowrap;
  margin-right: auto;
}
.logo-bracket { color: var(--accent); }
.logo-name { color: var(--text); margin: 0 0.1rem; }

/* Desktop links */
.links {
  display: flex;
  gap: 0.25rem;
}
.nav-link {
  font-size: 0.875rem;
  font-weight: 450;
  color: var(--text-3);
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius);
  transition: all var(--t);
  position: relative;
}
.nav-link:hover, .nav-link.active {
  color: var(--text);
}
.nav-link.active {
  color: var(--accent);
  background: var(--accent-dim);
}

/* Right controls */
.right {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
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
  transition: all var(--t);
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--bg);
  padding: 0.75rem var(--pad);
}
.mobile-link {
  display: block;
  padding: 0.75rem 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-2);
  border-bottom: 1px solid var(--border);
  transition: color var(--t);
}
.mobile-link:last-child { border-bottom: none; }
.mobile-link:hover, .mobile-link.active { color: var(--accent); }

.menu-enter-active, .menu-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 680px) {
  .links { display: none; }
  .hamburger { display: flex; }
}
</style>
