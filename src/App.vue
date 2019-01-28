<template>
  <div id="app" class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col-md-10">

        <nav class="nav">
          <router-link to="/eventos" class="nav-link"> Eventos </router-link>
          <router-link to="/ingressos" class="nav-link"> Ingressos </router-link>
        </nav>

        <router-view/>
      </div>
    </div>

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
