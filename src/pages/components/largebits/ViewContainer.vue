<template>
  <div :class="['desktop', { 'desktop--visible': desktop }]">
    <div
      v-if="!isClosed"
      class="win-window"
      role="dialog"
      :aria-label="title"
      :style="{
        left: isMaximized ? '0px' : `${posX}px`,
        top: isMaximized ? '0px' : `${posY}px`,
        width: isMaximized ? '100vw' : `${width}px`,
        height: isMinimized ? '32px' : (isMaximized ? '100vh' : `${height}px`),
        zIndex
      }"
      @mousedown="bringToFront"
    >
      <div
        class="titlebar"
        :class="{ 'titlebar--active': isActive }"
        @mousedown="onMouseDown"
      >
        <div class="titlebar-left">
          <span class="title-text">{{ title }}</span>
        </div>
        <div class="titlebar-right">
          <!-- FIX: Vue listens to @click (not @onClick) -->
          <ButtonsBox minimize @click="handleMinimize" />
          <ButtonsBox maximize @click="handleMaximize" />
          <ButtonsBox close @click="handleClose" />
        </div>
      </div>

      <div class="content" role="document" v-show="!isMinimized">
        <slot>
          <div class="placeholder"></div>
        </slot>
      </div>

      <div class="resize-handle" @mousedown="onResizeDown"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ButtonsBox from '../tinybits/ButtonsBox.vue'

interface Props {
  title?: string
  desktop?: boolean
  zIndex?: number
  isActive?: boolean
  /* keep these since onClick references them (minimally invasive) */
  action?: string
  preset?: string
  emitOn?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Untitled',
  desktop: false,
  zIndex: 1,
  isActive: false
})

const posX = ref(100)
const posY = ref(100)
const width = ref(600)
const height = ref(400)

const isMinimized = ref(false)
const isMaximized = ref(false)
const isClosed = ref(false)

const dragging = ref(false)
const resizing = ref(false)
let offsetX = 0
let offsetY = 0
let startWidth = 0
let startHeight = 0

const emit = defineEmits<{
  (e: 'bringToFront'): void
  (e: 'minimize', ev: MouseEvent): void
  (e: 'maximize', ev: MouseEvent): void
  (e: 'close', ev: MouseEvent): void
  /* align types with onClick helper to avoid TS noise */
  (e: 'click', ev: MouseEvent): void
  (e: 'trigger', name: string, ev: MouseEvent): void
}>()

function handleMinimize(ev: MouseEvent) {
  isMinimized.value = !isMinimized.value
  if (isMinimized.value) isMaximized.value = false
  emit('minimize', ev)
}

function handleMaximize(ev: MouseEvent) {
  isMaximized.value = !isMaximized.value
  if (isMaximized.value) isMinimized.value = false
  emit('maximize', ev)
}

function handleClose(ev: MouseEvent) {
  isClosed.value = true
  emit('close', ev)
}

/* === Dragging === */
function onMouseDown(e: MouseEvent) {
  if ((e.target as HTMLElement).closest('.titlebar-right')) return
  if (isMaximized.value || isMinimized.value) return
  dragging.value = true
  offsetX = e.clientX - posX.value
  offsetY = e.clientY - posY.value
}

/* === Resizing === */
function onResizeDown(e: MouseEvent) {
  if (isMaximized.value || isMinimized.value) return
  resizing.value = true
  offsetX = e.clientX
  offsetY = e.clientY
  startWidth = width.value
  startHeight = height.value
  e.stopPropagation()
}

function onMouseMove(e: MouseEvent) {
  if (dragging.value) {
    posX.value = e.clientX - offsetX
    posY.value = e.clientY - offsetY
  }
  if (resizing.value) {
    width.value = Math.max(300, startWidth + (e.clientX - offsetX))
    height.value = Math.max(200, startHeight + (e.clientY - offsetY))
  }
}

function onMouseUp() {
  dragging.value = false
  resizing.value = false
}

function bringToFront() {
  emit('bringToFront')
}

/* keep helper; now fully typed and harmless if unused */
function onClick(e: MouseEvent) {
  emit('click', e)
  emit('trigger', props.action || props.preset || 'click', e)
  if (props.emitOn) {
    // dynamic emit relies on runtime string
    // @ts-expect-error dynamic event name
    emit(props.emitOn, e)
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>

<style scoped>
/* Keep existing styles. This ensures resize handle is interactive. */
.resize-handle {
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 14px;
  height: 14px;
  background: url(../tinybits/resize.svg);
  background-size: contain;
  cursor: nwse-resize;
}
</style>
