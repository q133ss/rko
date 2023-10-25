import axios from "axios";
import router from "../router/index.js";

class apiService {

	//host = "http://rko.q133ss.beget.tech/api";
	host = "http://127.0.0.1:8000/api";

	setCookie(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}

	getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	async getToken(){
		// Получение данных и даты и времени сохранения
		const token = this.getCookie('access_token');

		if(token !== null){
			// const accessToken = token.accessToken;
			// Проверяем, жив-ли наш токен
			// const currentTimestamp = new Date();
			// const differenceInMilliseconds = currentTimestamp - tokenTimestamp;
			// const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

			return token;
			//TODO NEED REFACTOR
			if (differenceInHours < 1) {
				// Токену меньше часа
				// Отдаем его
				return accessToken;
			} else {
				// Токену больше часа
				// Делаем рефреш

				const refreshToken = this.getCookie('refresh_token')
				let config = {
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Authorization': 'Bearer ' + refreshToken,
						'Accept': 'application/json'
					}
				};

				try {
					const newToken = await axios.post('/auth/refresh-token', {}, config)
					// Перезаписываем токен
					this.setCookie('access_token', newToken.accessToken);
					return newToken.accessToken;
				} catch (err) {
					//TODO удалить куки
					alert('Тут нужно удалить куки');
				}
			}
		}

		return false;
	}

	async sendPostQuery(endpoint, data, withAuth = false, contentType = null) {
		try {
			let config = {};
			//if(withAuth){
				config = {
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Authorization': 'Bearer ' + await this.getToken(),
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				};

				if(contentType !== null){
					config.headers['Content-Type'] = contentType;
				}
			//}

			const response = await axios.post(this.host + endpoint, data, config)
			return response;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async sendPatchQuery(endpoint, data) {
		try {
			let config = {
				withCredentials: false,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Authorization': 'Bearer ' + await this.getToken(),
					'Content-Type': 'multipart/form-data'
				}
			};

			const response = await axios.patch(endpoint, data, config)
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
					withCredentials: false,
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Authorization': 'Bearer ' + await this.getToken()
					}
				};
			}
			const response = await axios.get(this.host+endpoint, config);
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
			if(query.status === 201 && query.data.accessToken !== undefined) {
				this.setCookie('access_token', query.data.accessToken, 1);
				this.setCookie('refresh_token', query.data.refreshToken,1);
				await router.push('/profile');
				return true;
			}else {
				return false;
			}
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async register(data) {
		try {
			const response = await this.sendPostQuery('/auth/register', data);
			if(response.status === 201) {
				this.setCookie('access_token', response.data.accessToken);
				this.setCookie('refresh_token', response.data.refreshToken);
				await router.push('/profile');
				return true;
			}else{
				return false;
			}
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async getUserInfo() {
		try {
			if(this.getCookie('user') === null){
				const response = await this.sendGetQuery('/me', true);
				console.log(response)
				//localStorage.setItem('user', JSON.stringify(response.data.data));
				this.setCookie('user', JSON.stringify(response.data.data));
				return response.data.data;
			}else{
				//return localStorage.getItem('user');
				return this.getCookie('user');
			}
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	async updateUserInfo(data, isPhoto = false) {
		try {
			let contentType = null;
			if(isPhoto) {
				contentType = 'multipart/form-data';
			}

			const response = await this.sendPostQuery('/me/update', data, true, contentType);
			//Обновляем юзера локально
			if(response.status === 200) {
				const userData = await this.sendGetQuery('/me', true);
				this.setCookie('user', JSON.stringify(userData.data.data));
				return 'Данные успешно сохранены';
			}
			return 'Произошла ошибка, попробуйте еще раз';
		} catch (err) {
			console.error(err);
		}
	}

	/*
	 * Возвращает список заявок
	 */
	async getBids(inn,dates,phone,offerId,status) {
		let url = "/bids?";

		if(inn !== null && inn !== ''){
			url += "inn="+inn
		}
		if(dates !== null && dates !== ''){
			url += "&createdAt[]="+dates
		}
		if(phone !== null && phone !== ''){
			url += "&phone="+phone
		}
		if(offerId !== null && offerId !== ''){
			url += "&offerId="+offerId
		}
		if(status !== null && status !== ''){
			url += "&status="+status
		}

		const response = await this.sendGetQuery(url, true);
		if(response.status === 200) {
			return response.data.data;
		}
		return false;
	}
}

export default new apiService();