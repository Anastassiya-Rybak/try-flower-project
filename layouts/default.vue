<template>
  <div>
    <NavBar />
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>
  </div>
</template>

<script lang="js">
import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>