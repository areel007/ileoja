<template>
  <div class="report">
    <div class="product-to-report">
      <div class="product-to-report-image"></div>
      <p class="product-to-report-name">Toyota Camry 2021<br><span>$2,500,000</span></p>
    </div>
    <div style="margin-bottom: 14px">
      <select-input placeholder="choose report reason"></select-input>
    </div>
    <div style="margin-bottom: 22px">
      <text-input placeholder="describe your issue"></text-input>
    </div>
    <plain-button display-text="send report"></plain-button>
  </div>
</template>

<script>
import SelectInput from "../components/core-ui/inputs/select-input";
import TextInput from "../components/core-ui/inputs/text-input";
import PlainButton from "../components/core-ui/buttons/plain-button";
export default {
  name: "report",
  components: {TextInput, SelectInput, PlainButton}
}
</script>

<style scoped>
.report {
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  --select-input-width: 357px;
  --text-input-width: 357px;
  --plain-button-width: 357px;
}
.product-to-report {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}
.product-to-report-image {
  width: 106px;
  height: 106px;
  background-color: #FD6649;
  margin-right: 19px;
}
.product-to-report-name {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #000000;
}
.product-to-report-name span {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  color: #FD6649;
}
</style>