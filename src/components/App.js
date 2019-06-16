import React from 'react';
import {connect} from 'react-redux'
import LoginPage from "./login/LoginPage";
import WorkPage from "./work/WorkPage";
import {AUTH_AUTHENTICATED} from "../Constants";


const App = ({authStatus}) =>
    (authStatus === AUTH_AUTHENTICATED)
        ? (<WorkPage/>)
        : (<LoginPage/>);


const mapStateToProps = (state) => ({authStatus: state.AuthReducer.authStatus});

export default connect(mapStateToProps)(App);
