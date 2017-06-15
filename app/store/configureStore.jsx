import * as redux from 'redux';
import thunk from 'redux-thunk';

import {hardloopDataReducer, agendaReducer, hardloopStateReducer} from 'reducers';

export var configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        hardloopData: hardloopDataReducer,
        hardloopState: hardloopStateReducer,
        agenda: agendaReducer
    });

    return redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};