<template>
  <div class="swap-app">
    <!-- Top action buttons -->
    <div class="menubar">
      <button class="menuitem">Reverse</button>
      <button class="menuitem">Limit</button>
      <button class="menuitem">Help</button>
    </div>

    <!-- Retro panel -->
    <div class="panel">
      <!-- FROM row -->
      <div class="section">
        <div class="section-title">From</div>
        <div class="row">
          <div class="token">
            <div class="dropdown">
              <button class="token-btn">ETH ▼</button>
              <div class="dropdown-content">
                <button class="token-item">ETH</button>
                <button class="token-item">USDC</button>
                <button class="token-item">DAI</button>
                <button class="token-item">WBTC</button>
              </div>
            </div>
          </div>
          <input class="amount tool-input" type="text" placeholder="0.00" />
        </div>
      </div>

      <!-- divider with reverse control -->
      <div class="divider">
        <span class="line"></span>
        <button class="swap-arrow">⇅</button>
        <span class="line"></span>
      </div>

      <!-- TO row -->
      <div class="section">
        <div class="section-title">To</div>
        <div class="row">
          <div class="token">
            <div class="dropdown">
              <button class="token-btn">USDC ▼</button>
              <div class="dropdown-content">
                <button class="token-item">ETH</button>
                <button class="token-item">USDC</button>
                <button class="token-item">DAI</button>
                <button class="token-item">WBTC</button>
              </div>
            </div>
          </div>
          <input class="amount tool-input" type="text" placeholder="0.00" />
        </div>
      </div>

      <!-- primary action -->
      <button class="primary-btn win-btn">Swap</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// no logic yet; this is purely the retro-styled layout
</script>

<style scoped>
/* toolbar-style menubar */
.menubar{
  display:flex;
  gap:8px;
  background:#dcdcdc;
  padding:6px 8px;
  border-bottom:1px solid #b0b0b0;
}

/* outer panel with Win95 bevel */
.panel{
  margin:10px;
  padding:12px;
  background: var(--c8);
  border:2px solid #f6f6f6;
  border-right-color:#808080;
  border-bottom-color:#808080;
}

/* section headings + rows */
.section{ margin-bottom:12px; }
.section-title{ font-weight:700; margin-bottom:6px; }

.row{
  display:grid;
  grid-template-columns: 180px 1fr; /* token select | amount */
  gap:10px;
  align-items:center;
}

/* token dropdown (text-only) */
.token .dropdown{ position:relative; display:inline-block; width:100%; }
.token-btn{
  width:100%;
  text-align:left;
  background:#e0e0e0;
  border:2px outset #fff;
  padding:6px 10px;
  font-size:13px;
  cursor:pointer;
}
.token-btn:active{ border:2px inset #555; }
.dropdown-content{
  display:none;
  position:absolute;
  left:0; top:100%;
  background:#f9f9f9;
  min-width:100%;
  max-height:180px;
  overflow-y:auto;
  border:1px solid #aaa;
  box-shadow:2px 2px 5px rgba(0,0,0,0.2);
  z-index:10;
}
.dropdown:hover .dropdown-content{ display:block; }
.token-item{
  display:block;
  width:100%;
  background:transparent;
  border:none;
  text-align:left;
  padding:6px 10px;
  cursor:pointer;
  font-size:13px;
}
.token-item:hover{ background:#cce0ff; }

/* inputs */
.amount{ height:32px; }

/* divider with centered reverse button */
.divider{
  display:flex;
  align-items:center;
  gap:8px;
  margin:12px 0;
}
.divider .line{
  flex:1;
  height:1px;
  background:#a0a0a0;
  box-shadow:0 1px 0 #fff;
}
.swap-arrow{
  width:28px; height:28px;
  border:2px outset #fff;
  background:#e0e0e0;
  cursor:pointer;
  line-height:24px;
}
.swap-arrow:active{ border:2px inset #555; }

/* primary action button spans width */
.primary-btn{
  display:block;
  width:100%;
  margin-top:8px;
  padding:8px 12px;
  font-weight:700;
}
</style>
