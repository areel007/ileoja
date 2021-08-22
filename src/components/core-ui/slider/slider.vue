<template>
  <div class="slider">
    <div  v-for="i in [currentIndex]" :key="i">
      <img :src="require(`../../../assets/images/${currentImg}`)" />
      <div class="navigations">
        <div class="left"  @click="prev" >
          <svg
              height="40px"
              viewBox="0 0 24 24"
              width="40px"
              fill="#ffffff"
          >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </div>
        <div class="right" @click="next">
          <svg
              height="40px"
              viewBox="0 0 24 24"
              width="40px"
              fill="#ffffff"
          >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "slider",
  data() {
    return {
      images: [
          'slider-img-1.png',
          'muscle.png',
          'trending-images/benz.jpg',
      ],
      timer: null,
      currentIndex: 0,
    }
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 10000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }

}
</script>

<style scoped>
img {
  width:100%;
  height: 100%;
  object-fit: cover;

}
.slider {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.navigations {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
}
.left, .right {
  cursor: pointer;
}
</style>