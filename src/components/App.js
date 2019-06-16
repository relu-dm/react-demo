import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import WorkPage from "./work_page/WorkPage";
import SecondPage from "./second_page/SecondPage";
import ThirdPage from "./third_page/ThirdPage";
import LoginPage from "./login/LoginPage";
import HomePage from "./home_page/HomePage";
import NavBar from "./NavBar";
import RequireAuth from "./RequireAuth";


const App = () =>
    <Router>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/work" component={RequireAuth(WorkPage)}/>
                <Route exact path="/second" component={RequireAuth(SecondPage)}/>
                <Route exact path="/third" component={RequireAuth(ThirdPage)}/>
            </Switch>
        </div>
    </Router>;

export default App;
