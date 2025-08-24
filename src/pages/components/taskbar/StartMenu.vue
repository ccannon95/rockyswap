<template>
  <div class="start-menu">
    <ul>
      <li @click="$emit('select', 'Swap')">Swap</li>
      <li @click="$emit('select', 'Earn')">Earn</li>
      <li @click="$emit('select', 'Pebbles')">Pebbles</li>
    </ul>
  </div>
</template>
