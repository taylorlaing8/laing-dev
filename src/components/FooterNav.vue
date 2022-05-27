<template>
  <v-footer bottom color="primary">
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="py-2 text-center">
        <v-btn
          v-for="link in footerMenu.links"
          :key="link.title"
          :to="link.url"
          variant="text"
          size="small"
          rounded
        >
          {{ link.title }}
        </v-btn>
      </v-col>
      <v-col cols="12" class="py-2 text-center">
        <p class="text-caption">Copyright {{ new Date().getFullYear() }} © <strong>{{ footerMenu.title }}</strong></p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FooterNav",

  setup() {
    const footerMenu = ref({
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

    return { footerMenu }
  }
});
</script>
<style lang="scss" scoped>
//
</style>