<template>
  <div class="earn-window">
    <div class="window-body">
      <table class="earn-table">
        <thead>
          <tr>
            <th>Pool</th>
            <th>APR</th>
            <th>Your Stake</th>
            <th>Pending Rewards</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PEBBLES / ETH</td>
            <td>42%</td>
            <td>123 PEBBLES</td>
            <td>5.3 PEBBLES</td>
            <td>
              <button>Stake</button>
              <button>Unstake</button>
              <button>Claim</button>
            </td>
          </tr>
          <tr>
            <td>PEBBLES / USDC</td>
            <td>31%</td>
            <td>0</td>
            <td>0</td>
            <td>
              <button>Stake</button>
              <button disabled>Unstake</button>
              <button disabled>Claim</button>
            </td>
          </tr>
          <tr>
            <td>PEBBLES Single Stake</td>
            <td>19%</td>
            <td>500 PEBBLES</td>
            <td>12.7 PEBBLES</td>
            <td>
              <button>Stake</button>
              <button>Unstake</button>
              <button>Claim</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<style scoped>
.earn-window {
  border: 2px solid #000;
  background: #c0c0c0;
  width: 700px;
  margin: 20px auto;
  box-shadow: 3px 3px #808080;
}

.window-titlebar {
  background: linear-gradient(to right, navy, darkblue);
  color: #fff;
  padding: 4px 8px;
  font-weight: bold;
  font-family: "MS Sans Serif", sans-serif;
}

.window-body {
  padding: 8px;
  background: #e0e0e0;
}

 .earn-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;     /* cells share available width */
}

.earn-table th {
  background: #000080;
  color: white;
  border: 1px solid #000;
  padding: 4px;
}

.earn-table td {
  border: 1px solid #000;
  padding: 4px;
  background: #fff;
}

button {
  margin: 0 2px;
  padding: 2px 6px;
  border: 2px outset #fff;
  background: #c0c0c0;
  font-family: "MS Sans Serif", sans-serif;
}

button:active {
  border: 2px inset #fff;
}
</style>
