import axios from "axios";
import router from "../router/index.js";

class apiService {

	#host = 'http://127.0.0.1:8000/api';

	async login(data) {
		try {
			const response = await axios.post(this.#host + '/auth/login', data)
			localStorage.setItem('access_token', response.data.accessToken)
			await router.push('/profile')
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
}

export default new apiService();