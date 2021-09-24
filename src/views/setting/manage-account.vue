<template>
  <div class="manage-account">
    <p>Do you want to delete your account ?</p>
    <select-input placeholder="Why do you leave ? *"></select-input>
    <plain-button display-text="delete"></plain-button>
  </div>
</template>

<script>
import PlainButton from "../../components/core-ui/buttons/plain-button"
import SelectInput from "../../components/core-ui/inputs/select-input";

export default {
  name: "manage-account",
  components: {SelectInput, PlainButton}
}
</script>

<style scoped>
.manage-account {
  width: 494px;
  padding: 40px 60px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  --select-input-margin-bottom: 25px;
}
.manage-account p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
  margin-bottom: 32px;
}
</style>