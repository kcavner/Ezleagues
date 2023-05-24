import decode from 'jwt-decode';

class Auth {
    getUser() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false
    }

    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    // decode(){
    //     const token = localStorage.getItem('token');
    //     const decodedToken = decode(token);
    //     return decodedToken

    // }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new Auth();