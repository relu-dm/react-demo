import React from 'react';
import PropTypes from "prop-types";
import DummyText from "./DummyText";


const WorkPage = ({logoutHandler}) =>
    <div className="container mt-5">
        <h1>Work area [1 - React]</h1>
        <DummyText/>
        <div>
            <button className="btn-primary" onClick={logoutHandler}>Logout</button>
        </div>
    </div>;
    

WorkPage.propTypes = {
    logoutHandler: PropTypes.func.isRequired
};

export default WorkPage;