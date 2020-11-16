<template>
  <div class="container">
    <!-- Botón Logout -->
    <button type="button" @click="logout" class="btn btn-outline-warning mt-2">
      Logout
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
              Editar
            </button>
            <!-- Botón Eliminar  Producto-->
            <button @click="eliminar(producto.id)" class="btn btn-danger ml-3">
              Eliminar
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

      <b-button type="submit" class="btn btn-success" @click="update"
        >Subir cambios</b-button
      >
    </b-modal>
    <hr />
    <!-- Formulario para agregar Producto -->
      <h4 class="titleAdd">Agrega un juguete</h4>
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
        <b-button type="submit" class="btn btn-warning mb-3" @click="agregar"
          >Agregar</b-button
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
</style>


