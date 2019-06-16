import {AUTH_AUTHENTICATED, AUTH_GUEST, AUTH_LOGIN_ERROR} from '../Constants';


class LoginService {

    initialLoggedInState = () => {
        return (sessionStorage.getItem("loggedIn") === 'yes')
            ? AUTH_AUTHENTICATED
            : AUTH_GUEST;
    };

    checkCredentials = (user, pass) => (user === 'root');

    login = (user, pass) => {
        let loginSuccessful = this.checkCredentials(user, pass);
        sessionStorage.setItem("loggedIn", loginSuccessful ? 'yes' : 'no');
        return loginSuccessful
            ? AUTH_AUTHENTICATED
            : AUTH_LOGIN_ERROR;
    };

    logout = () => {
        sessionStorage.setItem("loggedIn", 'no');
        return AUTH_GUEST;
    }

}

export default new LoginService();