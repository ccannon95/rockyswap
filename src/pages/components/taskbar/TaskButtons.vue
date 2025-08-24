<template>
  <div class="task-buttons">
    <button v-for="app in apps" :key="app" @click="$emit('focus', app)">
      {{ app }}
    </button>
  </div>
</template>
