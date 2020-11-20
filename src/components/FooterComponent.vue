<template>
  <div class="footer">
    <!-- <h1>Footer component</h1> -->
    <!-- <template> -->

    <!--Facebook-->
    <a class="btn-floating  btn-lg  btn-fb " type="button" role="button"
      ><i class="fab fa-facebook-f"></i
    ></a>
    <!--Twitter-->
    <a class="btn-floating btn-lg btn-tw" type="button" role="button"
      ><i class="fab fa-twitter"></i
    ></a>
    <!--Google +-->
    <a class="btn-floating btn-lg btn-gplus" type="button" role="button"
      ><i class="fab fa-google-plus-g"></i
    ></a>
    <!--Linkedin-->
    <a class="btn-floating btn-lg btn-li" type="button" role="button"
      ><i class="fab fa-linkedin-in"></i
    ></a>
    <!--Instagram-->
    <a class="btn-floating btn-lg btn-ins" type="button" role="button"
      ><i class="fab fa-instagram"></i></a>

    <!-- // </template> -->
  </div>
</template>

<script>
import {
  BootstrapVue,
  BIcon,
  BIconArrowUp,
  BIconArrowDown,
} from "bootstrap-vue";

export default {};
</script>

<style scoped>
.footer {
  height: 3rem;
  background-color: darkgray;
}
</style>