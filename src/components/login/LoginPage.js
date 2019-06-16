import React from 'react';
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import {AUTH_LOGIN_ERROR} from "../../Constants";
import DummyText from "./DummyText";


const LoginPage = ({loginHandler, authStatus}) =>
    <div className="container mt-5">
        {(authStatus === AUTH_LOGIN_ERROR) && <div className="alert alert-warning">Authorization failed</div>}
        <div className="row">
            <div className="col-md-6">
                <LoginForm loginHandler={loginHandler}/>
            </div>
            <div className="col-md-6 d-none d-md-block">
                <DummyText/>
            </div>
        </div>
    </div>;


LoginPage.propTypes = {
    loginHandler: PropTypes.func.isRequired,
    authStatus: PropTypes.number.isRequired
};

export default LoginPage;