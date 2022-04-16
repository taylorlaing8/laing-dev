<template>
  <v-footer bottom color="primary">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        variant="text"
        rounded
        class="my-2"
      >
        {{ link.title }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text text-caption
" cols="12">
        Copyright {{ new Date().getFullYear() }} © <strong>{{ title }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterNav",

  data() {
    return {
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
    };
  },
});
</script>
<style lang="scss" scoped>
//
</style>