import axios from "axios";
import router from "../router/index.js";

class apiService {

	#host = 'http://127.0.0.1:8000/api';

	async getToken(){
		// Получение данных и даты и времени сохранения
		const token = JSON.parse(localStorage.getItem('access_token'));

		if(token){
			const accessToken = token.accessToken;
			const tokenTimestamp = new Date(token.timestamp);

			// Проверяем, жив-ли наш токен
			const currentTimestamp = new Date();
			const differenceInMilliseconds = currentTimestamp - tokenTimestamp;
			const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

			if (differenceInHours < 1) {
				// Токену меньше часа
				// Отдаем его
				return accessToken;
			} else {
				// Токену больше часа
				// Делаем рефреш

				const refreshToken = localStorage.getItem('refresh_token')
				let config = {
					headers: {
						'Authorization': 'Bearer ' + refreshToken,
						'Accept': 'application/json'
					}
				};

				try {
					const newToken = await axios.post(this.#host + '/auth/refresh-token', {}, config)
					// Перезаписываем токен
					const newTokenData = {
						accessToken: newToken.accessToken,
						timestamp: new Date().getTime() // текущая дата и время в миллисекундах
					};
					localStorage.setItem('access_token', JSON.stringify(newTokenData));
					return newToken.accessToken;
				} catch (err) {
					localStorage.clear();
				}
			}
		}

		return false;
	}

	async sendPostQuery(endpoint, data, withAuth = false, contentType = null) {
		try {
			let config = {};
			if(withAuth){
				config = {
					headers: {
						'Authorization': 'Bearer ' + await this.getToken()
					}
				};

				if(contentType !== null){
					config.headers['Content-Type'] = contentType;
				}
			}

			const response = await axios.post(this.#host + endpoint, data, config)
			return response;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async sendPatchQuery(endpoint, data) {
		try {
			let config = {
				headers: {
					'Authorization': 'Bearer ' + await this.getToken(),
					'Content-Type': 'multipart/form-data'
				}
			};

			const response = await axios.patch(this.#host + endpoint, data, config)
			return response;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async sendGetQuery(endpoint, withAuth = false){
		try {
			let config = {};

			if(withAuth){
				config = {
					headers: {
						'Authorization': 'Bearer ' + await this.getToken()
					}
				};
			}
			const response = await axios.get(this.#host + endpoint, config);
			return response;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async login(data) {
		try {
			const query = await this.sendPostQuery('/auth/login', data);
			//Сохраняем токен
			const tokenData = {
				accessToken: query.data.accessToken,
				timestamp: new Date().getTime() // текущая дата и время в миллисекундах
			};
			localStorage.setItem('access_token', JSON.stringify(tokenData));
			localStorage.setItem('refresh_token', query.data.refreshToken);
			await router.push('/profile');
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async register(data) {
		try {
			const response = await this.sendPostQuery('/auth/register', data);

			const tokenData = {
				accessToken: response.data.accessToken,
				timestamp: new Date().getTime() // текущая дата и время в миллисекундах
			};

			localStorage.setItem('access_token', JSON.stringify(tokenData));
			localStorage.setItem('refresh_token', response.data.refreshToken);
			await router.push('/profile');
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async getUserInfo() {
		try {
			if(!localStorage.getItem('user')){
				const response = await this.sendGetQuery('/me', true);
				localStorage.setItem('user', JSON.stringify(response.data.data));
				return response.data.data;
			}else{
				return localStorage.getItem('user');
			}
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async updateUserInfo(data) {
		try {
			const response = this.sendPostQuery('/me/update', data, true, 'multipart/form-data');
			//Обновляем юзера локально
			const userData = await this.sendGetQuery('/me', true);
			localStorage.setItem('user', JSON.stringify(userData.data.data));
		} catch (err) {
			console.error(err);
			return false;
		}
	}
}

export default new apiService();