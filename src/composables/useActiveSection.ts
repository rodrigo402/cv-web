import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('hero')

export function useActiveSection() {
  return { activeSection }
}

export function useActiveSectionTracker(ids: string[]) {
  const observers: IntersectionObserver[] = []

  onMounted(() => {
    const options: IntersectionObserverInit = {
      rootMargin: '-64px 0px -50% 0px',
      threshold: 0,
    }

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) activeSection.value = id
      }, options)
      obs.observe(el)
      observers.push(obs)
    })
  })

  onUnmounted(() => observers.forEach(o => o.disconnect()))
}
