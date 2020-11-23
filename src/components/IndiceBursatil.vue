<template>
  <div class="row">
    <div class="col-12">
      <h1 class="mt-3">Indice bursatil</h1>
      <!-- card -->
      <div class="card" style="width: 12rem;">
  <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

    </div>
  </div>
</template>

<script>
import{mapActions, mapState} from 'vuex'
export default {

    methods: {
        ...mapActions('api',['getIndicador'])
    },
    computed: {
        ...mapState('api',['indicador','indicadorFiltrado'])
    },
    
};
</script>