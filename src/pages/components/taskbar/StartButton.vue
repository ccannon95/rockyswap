<template>
  <div>
    <button @click="toggleMenu">Start</button>
    <StartMenu v-if="isOpen" @select="openApp" />
  </div>
</template>
