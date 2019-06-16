import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {AUTH_AUTHENTICATED} from "../Constants";
import {logoutAction} from "../actions";


const NavBar = ({loggedIn, logoutHandler}) => {

    const logoutThenRoute = (e) => {
        e.preventDefault();
        logoutHandler();
    };

    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft: 0}}>
                    <Link className="navbar-brand" to="/">Rect Demo [Task 4]</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/work">Work</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/second">Second</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/third">Third</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {loggedIn && <Link className="nav-link" onClick={logoutThenRoute} to="/login">Logout</Link>}
                            {!loggedIn && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>);
};

const mapStateToProps = (state) => ({loggedIn: state.AuthReducer.authStatus === AUTH_AUTHENTICATED});

const mapDispatchToProps = ({logoutHandler: logoutAction});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
