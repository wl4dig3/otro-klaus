<template>
  <div>
    <div>
      <p>{{ parrafo }}</p>
      <input type="file" @change="previewImage" accept="image/*" />
    </div>
    <div>
      <p>
        Progress: {{ uploadValue.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue" max="100"></progress>
      </p>
    </div>
    <b-button class="btn btn-outline- my-2" @click="onUpload"
      >Subir imagen</b-button
    >
    <div v-if="imageData != null">
      <img class="preview" :src="picture" />
      <br />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Upload",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      parrafo:
        "Para subir imagenes favor hacer click en seleccionar archivo  y luego hacer click en subir imagen",
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`/imagenes-respaldos/${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            console.log(this.picture)
          });
        }
      );
    },
  },
};
</script>
<style scoped="">
img.preview {
  width: 200px;
}
</style>
