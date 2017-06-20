import * as redux from 'redux';
import thunk from 'redux-thunk';
import {hardloopDataReducer, schemaReducer, hardloopStateReducer, currCountReducer, trophyReducer, profileReducer, authReducer} from 'reducers';
import {trophyChecker} from 'app/trophy';

export var configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        hardloopData: hardloopDataReducer,
        hardloopState: hardloopStateReducer,
        currCount: currCountReducer,
        schema: schemaReducer,
        trophys: trophyReducer,
        profile: profileReducer,
        auth: authReducer
    });

    return redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};