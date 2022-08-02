<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navBarElement">
      <div class="container-fluid">
        <router-link class="navbar-brand  text-white" to="/">Game Opinion</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link link-light" >Home</router-link>
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            </li>
            <li class="nav-item">
              <router-link to="/opiniones" class="nav-link link-light" >Opiniones</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/administracion" class="nav-link link-light" >Administracion</router-link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    // name: 'App',
    methods:{
      ...mapActions(['getJuegos'])
    },
    created(){
      this.getJuegos();
    }

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1B2838;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navBarElement{
  background-color: #316282;
}

</style>
