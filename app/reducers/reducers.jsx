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

export var agendaReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_AGENDA':
            return [
                ...state,
                action.agenda
            ];
        case 'ADD_AGENDAS':
            return [
                ...state,
                ...action.agendas
            ];
        default:
            return state
    }
};