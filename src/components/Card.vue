<template>
  <!-- grid  -->
  <div class="container">
    <h1 class="my-3">{{titulo}}</h1>
    <div class="row">
      <div class="col-sm" v-for="(imagen, i) in productos" :key="i">
        <!-- cards  -->
        <div class="card" style="width: 18rem">
          <img
            :src="imagen.data.imagen"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{imagen.data.nombre}}</h5>
            <p class="card-text">
              {{imagen.data.descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${{imagen.data.precio}}</li>
            <li class="list-group-item">Codigo:{{imagen.data.codigo}}</li>
            <!-- <li class="list-group-item">Vestibulum at eros</li> -->
          </ul>
          <div class="card-body">
            <!-- modal  -->
            
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      titulo:'Bienvenidos a la galeria de imagenes de nuestra coleccion exclusiva'
    }
  },

  computed: {
    ...mapState(["productos"]),
  },
};
</script>