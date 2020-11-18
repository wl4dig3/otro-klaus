
<template>
  <div id="app">
    <!-- Navbar content -->
    <nav class="navbar navbar-light bg-dark">
      <div id="nav">
        <router-link to="/"
          ><svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-clipboard-data"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
            />
            <path
              fill-rule="evenodd"
              d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
            />
            <path
              d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
            />
          </svg>

          Inventario</router-link
        >
        |
        <router-link to="/login">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-file-earmark-person-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755S12 12 8 12s-5 1.755-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"
            />
          </svg>
          Login</router-link
        >
        |
        <router-link to="/imagenes">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-camera"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
            />
            <path
              fill-rule="evenodd"
              d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
            />
            <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
          </svg>
          Imagenes</router-link
        >
        |
      </div>
    </nav>
    <transition name="fade">
      <router-view />
    </transition>
    <FooterComponent />
  </div>
</template>



<script>
import FooterComponent from "./components/FooterComponent.vue";

import { mapActions } from "vuex";
export default {
  components: {
    FooterComponent,
  },

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
