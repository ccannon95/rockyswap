<template>
  <div class="panel">

    <div class="section">
      <div class="section-title">Project Links</div>
      <ul style="margin:0; padding-left: 6px; line-height:1.6;">
        <li><a href="https://github.com/<your-org>/<your-repo>" target="_blank">GitHub Repository</a></li>
        <li><a href="https://www.seismic.systems/" target="_blank">Seismic Website</a></li>
        <li><a href="https://docs.<your-domain>.com" target="_blank">Documentation (placeholder)</a></li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title">Notes</div>
      <p style="margin:0;">
        Add dev setup, contract addresses (devnet), and audit links here.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// no logic; uses your global styles (menubar, panel, section)
</script>

<style scoped>
.panel {
    margin-left: 20px;
    margin-top: 5px;
}
/* uses your global button/input styles; only layout below */
.section { 
    margin-bottom: 12px; 
}
.section-title { 
    font-weight: 700; 
    margin-bottom: 6px;
    font-size: 24px;
}
.menubar{
  display:flex;
  gap:8px;
  background:#dcdcdc;
  padding:6px 8px;
  border-bottom:1px solid #b0b0b0;
}

</style>
