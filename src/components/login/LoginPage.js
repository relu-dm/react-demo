import React from 'react';
import LoginForm from "./LoginForm";
import {AUTH_LOGIN_ERROR} from "../../Constants";
import DummyText from "./DummyText";
import {connect} from "react-redux";


const LoginPage = ({history, authStatus}) =>
    <div className="container mt-5">
        {(authStatus === AUTH_LOGIN_ERROR) && <div className="alert alert-warning">Authorization failed</div>}
        <div className="row">
            <div className="col-md-6">
                <LoginForm history={history}/>
            </div>
            <div className="col-md-6 d-none d-md-block">
                <DummyText/>
            </div>
        </div>
    </div>;


const mapStateToProps = (state) => ({authStatus: state.AuthReducer.authStatus});

export default connect(mapStateToProps)(LoginPage);