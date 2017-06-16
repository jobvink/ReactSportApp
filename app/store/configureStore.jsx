import * as redux from 'redux';
import thunk from 'redux-thunk';

import {hardloopDataReducer, agendaReducer, hardloopStateReducer, currCountReducer} from 'reducers';

export var configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        hardloopData: hardloopDataReducer,
        hardloopState: hardloopStateReducer,
        currCount: currCountReducer,
        agenda: agendaReducer
    });

    return redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};