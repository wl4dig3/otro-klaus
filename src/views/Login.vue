<!-- Template -->
<template>
  <div class="login">
    <b-form-group id="input-group-1">
      <h2 class="text-white">Formulario de Ingreso / registro</h2>
      <b-form-input
        class="input mt-5"
        id="input-1"
        v-model="email"
        type="email"
        required
        placeholder="Ingrese email"
      >
      </b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2">
      <b-form-input
        class="input"
        id="input-2"
        v-model="password"
        required
        placeholder="Ingrese password"
        type="password"
      >
      </b-form-input>
    </b-form-group>
    <!-- botones  -->
    <button 
    type="button" 
    class="btn btn-primary mr-2" 
    id="boton-login"
    @click="login">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-box-arrow-in-right"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
        />
        <path
          fill-rule="evenodd"
          d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
      </svg>
      Entrar
    </button>
    <button
      type="button"
      class="btn btn-success"
      id="crear_usuario"
      @click="register"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-clipboard-check"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
        />
        <path
          fill-rule="evenodd"
          d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
      Registrar
    </button>

    <div class="mt-5 texto">
      <p>Si ya eres usuario registrado, favor entrar</p>
      <p>De lo contrario, por favor registrése, Gracias</p>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import firebase from "firebase";
import router from "../router/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const email = this.email;
      const password = this.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((resultado) => {
          console.log(resultado);
          router.push({ name: "Inventario" });
        })
        .catch((e) => console.log(e.message));
    },
    register() {
      const email = this.email;
      const password = this.password;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((resultado) => {
          console.log(resultado);
          router.push({ name: "Inventario" });
        })
        .catch((e) => console.log(e.message));
    },
  },
};
</script>

<!-- Style -->
<style lang="scss" scoped>
.login {
  background-image: url("./../assets/access.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 515px;
}
.texto {
  font-weight: bolder;
  color: whitesmoke;
}
.input {
  max-width: 200px;
  margin: auto;
  font-weight: bolder;
}
</style>



