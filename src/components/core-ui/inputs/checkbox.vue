<template>
  <div class="checkbox-wrapper">
    <input type="checkbox" :id="id">
    <label :for="id">{{ checkboxText }}</label>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: ["checkboxText", "id"]
}
</script>

<style scoped>
/* Checkbox Styling */
.checkbox-wrapper {
  display: flex;
  align-items: center;
}
.checkbox-wrapper label {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: var(--secondary-color);
}
.checkbox-wrapper input[type="checkbox"] {
  cursor: pointer;
  opacity: 0;
  position: absolute;
}
.checkbox-wrapper label:before {
  content: '';
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid var(--primary-color);
  margin-right: 1.9rem;
}
.checkbox-wrapper label:hover:before,
.checkbox-wrapper input[type="checkbox"]:hover + label:before {
  background-color: var(--primary-color);
}
.checkbox-wrapper input[type="checkbox"]:checked + label:before {
  content: '\002714';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--color-white);
  background-color: var(--primary-color);
}
</style>