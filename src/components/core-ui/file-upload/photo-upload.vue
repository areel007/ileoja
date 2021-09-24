<template>
  <div class="photo-upload">
    <input type="file" id="file" accept="*/image*" @change="onFileSelected">
    <label for="file">
      <img :src="require(`../../../assets/images/${icon}.png`)" alt="camera">
    </label>
  </div>
</template>

<script>
export default {
  name: "photo-upload",
  props: ['icon'],
  setup() {
    const selectedFiles = null
    const onFileSelected = (event) => {
      selectedFiles.value = event.target.files[0]
    }

    return { onFileSelected, selectedFiles }
  }
}
</script>

<style scoped>
.photo-upload {
  width: 70px;
  height: 70px;
  display: flex;
  margin-bottom: var(--photo-upload-margin-botton, 0);
}
input[type="file"] {
  display: none;
}
.photo-upload label {
  width: 70px;
  height: 70px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  z-index: 10;
  margin: auto;
  display: flex;
  cursor: pointer;
}
.photo-upload label img {
  margin: auto;
  cursor: pointer;
  position: relative;
}

</style>