import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
// import firebase from 'app/firebase/';

import Main from 'Main';
import Dashboard from 'Dashboard';
import Schema from 'Schema';
import Hardlopen from 'Hardlopen';
import Account from 'Account';

// var requireLogin = (nextState, replace, next) => {
//     if (!firebase.auth().currentUser) {
//         replace('/');
//     }
//     next();
// };
//
// var redirectIfLoggedin = (nextState, replace, next) => {
//     if (firebase.auth().currentUser) {
//         replace('/todos');
//     }
//     next();
// };



export default (
    <Router history={hashHistory}>
        <Route path="/" components={Main}>
            <IndexRoute component={Dashboard}/>
            <Route path="schema" component={Schema}/>
            <Route path="hardlopen" component={Hardlopen}/>
            <Route path="acount" component={Account}/>
        </Route>
    </Router>
);