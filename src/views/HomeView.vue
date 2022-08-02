<template>
  <div class="home">

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Juegos msg="Home Juegos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Juegos from '@/components/Juegos.vue'

export default {
  name: 'HomeView',
  components: {
    Juegos
  }
}
</script>
