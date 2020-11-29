<template>
  <div class="row">
    <div class="col-12">
      <h3 class="mt-3">{{titulo}}</h3>
      <!-- card -->
      <div class="card" style="width: 11rem">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body" v-for="(item, i) in indicador" :key="i">
          <p class="card-text user-select-all">
            {{ item.dia }} {{ item.motivo }}
          </p>
        </div>
      </div>
      <!-- boton colapse -->
          

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";


export default {

  data() {
    return {
      titulo:'Dias festivos'
    }
  },
  methods: {
    ...mapActions("api", ["getIndicador"]),
  },
  computed: {
    ...mapState("api", ["indicador", "indicadorFiltrado"]),
  },
};
</script>

<style lang="scss" scoped>
// .card {
//   height: 20rem;
// }
</style>