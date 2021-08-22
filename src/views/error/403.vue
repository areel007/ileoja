<template>
  <div class="four-zero-three">
    <div class="container">
      <p class="page-tile">ileoja / 403 Error</p>
      <div class="four-zero-three__inner">
        <img src="../../assets/images/403.png" alt="error 403">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FourZeroThree"
}
</script>

<style scoped>
.four-zero-three {
  position: relative;
  top: 10rem;
}
.page-tile {
  margin: 2.4rem 0;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.four-zero-three__inner {
  padding: 2.4rem;
  height: 100vh;
  display: flex;
}
.four-zero-three__inner img {
  margin: auto;
  width: 40rem;
  height: 40rem;
}

</style>