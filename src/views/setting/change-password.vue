<template>
  <div class="change-password">
    <password-input placeholder="old password *" input-type="password"></password-input>
    <password-input placeholder="new password *" input-type="password"></password-input>
    <password-input placeholder="confirm password *" input-type="password"></password-input>
    <plain-button display-text="confirm"></plain-button>
  </div>
</template>

<script>
import PasswordInput from "../../components/core-ui/inputs/password-input";
import PlainButton from "../../components/core-ui/buttons/plain-button"

export default {
  name: "change-password",
  components: {PasswordInput, PlainButton}
}
</script>

<style scoped>
.change-password {
  width: 494px;
  padding: 40px 60px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  --password-input-margin-bottom: 7px;
}
</style>