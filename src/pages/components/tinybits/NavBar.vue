<template>
  <div class="win95-taskbar" role="navigation">
    <button class="win95-btn start" type="button" @click="toggleStartMenu">
      <img src="./rswapp.svg" alt="Start" class="win-logo" height="20px" />
    </button>

    <div class="task-buttons">
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'Swap')">Swap</button>
      <button class="win95-btn task" type="button" @click="$emit('open-app', 'Earn')">Earn</button>
      </div>

    <div class="tray" aria-label="System tray">
      <button class="win95-btn connect" type="button" @click="$emit('connect')">Connect</button>
      <span class="clock" :title="isoNow">{{ timeStr }}</span>
    </div>

<div v-if="isStartMenuOpen" class="start-menu" @click.stop>
  <div class="menu-header">
  </div>
  <ul class="menu-list" @click="closeProgramsSubmenu">
    <li class="menu-item has-submenu" @click.stop="toggleProgramsSubmenu">
      Programs
      <ul v-show="showProgramsSubmenu" class="submenu">
        <li class="submenu-item" @click="$emit('open-app', 'Accessories')">Accessories</li>
        <li class="submenu-item" @click="$emit('open-app','Games')">Games</li>
        <li class="submenu-item" @click="$emit('open-app', 'Notebook')">Notebook</li>
        <li class="submenu-item" @click="$emit('open-app', 'Chat')">Chat</li>
        <li class="submenu-item" @click="$emit('open-app', 'Pebbles')">Pebbles</li>
        <li class="submenu-item" @click="$emit('open-app', 'News')">News</li>
        <li class="submenu-item" @click="$emit('open-app', 'About')">About</li>
        <!-- Add more subitems as needed -->
      </ul>
    </li>
    <li class="menu-item" @click="$emit('open-app', 'Documents')">Documents</li>
    <li class="menu-item" @click="$emit('open-app', 'Settings')">Settings</li>
    <li class="menu-item" @click="$emit('open-app', 'Find')">Find</li>
    <li class="menu-item" @click="$emit('open-app', 'Help')">Help</li>
    <li class="separator"></li>
    <li class="menu-item" @click="closeStartMenu">Run...</li>
    <li class="menu-item" @click="closeStartMenu">Shut Down...</li>
  </ul>
</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isStartMenuOpen = ref(false)
const showProgramsSubmenu = ref(false)

function toggleStartMenu() {
  isStartMenuOpen.value = !isStartMenuOpen.value
}

function toggleProgramsSubmenu() {
  showProgramsSubmenu.value = !showProgramsSubmenu.value
}

function closeProgramsSubmenu() {
  showProgramsSubmenu.value = false
}

function openSubApp(appName: string) {
  $emit('open-app', appName)
  closeProgramsSubmenu()
  isStartMenuOpen.value = false
}

function closeStartMenu(event: MouseEvent) {
  const startButton = document.querySelector('.start')
  if (startButton && !startButton.contains(event.target as Node)) {
    isStartMenuOpen.value = false
    closeProgramsSubmenu() // Also close submenu on outside clicks
  }
}

onMounted(() => {
  document.addEventListener('click', closeStartMenu)
  tick() // Initial clock tick
  timer = window.setInterval(tick, 10_000)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeStartMenu)
  if (timer) clearInterval(timer)
})

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

</script>

<style scoped>
/* ---- Windows 95 palette ---- */
:root, .win95-taskbar {
  --face: #f6f6f6;
  --light: #000;
  --shadow: #b80000;
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
  inset-block-end: 44px;
  inset-inline-start: 8px;
  min-inline-size: 220px;
  background: #f6f6f6;
  border: 1px solid var(--shadow);
  box-shadow: 2px 2px 0 var(--dark), -1px -1px 0 var(--light),
              0 8px 24px var(--menu-shadow);
  padding: 10px;
  z-index: 10000;
  
  /* Add the blue gradient bar */
  display: flex;
  flex-direction: column;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-item {
  width: 100%;
  text-align: center;
  background: transparent;
  color: #000;
  margin-bottom: 10px;
  padding-bottom: 2px;
  padding-top: 4px;
  padding-left: 1px;
  position: relative; /* For submenu positioning */
  box-shadow: 2px 2px 0 var(--dark), -1px -1px 0 var(--light);
  border: 2px solid #ff00ff;
  background: #ffff00;
  color: #000;
  border-radius: 10px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: larger;
}
.menu-item:hover,
.menu-item:focus {
  background: #000080;
  color: #fff;
  outline: none;
}


/* --- Submenu styles --- */
.has-submenu::after {
  content: '▶'; /* Right arrow indicator */
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text);
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 100%; /* Positions to the right */
  top: 0; /* Aligns top with parent item */
  background: var(--menu);
  border: 1px solid var(--shadow);
  box-shadow: 2px 2px 0 var(--dark), -1px -1px 0 var(--light),
              0 8px 24px var(--menu-shadow);
  min-inline-size: 180px; /* Adjust as needed */
  z-index: 10001; /* Above main menu */
}

.submenu-item {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--text);
  padding: 8px 10px;
  font: 400 15 Tahoma, Verdana, "MS Sans Serif", sans-serif;
}

.submenu-item:hover,
.submenu-item:focus {
  background: #000080;
  color: #fff;
  outline: none;
}
</style>