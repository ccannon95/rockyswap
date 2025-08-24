<template>
  <div class="panel notebook">
    <!-- Title bar -->
    <div class="menubar">
      <button class="menuitem" @click="clearNote">Clear</button>
      <button class="menuitem" @click="downloadNote">Export</button>
    </div>

    <!-- Text area -->
    <div class="container">
        <textarea 
            v-model="text" 
            class="tool-input notebook-text" 
            placeholder="Type your notes here..."
        ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref(localStorage.getItem("notebook") || "");

function saveNote() {
  localStorage.setItem("notebook", text.value);
  alert("Note saved!");
}

function clearNote() {
  text.value = "";
  localStorage.removeItem("notebook");
}

function downloadNote() {
  const blob = new Blob([text.value], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "notes.txt";
  a.click();
  URL.revokeObjectURL(url);
}
</script>

<style scoped>
.notebook {
  margin-top: 6px;
}

.container {
  display: flex;
  justify-content: center;  /* center horizontally */
  align-items: center;      /* center vertically if you want */
  padding: 5px;            /* equal padding on all sides */
  height: 100%;             /* make sure it fills parent */
  box-sizing: border-box;   /* padding counts inside width */
}

.notebook-text {
  width: 100%;
  height: 180px;
  border: 2px inset #555;
  background: #fff;
  font-family: monospace;
  font-size: 13px;
  resize: none;
}
</style>
