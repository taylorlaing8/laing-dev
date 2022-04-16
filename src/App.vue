<template>
  <v-app>
    <nav-bar/>
    <v-main class="cont-main">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
  <footer-nav/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue'

export default defineComponent({
  components: {
    NavBar,
    FooterNav
  },
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
<style lang="scss" scoped>
.cont-main {
  top: 78px;
}
</style>