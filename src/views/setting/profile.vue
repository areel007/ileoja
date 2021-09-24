<template>
  <div class="profile">
    <div class="profile-pics"></div>
    <text-input placeholder="Full Name" v-model="fullName"></text-input>
    <text-input placeholder="Email" v-model="email"></text-input>
    <text-input placeholder="Seller Name" v-model="sellerName"></text-input>
    <text-input placeholder="Phone Number" v-model="phoneNumber"></text-input>
    <text-input placeholder="Address" v-model="address"></text-input>
    <select-input placeholder="State"></select-input>
    <select-input placeholder="Local Government"></select-input>
    <plain-button displayText="update profile"></plain-button>
  </div>
</template>

<script>
import {ref} from "vue";
import TextInput from "../../components/core-ui/inputs/text-input";
import SelectInput from "../../components/core-ui/inputs/select-input";
import PlainButton from "../../components/core-ui/buttons/plain-button"

export default {
  name: "profile",
  components: {SelectInput, TextInput, PlainButton},
  setup() {
    const fullName = ref('')
    const email = ref('')
    const sellerName = ref('')
    const phoneNumber = ref('')
    const address = ref('')
    const stateName = ref('')
    const localGovt = ref('')

    return {
      fullName,
      email,
      sellerName,
      phoneNumber,
      address,
      stateName,
      localGovt,
    }
  }
}
</script>

<style scoped>
.profile {
  width: 494px;
  padding: 40px 60px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  --text-input-margin-bottom: 7px;
  --select-input-margin-bottom: 7px;
}
.profile-pics {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: black;
  margin-bottom: 40px;
  cursor: pointer;
}
</style>