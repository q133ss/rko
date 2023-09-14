import apiService from "./apiService.js";

class AuthService {
    checkAuth(){
        const accessToken = apiService.getCookie('access_token');
        if(accessToken !== null){
            return true;
        }
        return false;
    }
}

export default new AuthService();