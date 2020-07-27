<template>
  <div class="w3-cell-row w3-card-2">
    <div class="w3-cell w3-cell-middle w3-hide-small w3-green w3-center w3-xxlarge" style="padding:16px;width:150px">
      <slot name="header" />
    </div>
    <div class="w3-cell w3-container w3-light-gray w3-border-left w3-cell-top" style="padding:0px 16px 8px 16px;">
      <slot name="body" />
    </div>
  </div>
</template>
