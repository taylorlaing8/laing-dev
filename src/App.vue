<template>
	<v-app>
		<nav-bar />
		<v-main>
			<v-container fluid fill-height class="pa-0 fill-height ld-main">
				<router-view />
			</v-container>
		</v-main>
	</v-app>
	<footer-nav />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue'

export default defineComponent({
	name: 'App',

	components: {
		NavBar,
		FooterNav,
	},

	setup() {
		return
	},
})
</script>
<style lang="scss" scoped>
.ld-main {
	min-height: calc(100vh - 186px);
}
</style>