<template>
  <div class="tray">
    <button class="Connect">Connect</button>
    <ClockBox />
  </div>
</template>
<script setup lang="ts">
import ClockBox from './ClockBox.vue';
</script>

<style scoped>
.tray {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background-color: #c0c0c0;
  border: 2px solid #808080;
  margin-left: auto;
  justify-content: end;
}

.Connect {
  padding: 6px 10px;
  background: #00ffff;
  border: 2px solid #000;
  color:black;
  font: 500 Tahoma, sans-serif;
}

</style>