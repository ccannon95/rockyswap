<template>
  <div class="button-box">
    <button v-if="standard" class="standard">Standard</button>
    <button v-if="standardtwo" class="standardtwo">Standard</button>
    <button v-if="minimize" class="minimize">_</button>
    <button v-if="maximize" class="maximize">□</button>
    <button v-if="close" class="close">×</button>
    <button v-if="help" class="help">?</button>
    <button v-if="sysMenu" class="sys-menu-icon">☰</button>
    <button v-if="resize" class="resize">⋮⋮⋮</button>
    <button v-if="pin" class="pin">PIN</button>
    <button v-if="expand" class="expand">EXPAND</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  standard?: boolean
  standardtwo?: boolean
  minimize?: boolean
  maximize?: boolean
  close?: boolean
  help?: boolean
  sysMenu?: boolean
  resize?: boolean
  pin?: boolean
  expand?: boolean
}>()

document.querySelector('.pin')?.addEventListener('click', function() {
    this.classList.toggle('pinned');
})
</script>

<style>
.standard {
    border: 2px solid #ff00ff;
    background: #ffff00;
    color: #000;
    padding: 6px;
    margin: 2px;
    border-radius: 10px;
    width: 7em;
    font-family: sans-serif;
    font-weight: 700;
    font-size: larger;
}

.standardtwo {
    border: 2px solid #ff00ff;
    background: #00ffff;
    padding: 6px;
    margin: 2px;
    border-radius: 10px;
    width: 7em;
    font-family: sans-serif;
    font-weight: 700;
    font-size: larger;
}

.minimize {
    border: 2px solid #000;
    background: #ffff00;
    padding: 2px;
    margin: 2px;
    width: 30px;
    height: 30px;
    filter: drop-shadow(0px 2px 1px #000);
    transition: 0.165s;
}
.maximize:active {
    transform: scale(.7)
}
.minimize:active {
    transform: scale(.7)
}
.close:active {
    transform: scale(.7)
}
.close {
    border: 2px solid #000;
    background: #ffff00;
    padding: 2px;
    margin: 2px;
    width: 30px;
    height: 30px;
    filter: drop-shadow(0px 2px 1px #000);
    transition: 0.165s;
}
.maximize  {
    border: 2px solid #000;
    background: #ffff00;
    padding: 2px;
    margin: 2px;
    width: 30px;
    height: 30px;
    filter: drop-shadow(0px 2px 1px #000);
    transition: 0.165s;
}
.help  {
    border: 2px solid #000;
    background: #ff00ff;
    padding: 2px;
    margin: 2px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
}

.sys-menu-icon {
    border: 2px solid #000;
    background: #ff00ff;
    padding: 2px;
    margin: 2px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
}


.pin {
  border: 2px solid #000;
  background: #ff00ff; /* default: unpinned */
  padding: 2px;
  margin: 2px;
  width: 45px;
  height: 28px;
  filter: drop-shadow(0px 2px 1px #000);
  cursor: pointer;
  transition: .165s;
}
.pin:active {
  transform: scale(.8)

}
.pin.pinned {
  background: #00ff00; /* pinned */
}
.expand  {
    border: 2px solid #000;
    background: #ff00ff;
    padding: 2px;
    margin: 2px;
    width: 75px;
    height: 28px;
    border-radius: 4px;
}
</style>