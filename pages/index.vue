<template>
  <div class="index slider-main-page">
    <div class="slider-main-page__slide active">
      <img src="~/assets/backgrounds/index-page/1792018171_0_575_2048_1727_1920x0_80_0_0_b19b177e2b71063b7ea3637ca2e92691.jpg" alt="">
    </div>
    <div class="slider-main-page__slide">
      <img src="~/assets/backgrounds/index-page/zierpflanzen_schmuck-e1482327669384-1600x691.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
  .index {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .active {
    display: block;
  }
  .slider-main-page__slide:last-child {
    display: none;
  }
  .slider-main-page__slide {
    overflow: hidden;
    height: 80vh;
  }
  .slider-main-page__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>