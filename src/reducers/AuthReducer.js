import {AUTH_GUEST, AUTH_AUTHENTICATED, AUTH_LOGIN_ERROR} from '../Constants';
import {LOGIN_ACTION, LOGOUT_ACTION} from '../actions/AuthActions';

const initialLoggedInState = () => ({
    authStatus: (sessionStorage.getItem("loggedIn") === 'yes') ? AUTH_AUTHENTICATED : AUTH_GUEST
});

const checkCredentials = (user, pass) => (user === 'root');

const login = (user, pass) => {
    const loginSuccessful = checkCredentials(user, pass);
    sessionStorage.setItem("loggedIn", loginSuccessful ? 'yes' : 'no');
    return loginSuccessful ? {authStatus: AUTH_AUTHENTICATED} : {authStatus: AUTH_LOGIN_ERROR};
};

const logout = () => {
    sessionStorage.setItem("loggedIn", 'no');
    return {authStatus: AUTH_GUEST};
};

const AuthReducer = (state = initialLoggedInState(), action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            let {user, pass} = action.payload;
            return Object.assign({}, state, login(user, pass));
        case LOGOUT_ACTION:
            return Object.assign({}, state, logout());
        default:
            return state;
    }
};

export default AuthReducer;