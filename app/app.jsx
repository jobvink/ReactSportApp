var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';
import Dashboard from 'Dashboard';
import Schema from 'Schema';
import Hardlopen from 'Hardlopen';
import Account from 'Account';


// App css
require('style!css!sass!applicationStyles');
// require('bootstrap');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" components={Main}>
			<IndexRoute component={Dashboard}/>
			<Route path="schema" component={Schema} />
			<Route path="hardlopen" component={Hardlopen}/>
			<Route path="acount" component={Account}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
