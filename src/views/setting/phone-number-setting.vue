<template>
  <div class="phone">
    <p class="question">Do you want to change your phone number?</p>
    <select-input placeholder="choose doc type *"></select-input>
    <text-input placeholder="document id *"></text-input>
    <text-input placeholder="full name *"></text-input>
    <div class="attach-doc">
      <p class="attach-doc__title">Attach Doc *</p>
      <p class="attach-doc__subtitle">Click to attach your document</p>
      <photo-upload icon="file-upload"></photo-upload>
      <p class="attachment-details">Supported formats are .jpg .png, .pdf Each Document must not exceed 5 Mb.</p>
      <text-input placeholder="Old Phone Number *"></text-input>
      <text-input placeholder="New Phone Number *"></text-input>
      <p class="terms__conditions">By proceeding you agree to our <br><span style="color: #D83718">Terms and Conditions</span></p>
      <plain-button display-text="Apply"></plain-button>
    </div>
  </div>
</template>

<script>
import SelectInput from "../../components/core-ui/inputs/select-input";
import TextInput from "../../components/core-ui/inputs/text-input";
import PhotoUpload from "../../components/core-ui/file-upload/photo-upload";
import PlainButton from "../../components/core-ui/buttons/plain-button"

export default {
  name: "phone-number-setting",
  components: {PhotoUpload, TextInput, SelectInput, PlainButton}
}
</script>

<style scoped>
.phone {
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
  --photo-upload-margin-botton: 7px;
}
.question {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
  margin-bottom: 38px;
}
.attach-doc__title {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: #FD6649;
}
.attach-doc__subtitle {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: #6A6B6C;
  margin-bottom: 7px;
}
.attachment-details {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
  margin-bottom: 7px;
}
.terms__conditions {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
  text-align: center;
  margin-bottom: 7px;
}
</style>