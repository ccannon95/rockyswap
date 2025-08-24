<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="classList"
    @click="onClick"
  >
    <!-- If user provided slot content, render that. Otherwise use preset icons -->
    <slot>
      <span v-if="preset==='close'">✕</span>
      <span v-else-if="preset==='minimize'">🗕</span>
      <span v-else-if="preset==='maximize'">🗖</span>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// ✅ Strongly typed props
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'ghost' | 'danger' | 'icon'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  action?: string
  emitOn?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  preset?: 'close' | 'minimize' | 'maximize' | 'regular'
}>(), {
  variant: 'primary',
  size: 'md',
  action: '',
  emitOn: '',
  disabled: false,
  type: 'button',
  preset: 'regular'
})

// ✅ Strictly typed emits
const emit = defineEmits<{
  (e: 'trigger', action: string, ev: MouseEvent): void
  (e: 'click', ev: MouseEvent): void
}>()

const baseClass = 'win-btn'

const sizeMap: Record<string, string> = {
  xs: 'win-btn--xs',
  sm: 'win-btn--sm',
  md: 'win-btn--md',
  lg: 'win-btn--lg'
}
const variantMap: Record<string, string> = {
  primary: 'win-btn--primary',
  ghost: 'win-btn--ghost',
  danger: 'win-btn--danger',
  icon: 'win-btn--icon'
}

// ✅ Fixed your syntax error: added missing comma before object
const classList = computed(() => {
  const sizeClass = sizeMap[props.size] || sizeMap.sm
  const variantClass = variantMap[props.variant] || variantMap.primary
  return [baseClass, sizeClass, variantClass, { 'is-disabled': props.disabled }]
})

function onClick(e: MouseEvent) {
  emit('click', e)
  emit('trigger', props.action || props.preset || 'click', e)
  if (props.emitOn) {
    // dynamic emit is looser typing, so you can either ts-ignore or stick with @trigger
    // @ts-expect-error due tp needing it to be a string
    emit(props.emitOn, e)
  }
}
</script>
