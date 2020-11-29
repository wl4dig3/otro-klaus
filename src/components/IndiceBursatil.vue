<template>
  <div class="row">
    <div class="col-12 indice scrol">
      <h3 class="mt-3">{{ titulo }}</h3>

      <ul class="container p-1" style="width: 11rem">
        <li class="mb-2" v-for="(item, i) in indicador" :key="i">
          {{ item.dia }} : {{ item.motivo }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      titulo: "Dias festivos",
    };
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
.scrol {
  padding: 0.9rem 0.7rem;
  margin: 0.3rem 0;
  background-color: lightgreen;
  height: auto;
}
.container {
  list-style: none;
}
@media (max-width: 576px) {
  .indice {
    // height: 515px;
    display: none;
  }
}
</style>