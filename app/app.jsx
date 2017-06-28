var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';
var moment = require('moment');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startAddAllHardloopdata());
        store.dispatch(actions.startAddSchemas());
        store.dispatch(actions.startAddProfile());
        store.dispatch(actions.startConfigureProfilePhoto());
        hashHistory.push('/');
    } else {
        store.dispatch(actions.logout());
        hashHistory.push('/');
    }
});

var {trophys} = require('app/trophy');


var checkTrophys = (userTrophys, state) => {
    userTrophys.forEach((trophy) => {
        if(!trophy.finnished) {
            var finished = trophys[trophy.id].condition(state);
            if(finished) {
                unsubscribe();
                store.dispatch(actions.setFinished(trophy.id));
                unsubscribe = store.subscribe(trophyChecker);
            }
        }
    })
};

export var trophyChecker = () => {
    var state = store.getState();
    var userTrophys = state.trophys;

    if (userTrophys.length === Object.keys(trophys).length) {
        checkTrophys(userTrophys, state);
    }
};

var unsubscribe = store.subscribe(trophyChecker);


var userTrophys = store.getState().trophys;


var addAllTrophys = function () {
    var keys = Object.keys(trophys);
    keys.forEach((key) => {
        var trophy = trophys[key];
        store.dispatch(actions.addTrophy(trophy.title, trophy.description, trophy.id));
    })
};

var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;

    var indexOf;
    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {

            var i = -1, index = -1;
            for(i = 0; i < this.length; i++) {

                var item = this[i];
                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};

if (userTrophys.length === 0) {
    addAllTrophys();
} else {
    var keys = userTrophys.map((trophy) => {
        return trophy.id
    });
    keys.forEach((key) => {
        if (!contains.call(Object.keys(trophys), key)) {
            var trophyToAdd = trophys[key];
            store.dispatch(actions.addTrophy(trophyToAdd.title, trophyToAdd.description, trophyToAdd.id));
        }
    });
}

// setTimeout(() => {
// for (let i = 0; i < 50; i++) {
//     store.dispatch(actions.startAddHardloopdata({
//         time: moment().subtract(5, 'months').add(i*3, 'days'),
//         data: getRandomArbitrary(10, 55)
//     }));
// }},1000);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
}

store.dispatch(actions.setHardloopState('stopped'));
store.dispatch(actions.setCount(0));


// App css
require('style!css!sass!applicationStyles');
// require('bootstrap');

ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);
