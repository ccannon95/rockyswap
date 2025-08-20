<template>
  <div class="win95-taskbar" role="navigation">

      <img src="./rocky.png" alt="" class="rock-icon" width="14" height="14" />



    <!-- Open window button(s) -->
    <div class="task-buttons">
      <button class="win95-btn task" type="button"><span><img src="./rswapp.svg" alt="" class="title" height="20px"/></span></button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'Swap')">Swap</button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'Earn')">Earn</button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'Pebbles')">Pebbles</button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'About')">About</button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'Chat')">Chat</button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'News')">News</button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'Docs')">Docs</button>
    </div>


    <!-- Tray -->
    <div class="tray" aria-label="System tray">
      <span class="clock" :title="isoNow">{{ timeStr }}</span>
      <button class="win95-btn connect" type="button" @click="$emit('connect')">Connect</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'



// --- Clock (updates every 10s) ---
const timeStr = ref('')
const isoNow  = ref('')
let timer: number | undefined
function tick() {
  const d = new Date()
  let h = d.getHours()
  const m = d.getMinutes().toString().padStart(2,'0')
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  timeStr.value = `${h}:${m} ${ampm}`
  isoNow.value  = d.toISOString()
}
onMounted(() => { tick(); timer = window.setInterval(tick, 10_000) })
onBeforeUnmount(() => { if (timer) clearInterval(timer) })

// Placeholder for wiring later
function noop() { /* route or dispatch when ready */ }
</script>

<style scoped>
/* ---- Windows 95 palette ---- */
:root, .win95-taskbar {
  --face: #c0c0c0;
  --light: #ffffff;
  --shadow: #808080;
  --dark: #404040;
  --text: #000;
  --menu: #f2f2f2;
  --menu-shadow: rgba(0,0,0,.25);
}

.win95-taskbar {
  position: fixed;
  inset-inline: 0;
  inset-block-end: 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  background: var(--face);
  border-top: 2px solid var(--light);
  box-shadow: inset 0 -1px 0 var(--shadow);
  z-index: 9999;
  font-family: Tahoma, Verdana, "MS Sans Serif", system-ui, sans-serif;
  color: var(--text);
}

/* Add bottom padding to your page so content isn't hidden by the bar */
:global(body) { padding-bottom: 44px; }

/* --- Buttons (beveled) --- */
.win95-btn {
  appearance: none;
  border: none;
  background: var(--face);
  padding: 6px 10px;
  font: 700 13px/1 Tahoma, Verdana, "MS Sans Serif", sans-serif;
  color: var(--text);
  box-shadow:
    inset -1px -1px 0 var(--dark),
    inset  1px  1px 0 var(--light),
    inset -2px -2px 0 var(--shadow),
    inset  2px  2px 0 #dfdfdf;
}
.win95-btn:active,
.win95-btn.pressed {
  box-shadow:
    inset  1px  1px 0 var(--dark),
    inset -1px -1px 0 var(--light),
    inset  2px  2px 0 var(--shadow),
    inset -2px -2px 0 #dfdfdf;
}
.win95-btn:focus-visible { outline: 1px dotted #000; outline-offset: -4px; }

/* Start button specifics */
.start { display: inline-flex; align-items: center; gap: 8px; }
.rock-icon { font-size: 14px; }

/* Task buttons area grows */
.task-buttons { display: flex; gap: 8px; min-inline-size: 0; }
.task { font-weight: 400; }

/* Tray / clock */
.tray { display: flex; align-items: center; gap: 8px; }
.clock {
  padding: 6px 10px;
  background: var(--face);
  box-shadow:
    inset -1px -1px 0 var(--dark),
    inset  1px  1px 0 var(--light),
    inset -2px -2px 0 var(--shadow),
    inset  2px  2px 0 #dfdfdf;
  font: 400 13px/1 Tahoma, Verdana, "MS Sans Serif", sans-serif;
}

/* --- Start menu panel --- */
.start-menu {
  position: fixed;
  inset-block-end: 44px;   /* sits above taskbar */
  inset-inline-start: 8px; /* aligned to Start */
  min-inline-size: 220px;
  background: var(--menu);
  border: 1px solid var(--shadow);
  box-shadow: 2px 2px 0 var(--dark), -1px -1px 0 var(--light),
              0 8px 24px var(--menu-shadow);
  padding: 6px;
  z-index: 10000;
}
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-item {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--text);
  padding: 8px 10px;
  font: 400 13px/1.2 Tahoma, Verdana, "MS Sans Serif", sans-serif;
}
.menu-item:hover,
.menu-item:focus { background: #000080; color: #fff; outline: none; }
.separator { margin: 6px 0; border-top: 1px solid var(--shadow); }
</style>
