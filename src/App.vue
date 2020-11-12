
<template>
  <div id="app">
    <!-- Navbar content -->
    <nav class="navbar navbar-light bg-dark">
      <div id="nav">
        <router-link to="/">Inicio</router-link> |
        <router-link to="login">Login</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>



<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.getDataProductos();
  },
  methods: {
    ...mapActions(["getDataProductos"]),
  },
};
</script>

<!-- Style -->
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100px;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #c0d5eb;

    &.router-link-exact-active {
      color: #cfda43;
    }
  }
}
.modal-content footer,
.modal-content header {
  display: none;
}
</style>
