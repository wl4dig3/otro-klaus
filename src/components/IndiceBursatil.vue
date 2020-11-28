<template>
  <div class="row">
    <div class="col-12">
      <h1 class="mt-3">Indice bursatil</h1>
      <!-- card -->
      <div class="card" style="width: 12rem">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <p class="card-text" v-for="(indicador, i) in indicador" :key="i">
            el llamado de la api es:{{ indicador.date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {onMounted} from 'vue';
import { mapActions, mapState, useStore } from "vuex";
export default {
  // setup() {
  //   onMounted(()=>{

  //   })
  //  },
  
  methods: {
    ...mapActions("api", ["getIndicador"]),
  },
  computed: {
    ...mapState("api", ["indicador", "indicadorFiltrado"]),
  },
};
</script>