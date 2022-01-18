<template>
  <div class="fondo">
    <div class="container contacto">
      <h1>Formulario de contacto.</h1>
      <hr />

      <form>
        <div class="row mt-5">
          <div class="form-group col-12">
            <b-form-input
              class="control"
              type="text"
              v-model="nombre"
              :state="validar"
            >
            </b-form-input>
            <small>ingrese al menos 3 caracteres</small>
            <!-- <p>texto: {{ numero }}</p> probando v-model--> 
          </div>
          <div class="form-group col-12">
            <b-form-input
              class="control"
              type="number"
              v-model="numero"
              :state="validarnum"
            >
            </b-form-input>
            <small>Ingrese numero telefónico</small>
            <!-- <p>telefono: {{ numero }}</p> probando v-model -->
          </div>
          <div class="col-md mb-2">
            <button type="submit" class="btn btn-outline-light btn-block">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-envelope-open"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <h3 class="mt-5 pb-4">Gracias por contactarnos</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacto",
  data() {
    return {
      nombre: "",
      numero: "",
    };
  },
  computed: {
    validar() {
      return this.nombre.length > 3 ? true : false;
    },
    validarnum() {
      return this.numero.length > 3 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.fondo {
  background-image: url("./../assets/contacto.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 515px;
}

.contacto {
  background: rgba(0, 0, 0, 0.6);
  color: whitesmoke;
  padding: 3rem auto;
}

hr {
  background-color: white;
  height: 0.1rem;
}

// mediaquerie
@media (min-width: 576px) {
  .control {
    width: 35rem;
    margin: 0 auto;
    // display: none;
  }
  button {
    width: 35rem;
    margin: 0 auto 1rem;
  }
}
</style>