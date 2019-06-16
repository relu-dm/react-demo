import React from 'react';
import {connect} from "react-redux";
import {logoutAction} from "../../actions";
import DummyText from "./DummyText";


const WorkPage = ({logoutHandler}) =>
    <div className="container mt-5">
        <h1>Work area [2 - Rect + Redux]</h1>
        <DummyText/>
        <div>
            <button className="btn-primary" onClick={logoutHandler}>Logout</button>
        </div>
    </div>;


const mapStateToProps = (state) => ({authStatus: state.AuthReducer.authStatus});

const mapDispatchToProps = ({logoutHandler: logoutAction});

export default connect(mapStateToProps, mapDispatchToProps)(WorkPage);
