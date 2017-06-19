var uuid = require('node-uuid');

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

export var addAgenda = (id, agenda) => {
    return {
        type: 'ADD_AGENDA',
        id,
        agenda
    }
};

export var addAgendas = (id, agendas) => {
    return {
        type: 'ADD_AGENDAS',
        id,
        agendas
    }
};

export var addSchema = (naam) => {
    return {
        type: 'ADD_SCHEMA',
        id: uuid(),
        naam
    }
};

export var addTrophy = (title, description, id) => {
    return {
        type: 'ADD_TROPHY',
        title,
        description,
        id
    }
};

export var setFinished = (id) => {
    return {
        type: 'SET_FINISHED',
        id
    }
};


export var configureProfile = (imgPath, naam, geboortedatum, woonplaats, werk) => {
    return {
        type: 'CONFIGURE_PROFILE',
        imgPath,
        naam,
        geboortedatum,
        woonplaats,
        werk
    }
};