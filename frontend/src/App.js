import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/home"/>
                <Route path="/home">
                    <LandingPage></LandingPage>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
