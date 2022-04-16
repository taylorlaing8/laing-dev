<template>
  <v-app-bar app rounded height="100px" color="white" elevation="3">
    <img :src="require('../../public/logo_dark.png')" height="50" class="ml-3" />
    
    <v-spacer></v-spacer>
    
    <v-btn variant="text" rounded to="/">Home</v-btn>
    <v-btn variant="text" rounded to="/about">About</v-btn>
    <v-btn variant="text" rounded to="/web-development">Web Development</v-btn>
    <v-btn variant="text" rounded to="/photography">Photography</v-btn>
    <v-btn variant="text" rounded to="/contact">Contact</v-btn>
  </v-app-bar>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'NavBar',

  data() {
      return {
          title: 'Laing Development'
      }
  },
})
</script>
<style lang="scss" scoped>
// 
</style>