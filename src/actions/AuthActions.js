export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";


export const loginAction = (user, pass) => ({
    type: LOGIN_ACTION,
    payload: {user, pass}
});


export const logoutAction = () => ({
    type: LOGOUT_ACTION,
    payload: {}
});