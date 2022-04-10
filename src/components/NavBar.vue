<template>
  <v-toolbar rounded height="100px" color="white" elevation="3">
    <img :src="require('../../public/logo_dark.png')" height="50" class="ml-3" />
    <v-spacer></v-spacer>
    <!-- <v-menu v-if="$vuetify.breakpoint.xsOnly">
      <h1>TEST</h1>
    </v-menu> -->
    <v-toolbar-items>
      <v-btn variant="plain" to="/">Home</v-btn>
      <v-btn variant="plain" to="/about">About</v-btn>
      <v-btn variant="plain" to="/web-development">Web Development</v-btn>
      <v-btn variant="plain" to="/photography">Photography</v-btn>
      <v-btn variant="plain" to="/contact">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  name: 'NavBar',

  data() {
      return {
          title: 'Laing Development'
      }
  },

  mounted() {
    // console.log(this.$vuetify.breakpoint.width)
  }
}
</script>
