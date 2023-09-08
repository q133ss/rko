class AuthService {
    checkAuth(){
        const accessToken = localStorage.getItem('access_token');
        if(accessToken){
            return true;
        }
        return false;
    }
}

export default new AuthService();