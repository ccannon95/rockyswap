<template>
    <div class="clockbox-container">
        <div class="clock">
            <span>{{ time }}</span>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const time = ref('')
let timer: string | number | NodeJS.Timeout | undefined
const update = () => time.value = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
onMounted(() => { update(); timer = setInterval(update, 60000) })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.clockbox-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.clock {
  padding: 6px 10px;
  background: #ffff00;
  border: 2px solid #00ffff;
  color:black;
  font: 500 Tahoma, sans-serif;
}

</style>