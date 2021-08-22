<template>
  <div class="stepper">
    <div class="step">
      <div class="bullet" :class="{'step-current': stepNumber>0}"></div>
      <span class="check" :class="{'step-current-check': stepNumber>0}">
        <svg
            height="14px"
            viewBox="0 0 24 24"
            width="14px"
            fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      </span>
    </div>

    <div class="step">
      <div class="bullet" :class="{'step-current': stepNumber>1}"></div>
      <span class="check" :class="{'step-current-check': stepNumber>1}">
        <svg
            height="14px"
            viewBox="0 0 24 24"
            width="14px"
            fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      </span>
    </div>

    <div class="step">
      <div class="bullet" :class="{'step-current': stepNumber>2}"></div>
      <span class="check" :class="{'step-current-check': stepNumber>2}">
        <svg
            height="14px"
            viewBox="0 0 24 24"
            width="14px"
            fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: "stepper",
  props: ['stepNumber']
}
</script>

<style scoped>
.stepper {
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.step {
  position: relative;
}
.bullet:before,
.bullet:after {
  position: absolute;
  bottom: 8px;
  right: -31px;
  content: '';
  width: 20px;
  height: 1px;
  background-color: var(--primary-color);
}
.step:last-child .bullet:before,
.step:last-child .bullet:after {
  display: none;
}
.bullet {
  width: 20px;
  height: 20px;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  display: inline-block;
  position: relative;
}
.check {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
}
.check svg {
  fill: var(--primary-color);
  display: none;
}
.step-current {
  background-color: var(--primary-color);
}
.step-current-check svg {
  fill: var(--color-white);
  display: block;
}

</style>