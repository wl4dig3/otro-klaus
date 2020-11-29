<template>
  <div class="lading">
    <!-- <h1>Ladin page</h1> -->
    <router-link to="/login">
      <button type="button" class="btn btn-outline-dark" id="entrar">Entrar</button>
    </router-link>

    <router-link to="/imagenes">
      <button type="button" class="btn btn-outline-success ml-3">
        Galeria
      </button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lading {
  background-image: url("./../assets/main.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 515px;
}
button {
  margin-top: 15rem;
}


</style>