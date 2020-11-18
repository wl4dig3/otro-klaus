<template>
  <div class="container">
    <!-- Botón Logout -->
    <button type="button" @click="logout" class="btn btn-outline-primary mt-4">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-box-arrow-right"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
        />
        <path
          fill-rule="evenodd"
          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
      </svg>
      <!-- Logout -->
    </button>

    <!-- Tabla para Leer Información -->
    <h4 class="font-weight-bolder mt-5">Inventario de productos</h4>
    <table class="mx-auto">
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </thead>

      <tbody>
        <tr v-for="(producto, i) in productos" :key="i">
          <td>{{ producto.data.codigo }}</td>
          <td>{{ producto.data.nombre }}</td>
          <td>{{ producto.data.stock }}</td>
          <td>{{ producto.data.precio }}</td>
          <td>
            <!-- Botón Editar -->
            <button
              type="button"
              v-b-modal.modal-1
              @click="editar(producto.id)"
              class="btn btn-primary ml-5"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-pencil-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
            <!-- Botón Eliminar  Producto-->
            <button @click="eliminar(producto.id)" class="btn btn-danger ml-3">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-trash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- ventana modal que se dispara al clickear el boton editar  -->
    <b-modal id="modal-1" title="BootstrapVue" class="EditForm">
      <b-form-group id="input-group-1" label="Código:" label-for="input-1">
        <b-form-input v-model="producto.data.codigo"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input v-model="producto.data.nombre"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Stock:" label-for="input-2">
        <b-form-input v-model="producto.data.stock"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
        <b-form-input v-model="producto.data.precio"> </b-form-input>
      </b-form-group>

      <b-button type="submit" class="btn btn-outline-success" @click="update"
        >Subir cambios</b-button
      >
    </b-modal>
    <hr />
    <!-- Formulario para agregar Producto -->
    <h4 class="titleAdd">Agrega un nuevo producto</h4>
    <div class="formu">
      <div class="w-50 m-auto">
        <b-form-group id="input-group-1" label="Código:" label-for="input-1">
          <b-form-input v-model="codigo"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input v-model="nombre"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Stock:" label-for="input-2">
          <b-form-input v-model="stock"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
          <b-form-input v-model="precio"> </b-form-input>
        </b-form-group>
        <!-- boton para agregar el juguete  -->
        <b-button type="submit" class="btn btn-warning mb-3" @click="agregar">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-upload"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
            />
          </svg>
          Agregar</b-button
        >
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      idUpdating: "",
      codigo: "",
      nombre: "",
      stock: 0,
      precio: 0,
      producto: {
        data: {
          codigo: "",
          nombre: "",
          stock: 0,
          precio: 0,
        },
      },
    };
  },

  computed: {
    ...mapState(["productos"]),
    ...mapGetters(["getProductoUpdating"]),
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    },

    ...mapActions(["agregarProducto", "updateProducto", "eliminarProducto"]),
    agregar() {
      const producto = {
        codigo: this.codigo,
        nombre: this.nombre,
        stock: this.stock,
        precio: this.precio,
      };
      this.agregarProducto(producto);
    },

    editar(id) {
      const productoUpdating = JSON.parse(
        JSON.stringify(this.getProductoUpdating(id))
      );
      this.producto = productoUpdating;

      console.log(productoUpdating);
    },
    update() {
      this.updateProducto(this.producto);
      this.$bvModal.hide("modal-1");
    },
    eliminar(id) {
      this.eliminarProducto(id);
    },
  },
};
</script>


<style scoped>
.container {
  background-image: url("./../assets/main-bg1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 900px;
}
/* .formu {
  background-color: rgb(130, 198, 238);
} */

/* th,
td {
  color: whitesmoke;
  font-weight: bolder;
} */
.titleAdd {
  margin-top: 50px;
  font-weight: bold;
}
button:hover {
  opacity: 0.5;
}
</style>


