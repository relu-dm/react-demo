import React, {useState} from 'react';
import LoginPage from "./login/LoginPage";
import WorkPage from "./work/WorkPage";
import LoginService from "../domain/LoginService";
import {AUTH_AUTHENTICATED} from "../Constants";


const App = () => {

    const [authStatus, setAuthStatus] = useState(LoginService.initialLoggedInState());

    const loginHandler = (user, pass) => setAuthStatus(LoginService.login(user, pass));

    const logoutHandler = () => setAuthStatus(LoginService.logout());

    return (authStatus === AUTH_AUTHENTICATED)
        ? <WorkPage logoutHandler={logoutHandler}/>
        : <LoginPage loginHandler={loginHandler} authStatus={authStatus}/>;

};


export default App;