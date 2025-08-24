<template>
  <div class="win95-taskbar">
    <StartButton />
    <TaskButtons />
    <TrayBar />
  </div>
</template>

<script setup lang="ts">
import StartButton from './StartButton.vue'
import TaskButtons from './TaskButtons.vue'
import TrayBar from './TrayBar.vue'
</script>

<style scoped>

.win95-taskbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #c0c0c0; /* Windows 95 gray */
  border-top: 2px solid #fff;
  border-bottom: 2px solid #808080;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-family: "MS Sans Serif", sans-serif;
  
}

</style>