import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'app/firebase/';

import Main from 'Main';
import Dashboard from 'Dashboard';
import Schema from 'Schema';
import Hardlopen from 'Hardlopen';
import Profile from 'Profile';
import Login from 'Login';

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/login');
    }
    next();
};

var redirectIfLoggedin = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/');
    }
    next();
};



export default (
    <Router history={hashHistory}>
        <Route path="/login" component={Login} onEnter={redirectIfLoggedin} />
        <Route path="/" components={Main}>
            <IndexRoute component={Dashboard} onEnter={requireLogin}/>
            <Route path="schema" component={Schema} onEnter={requireLogin}/>
            <Route path="hardlopen" component={Hardlopen} onEnter={requireLogin}/>
            <Route path="profile" component={Profile} onEnter={requireLogin}/>
        </Route>
    </Router>
);