export var setHardloopData = (data) => {
    return {
        type: 'SET_HARDLOOP_DATA',
        data
    }
};

export var addHardloopData = (data) => {
    return {
        type: 'ADD_HARDLOOP_DATA',
        data
    }
};

export var setHardloopState = (state) => {
    return {
        type: 'SET_HARDLOOP_STATE',
        state
    }
};

export var addAgenda = (agenda) => {
    return {
        type: 'ADD_AGENDA',
        agenda
    }
};

export var addAgendas = (agendas) => {
    return {
        type: 'ADD_AGENDAS',
        agendas
    }
};