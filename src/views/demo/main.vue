<template>
  <div class="container">
    Main
    <Children></Children>
  </div>
</template>

<script>
import Children from './components/Children.vue'

export default {
  name: 'Main',
  components: {
    Children
  }
}
</script>

<style>
</style>
