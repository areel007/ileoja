<template>
  <div class="top-ads">
    <div class="top-ads-table-header">
      <div class="column">S/N</div>
      <div class="column">Ad Name</div>
      <div class="column">Approved Status</div>
      <div class="column">Expired Date</div>
      <div class="column">View</div>
    </div>
    <div class="top-ads-table-body">
      <div class="body-row">
        <div class="column">1</div>
        <div class="column">Toyotal Camry 2021</div>
        <div class="column approved">Approved</div>
        <div class="column">30th July 2021</div>
        <div class="column joined">0</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-ads"
}
</script>

<style scoped>
.top-ads-table-header {
  display: grid;
  grid-template-columns: 100px repeat(4, 1fr);
  padding: 23px 0;
  background: #F1F1F1;
  border: 1px solid #E9E9E9;
}
.top-ads-table-header .column {
  text-align: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.top-ads-table-body {
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 0 0 4px 4px;
}
.top-ads-table-body .body-row {
  display: grid;
  grid-template-columns: 100px repeat(4, 1fr);
  padding: 23px 0;
}
.top-ads-table-body .body-row .column {
  text-align: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.approved {
  color: #28B446 !important;
}

</style>