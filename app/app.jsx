var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
// import firebase from 'app/firebase/';
import router from 'app/router/';
var moment = require('moment');


var data1 = {
    maand: moment().startOf('month').subtract(4, 'months'),
    data: [
        [gd(2017, 1, 1), 17],
        [gd(2017, 1, 2), 74],
        [gd(2017, 1, 3), 6],
        [gd(2017, 1, 4), 39],
        [gd(2017, 1, 5), 20],
        [gd(2017, 1, 6), 85],
    ]
};
var data2 = {
    maand: moment().startOf('month').subtract(3, 'months'),
    data: [
        [gd(2017, 1, 1), 82],
        [gd(2017, 1, 2), 23],
        [gd(2017, 1, 3), 66],
        [gd(2017, 1, 4), 9],
        [gd(2017, 1, 6), 6],
        [gd(2017, 1, 7), 9],
        [gd(2017, 1, 12), 0]
    ]
};
var data3 = {
    maand: moment().startOf('month').subtract(2, 'months'),
    data: [
        [gd(2017, 1, 1), 43],
        [gd(2017, 1, 2), 21],
        [gd(2017, 1, 6), 34],
        [gd(2017, 1, 7), 36],
        [gd(2017, 1, 12), 0],
    ]
};
var data4 = {
    maand: moment().startOf('month').subtract(1, 'months'),
    data: [
        [gd(2017, 1, 1), 43],
        [gd(2017, 1, 2), 46],
        [gd(2017, 1, 6), 64],
        [gd(2017, 1, 7), 55],
        [gd(2017, 1, 8), 34],
        [gd(2017, 1, 10), 21],
    ]
};
var data5 = {
    maand: moment().startOf('month'),
    data: [
        [gd(2017, 1, 1), 34],
        [gd(2017, 1, 2), 46],
        [gd(2017, 1, 6), 23],
        [gd(2017, 1, 7), 45],
        [gd(2017, 1, 8), 45],
        [gd(2017, 1, 10), 23],
        [gd(2017, 1, 11), 53],
        [gd(2017, 1, 12), 0]
    ]
};

var data = [data1, data2, data3, data4, data5];

function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
}

var agenda = [
    {
        datum: new Date("2017-01-01T11:30"),
        actie: 'Hardlopen'
    },
    {
        datum: new Date("2017-01-03T21:30"),
        actie: 'Sportschool'
    },
    {
        datum: new Date("2017-01-05T14:30"),
        actie: 'Hardlopen'
    },
];

store.dispatch(actions.setHardloopData(data));
store.dispatch(actions.addAgendas(agenda));
store.dispatch(actions.setHardloopState('started'));

// App css
require('style!css!sass!applicationStyles');
// require('bootstrap');

ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);
