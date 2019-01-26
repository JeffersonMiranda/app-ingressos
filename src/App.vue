<template>
  <div id="app" class="container-fluid">
    
    <nav class="nav">
      <router-link to="/" class="nav-link"> Eventos </router-link>
      <router-link to="/about" class="nav-link"> Ingressos </router-link>
      <router-link to="/about" class="nav-link"> Tipos de ingressos </router-link>
    </nav>

    <router-view/>

  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
