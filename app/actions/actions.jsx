var uuid = require('node-uuid');
import firbase, {firebaseRef, githubProvider} from 'app/firebase/';
var moment = require('moment');


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

export var addAllHardloopData = (data) => {
    return {
        type: 'ADD_ALL_HARDLOOP_DATA',
        data
    }
};

export var startAddHardloopdata = (data) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var hardloopdataref = firebaseRef.child(`users/${uid}/hardloopdata`).push({
            time: data.time.toDate().getTime(),
            data: data.data
        });

        return hardloopdataref.then(() => {
            dispatch(addHardloopData(data));
        });
    };
};

export var startAddAllHardloopdata = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var hardloopdataRef = firebaseRef.child(`users/${uid}/hardloopdata`);
        console.log(hardloopdataRef);
        var ReactHardloopdata = [];
        return hardloopdataRef.once('value').then((snapshot) => {
            var hardloopdata = snapshot.val();
            var keys = Object.keys(hardloopdata);

            keys.forEach((key) => {
                var data = hardloopdata[key];
                ReactHardloopdata.push({
                    time: moment(data.time),
                    data: data.data
                });
            });
            dispatch(addAllHardloopData(ReactHardloopdata));
        });
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

export var addTrophys = (trophys) => {
    return {
        typy: 'ADD_TROPHYS',
        trophys
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

export var startLogin = () => {
    return (dispatch, getState) => {
        return firbase.auth().signInWithPopup(githubProvider).then((res) => {
            console.log('auth ging goed', res);
        }, (error) => {
            console.log('auth faalde', error);
        })
    };
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firbase.auth().signOut().then(() => {
            console.log('Uigeloggd');
        })
    };
};

export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
};

export var logout = () => {
    return {
        type: 'LOGOUT'
    }
};