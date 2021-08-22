<template>
  <ul>
    <li>
      <label class="radio__radio">
        <input type="radio" value="Yes" v-model="pickedYes" >
        <span class="radio__label">{{ radioText }}</span>
        <span class="checkmark"></span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "radio",
  props: ["pickedYes", "radioText"]

}
</script>

<style scoped>
/* Radio Button */
.radio__radio {
  position: relative;
  cursor: pointer;
}
.radio__label {
  margin-left: 3.9rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.radio__radio input {
  /*position: absolute;*/
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  height: var(--radio-height, 24px);
  width: var(--radio-width, 24px);
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  transform: translateY(-50%);
}
/* When the radio button is checked, add a blue background */
.radio__radio input:checked ~ .checkmark {
  background-color: var(--color-white);
}
/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the indicator (dot/circle) when checked */
.radio__radio input:checked ~ .checkmark:after {
  display: block;
}
/* Style the indicator (dot/circle) */
.radio__radio .checkmark:after {
  /*top: 5px;*/
  /*left: 6px;*/
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary-color);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
}
ul li label input[type=radio] {
  /*margin-right: 3rem;*/
}
</style>