<template>
  <div class="referral">
    <div class="referral-table-header">
      <div class="column">S/N</div>
      <div class="column">Seller Name</div>
      <div class="column">Phone</div>
      <div class="column">Amount</div>
      <div class="column">Joined</div>
      <div class="column">Expired</div>
    </div>
    <div class="referral-table-body">
      <div class="body-row">
        <div class="column">1</div>
        <div class="column">Ileoja001</div>
        <div class="column">08000110001</div>
        <div class="column">100,000</div>
        <div class="column joined">2nd July 2021</div>
        <div class="column expired">30th July 2021</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "referral"
}
</script>

<style scoped>
.referral-table-header {
  display: grid;
  grid-template-columns: 100px repeat(5, 1fr);
  padding: 23px 0;
  background: #F1F1F1;
  border: 1px solid #E9E9E9;
}
.referral-table-header .column {
  text-align: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.referral-table-body {
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 0 0 4px 4px;
}
.referral-table-body .body-row {
  display: grid;
  grid-template-columns: 100px repeat(5, 1fr);
  padding: 23px 0;
}
.referral-table-body .body-row .column {
  text-align: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.joined {
  color: #28B446 !important;
}
.expired {
  color: #DF1717 !important;
}
</style>