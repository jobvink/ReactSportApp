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

export var setCount = (count) => {
    return {
        type: 'SET_COUNT',
        count
    }
};

export var clearCount = () => {
    return {
        type: 'CLEAR_COUNT'
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