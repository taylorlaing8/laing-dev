<template>
  <v-app-bar app rounded height="90" color="white" elevation="3">
    <v-container>
      <v-row align="center">
        <template v-if="display.mdAndDown.value">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </template>

        <router-link to="/">
          <img :src="require('../../public/logo_dark.png')" height="50"/>
        </router-link>
        
        <v-spacer></v-spacer>
        
        <template v-if="display.lgAndUp.value">
          <v-btn
            v-for="link in headerNav.links"
            :key="link.title"
            :to="link.url"
            variant="text"
            size="small"
            rounded
          >
            {{ link.title }}
          </v-btn>
        </template>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useDisplay } from 'vuetify'

export default defineComponent({
  name: 'NavBar',

  setup() {
    const display = useDisplay()

    const headerNav = ref({
      title: "Laing Development",
      links: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'About',
          url: '/about'
        },
        {
          title: 'Web Development',
          url: '/web-development'
        },
        {
          title: 'Photography',
          url: '/photography'
        },
        {
          title: 'Contact',
          url: '/contact'
        }
      ],
    })

    return { display, headerNav }
  }
})
</script>
<style lang="scss" scoped>
// 
</style>