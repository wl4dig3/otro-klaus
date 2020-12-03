
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
            class="bi bi-house-door"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
          </svg>

          Inicio</router-link
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
        <router-link to="/contacto">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-envelope"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
            />
          </svg>
          Contacto</router-link
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
import api from "./store/api";
import { mapActions } from "vuex";
export default {
  components: {
    FooterComponent,
  },

  mounted() {
    this.getDataProductos();
    this.getIndicador();
  },
  methods: {
    ...mapActions("api", ["getIndicador"]),
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
