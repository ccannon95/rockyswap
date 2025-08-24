<template>
  <div class="desktop">
    <template v-for="win in windows" :key="win.id">
      <ViewContainer
        v-if="win.open"
        :title="win.title"
        :z-index="win.zIndex"
        @bringToFront="bringToFront(win.id)"
        @close="closeWindow(win.id)"
      >
        <!-- slot content goes here -->
        <component v-if="win.component" :is="win.component" />
      </ViewContainer>

    </template>

    <Navbar @open-app="openWindow" />
  </div>
</template>
<script setup lang="ts">
import { ref, markRaw } from 'vue'
import Navbar from '../pages/components/tinybits/NavBar.vue';
import ViewContainer from './components/largebits/ViewContainer.vue';
import SwapApp from './components/apps/SwapApp.vue';
import DocsApp from './components/apps/DocsApp.vue';
import AboutApp from './components/apps/AboutApp.vue';
import EarnApp from './components/apps/EarnApp.vue';
import NoteBook from './components/apps/NoteBook.vue';
import NewsApp from './components/apps/NewsApp.vue';

// ---- Window registry (source-of-truth for the desktop) ----
const windows = ref([
  { id: 1, title: 'About', zIndex: 1, open: true, component: markRaw(AboutApp)},
  { id: 2, title: 'News', zIndex: 2, open: false, component: markRaw(NewsApp)},
  { id: 3, title: 'Swap', zIndex: 3, open: false, component: markRaw(SwapApp) },
  { id: 4, title: 'Earn', zIndex: 4, open: false, component: markRaw(EarnApp)},
  { id: 5, title: 'Pebbles', zIndex: 5, open: false, },
  { id: 6, title: 'Chat', zIndex: 6, open: false, },
  { id: 7, title: 'Docs', zIndex: 7, open: false, component: markRaw(DocsApp) },
  { id: 8, title: 'Notebook', zIndex: 8, open: false, component: markRaw(NoteBook) }
])


let zCounter = 3

// Bring a window to front (parent-managed stacking)
function bringToFront(id: number) {
  zCounter++
  const win = windows.value.find(w => w.id === id)
  if (win) win.zIndex = zCounter
}

// Close (hide) a window — we keep the object so position can persist later
function closeWindow(id: number) {
  const win = windows.value.find(w => w.id === id)
  if (win) win.open = false
}

// Open (show) a window — if it exists, un-minimize and bring to front.
function openWindow(title: string) {
  const existing = windows.value.find(w => w.title === title)
  if (existing) {
    existing.open = true
    zCounter++
    existing.zIndex = zCounter
    return
  }
  // new window template — adjust defaults as needed
  const newId = windows.value.length ? Math.max(...windows.value.map(w => w.id)) + 1 : 1
  zCounter++
  windows.value.push({ id: newId, title, zIndex: zCounter, open: true })
}

// Toggle convenience (open if closed, close if open)
function toggleWindow(title: string) {
  const win = windows.value.find(w => w.title === title)
  if (!win) { openWindow(title); return }
  win.open = !win.open
  if (win.open) {
    zCounter++
    win.zIndex = zCounter
  }
}
</script>

<style scoped>

</style>