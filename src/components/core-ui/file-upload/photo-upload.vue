<template>
  <div class="photo-upload">
    <input type="file" id="file" accept="*/image*" @change="onFileSelected">
    <label for="file">
      <img src="../../../assets/images/cams.png" alt="camera">
    </label>
  </div>
</template>

<script>
export default {
  name: "photo-upload",
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