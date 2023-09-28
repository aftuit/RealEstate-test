import axios from './api'

const UsersService = {
	async getUsers() {
		const {data} = await axios.get('/users')
		return data
	},
	async getUserDetail(id) {
		const {data} = await axios.get(`/users/${id}`)
		return data
	},
	async deleteUser(id) {
		const {data} = await axios.delete(`/users/${id}`)
		return data
	},
	async editUser(id, user) {
		const {data} = await axios.put(`/users/${id}`, user)
		return data
	},
}

export default UsersService