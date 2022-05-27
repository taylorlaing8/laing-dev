<template>
	<v-container>
		<h1>Contact Page</h1>
		<v-form>
			<v-container>
				<v-row>
					<v-col cols="12" md="4">
						<v-text-field
							v-model="userObject.first_name"
							label="First name"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field
							v-model="userObject.last_name"
							label="Last name"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field
							v-model="userObject.email"
							label="E-mail"
							required
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4" md="4">
						<v-btn @click.prevent="createUser()">Submit</v-btn>
						<v-btn @click.prevent="getUsers()">Get All Users</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-form>
	</v-container>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import UserService from '@/api/UserService'
import type User from '@/types/User.type'

export default defineComponent({
	name: 'ContactView',

	setup() {
		const userObject = ref<User>({
			first_name: '',
			last_name: '',
			email: '',
		})

		async function createUser() {
			try {
				const res = await UserService.create(userObject.value)
				console.log(res)
			} catch (err) {
				console.log(err)
			}
		}

		async function getUsers() {
			try {
				const res = await UserService.getAll()
				console.log(res)
			} catch (err) {
				console.log(err)
			}
		}

		return { userObject, createUser, getUsers }
	},
})
</script>
<style lang="scss" scoped>
//
</style>