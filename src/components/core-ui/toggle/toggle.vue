<template>
  <div class="toggle">
    <input type="checkbox" name="switch" id="switch">
    <label for="switch"></label>
  </div>
</template>

<script>
export default {
  name: "toggle"
}
</script>

<style scoped>
.toggle input[type="checkbox"] {
  width: 0;
  height: 0;
  visibility: hidden;
}
.toggle label {
  display: block;
  width: 56px;
  height: 23px;
  background-color: var(--white);
  border-radius: 18px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid #6A6B6C;
  /*box-shadow: 0 0 20px #477a8550;*/
}
.toggle label::after {
  content: "";
  width: 17px;
  height: 17px;
  background-color: var(--primary-color);
  position: absolute;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: 0.5s;
}
.toggle input + label:after {
  content: "";
  width: 17px;
  height: 17px;
  background-color: var(--primary-color);
}
.toggle input:checked + label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}
.toggle input:checked + label {
  background-color: var(--white);
}
label:active:after {
  width: 160px;
}
</style>