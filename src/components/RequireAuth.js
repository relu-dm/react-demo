import React from 'react'
import {connect} from "react-redux";
import {AUTH_AUTHENTICATED} from "../Constants";
import {Redirect} from "react-router-dom";


const RequireAuth = Component => ({authStatus, history}) =>
    (authStatus !== AUTH_AUTHENTICATED) ? <Redirect to="/login"/> : <Component/>;


const mapStateToProps = (state) => ({authStatus: state.AuthReducer.authStatus});

export default (component) => connect(mapStateToProps)(RequireAuth(component));
