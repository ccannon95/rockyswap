<template>
  <div :class="['desktop', { 'desktop--visible': desktop }]">
    <div
      class="win-window"
      role="dialog"
      :aria-label="title"
      :style="{
        left: posX + 'px',
        top: posY + 'px',
        zIndex: zIndex
      }"
      @mousedown="bringToFront"
    >
      <!-- Title bar -->
      <div
        class="titlebar"
        :class="{ 'titlebar--active': true }"
        @mousedown="onMouseDown"
      >
        <div class="titlebar-left">
          <span class="title-text">{{ title }}</span>
        </div>
        <div class="titlebar-right">
          <button class="win-btn small" @click="$emit('minimize')">-</button>
          <button class="win-btn small" @click="$emit('close')">✕</button>
        </div>
      </div>

      <!-- Content area -->
      <div class="content" role="document">
        <slot>
          <div class="example-placeholder">

          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: String,
  desktop: Boolean,
  zIndex: Number
})

const posX = ref(100)
const posY = ref(100)
let dragging = false
let offsetX = 0
let offsetY = 0
const emit = defineEmits(['bringToFront', 'minimize', 'close'])

function onMouseDown(e: MouseEvent) {
  dragging = true
  offsetX = e.clientX - posX.value
  offsetY = e.clientY - posY.value
}

function onMouseMove(e: MouseEvent) {
  if (dragging) {
    posX.value = e.clientX - offsetX
    posY.value = e.clientY - offsetY
  }
}

function onMouseUp() {
  dragging = false
}

function bringToFront() {
  emit('bringToFront')
}

window.addEventListener("mousemove", onMouseMove)
window.addEventListener("mouseup", onMouseUp)
</script>


<style scoped>


/* ===== Window chrome ===== */
.win-window {
  /* Let content size the window, but keep sane bounds */
  width: auto;                 /* allow flexible width */
  min-width: 520px;            /* floor */
  max-width: 760px;            /* ceiling */
  display: inline-block;       /* shrink-wrap without stretching */
  box-sizing: border-box;      /* include borders/padding in width */
  background: linear-gradient(#ddd, #cfcfcf);
  border: 2px solid var(--shadow);
  box-shadow:
    6px 6px 0 rgba(0,0,0,0.12),
    inset 0 1px 0 rgba(255,255,255,0.6);
  border-radius: var(--frame-radius);
  font-family: var(--font);
  color: #000;
  position: fixed;
  top: 100px;
  left: 100px;
}

/* Titlebar with beveled look */
.titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
  background: var(--active-caption); /* strong blue, 95 default */
  color: var(--caption-text, #fff);
  border-bottom: 2px solid var(--dark);
  height: 22px;
  font-size: 13px;
  user-select: none;
  cursor: move;
}


.title-text {
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0.2px;
  color: #fff; /* 95 caption text */
}


.titlebar-right {
  display: flex;
  gap: 2px;
}

.win-btn {
  background: var(--face);
  border: 2px solid;
  border-color: var(--light) var(--dark) var(--dark) var(--light);
  padding: 0 6px;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  box-shadow: none;
}

.win-btn:active {
  border-color: var(--dark) var(--light) var(--light) var(--dark);
  background: var(--button-highlight, #ccc);
}

.win-btn.small { 
    padding: 2px 6px; 
    height: 20px; 
    width: 28px; 
    display:inline-flex; 
    align-items:center; 
    justify-content:center; 
    color: #000;
    background-color: #ddd2d2;
    border: 2px solid #8f8f8f;
    box-shadow: outset -1px -1px 0 #fff, inset 1px 1px 0 #aaa;
    border-radius: 1px;
}



/* make inputs inside programs look Win95-y by default */
.content input[type="text"],
.content textarea,
.content select {
  font-family: var(--font);
  font-size: 13px;
  padding: 6px;
  border: 2px solid #8f8f8f;
  box-shadow: inset -1px -1px 0 #fff, inset 1px 1px 0 #aaa;
  background: #fff;
  color: #000;
}

/* small responsive tweak */
@media (max-width:640px){
  .win-window { width: calc(100% - 32px); margin: 0 16px; }
  .toolbar { flex-wrap:wrap; }
}
</style>
