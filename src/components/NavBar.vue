<template>
  <v-app-bar app rounded height="100px" color="white" elevation="3">
    <template v-if="display.mdAndDown.value">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </template>

    <router-link to="/">
      <img :src="require('../../public/logo_dark.png')" height="50" class="ml-3"/>
    </router-link>
    
    <v-spacer></v-spacer>
    
    <template v-if="display.lgAndUp.value">
      <v-btn variant="text" rounded to="/">Home</v-btn>
      <v-btn variant="text" rounded to="/about">About</v-btn>
      <v-btn variant="text" rounded to="/web-development">Web Development</v-btn>
      <v-btn variant="text" rounded to="/photography">Photography</v-btn>
      <v-btn variant="text" rounded to="/contact">Contact</v-btn>
    </template>
  </v-app-bar>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useDisplay } from 'vuetify'

export default defineComponent({
  name: 'NavBar',

  data() {
      return {
          title: 'Laing Development'
      }
  },

  setup() {
    const display = useDisplay()
    
    return { display }
  }
})
</script>
<style lang="scss" scoped>
// 
</style>