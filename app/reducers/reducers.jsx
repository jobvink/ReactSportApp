var uuid = require('node-uuid');

export var hardloopDataReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HARDLOOP_DATA':
            return [
                ...action.data
            ];
        case 'ADD_HARDLOOP_DATA':
            return [
                ...state,
                action.data
            ];
        default:
            return state
    }
};

export var hardloopStateReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_HARDLOOP_STATE':
            return action.state;
        default:
            return state
    }
};

export var currCountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return action.count;
        case 'CLEAR_COUNT':
            return 0;
        default:
            return state
    }
};

export var schemaReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_AGENDA':
            return state.map((s) => {
                if (s.id === action.id) {
                    return {
                        ...s,
                        agenda: [
                            ...s.agenda,
                            action.agenda
                        ]
                    }
                } else {
                    return s
                }
            });
        case 'ADD_AGENDAS':
            return state.map((s) => {
                if (s.id === action.id) {
                    return {
                        ...s,
                        agenda: [
                            ...s.agenda,
                            ...action.agendas
                        ]
                    }
                } else {
                    return s
                }
            });
        case 'ADD_SCHEMA':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.naam,
                    agenda: []
                }
            ];
        default:
            return state
    }
};

export var trophyReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TROPHY':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    finished: false
                }
            ];
        case 'SET_FINISHED':
            return state.map((trophy) => {
                if (trophy.id === action.id) {
                    return {
                        ...trophy,
                        finished: true
                    }
                } else {
                    return trophy
                }
            });
        default:
            return state
    }
};

export var profileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CONFIGURE_PROFILE':
            return {
                imgPath: action.import,
                naam: action.naam,
                geboortedatum: action.geboortedatum,
                woonplaats: action.woonplaats,
                werk: action.werk
            };
        default:
            return state
    }
};