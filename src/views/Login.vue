<!-- Template -->
<template>
  <div class="container mt-5">
    <b-form-group id="input-group-1 text-white" label="Email:" label-for="input-1">
      <b-form-input
        class="input"
        id="input-1"
        v-model="email"
        type="email"
        required
        placeholder="Ingrese email"
      >
      </b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-form-input
        class="input"
        id="input-2"
        v-model="password"
        required
        placeholder="Ingrese password"
      >
      </b-form-input>
    </b-form-group>
                <!-- botones  -->
    <button type="button" class="btn btn-primary mr-2" @click="login">Entrar</button>
    <button type="button" class="btn btn-success" @click="register">Registrar</button>

    <div class="mt-5 texto">
      <p>Si ya eres usuario registrado, favor entrar</p>
      <p>
        De lo contrario, por favor regisése, Gracias
        
      </p>
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
          router.push({ name: "Home" });
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
          router.push({ name: "Home" });
        })
        .catch((e) => console.log(e.message));
  },
  },
};
</script>

<!-- Style -->
<style scoped>
.container {
  background-image: url("./../assets/klaus2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 400px;
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

