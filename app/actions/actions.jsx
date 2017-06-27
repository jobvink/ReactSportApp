var uuid = require('node-uuid');
import firbase, {firebaseRef, storageRef, githubProvider} from 'app/firebase/';
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



export var deleteAgenda = (schema, agenda) => {
    return {
        type: 'DELETE_AGENDA',
        schema,
        agenda
    }
};

export var deleteSchema = (key) => {
    return {
        type: 'DELETE_SCHEMA',
        key
    }
};

export var addAgenda = (schema, agenda, datum, activiteit) => {
    return {
        type: 'ADD_AGENDA',
        schema,
        agenda,
        datum,
        activiteit
    }
};

export var addAgendas = (id, agendas) => {
    return {
        type: 'ADD_AGENDAS',
        id,
        agendas
    }
};

export var addSchema = (schema) => {
    return {
        type: 'ADD_SCHEMA',
        schema
    }
};

export var addSchemas = (schemas) => {
    return {
        type: 'ADD_SCHEMAS',
        schemas
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


export var configureProfielPhoto = (url) => {
    return {
        type: 'CONFIGURE_PROFILE_PHOTO',
        url
    }
};


export var configureProfile = (naam, geboortedatum, woonplaats, werk) => {
    return {
        type: 'CONFIGURE_PROFILE',
        naam,
        geboortedatum,
        woonplaats,
        werk
    }
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

export var startAddSchema = (name) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var schema = {name};
        var schemaRef = firebaseRef.child(`users/${uid}/schemas`).push(schema);

        return schemaRef.then(() => {
            dispatch(addSchema({
                ...schema,
                id: schemaRef.key
            }));
        });
    };
};

export var startAddAgenda = (id, datum, activiteit) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var agendaRef = firebaseRef.child(`users/${uid}/schemas/${id}/agendas`).push({
            datum,
            activiteit
        });
        return agendaRef.then(() => {
            dispatch(addAgenda(id, agendaRef.key, datum, activiteit))
        });
    }
};

export var startUpdateProfile = (naam, geboortedatum, woonplaats, werk) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var profileRef = firebaseRef.child(`users/${uid}/profile`).set({
            naam: naam,
            geboortedatum: geboortedatum,
            woonplaats: woonplaats,
            werk: werk
        });

        return profileRef.then(() => {
            dispatch(configureProfile(naam, geboortedatum, woonplaats, werk));
        });
    };
};

export var startUploadingPhoto = (profilefoto) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var photoRef = storageRef.child(`users/${uid}/images`).put(profilefoto);

        return photoRef.then( () => {
            dispatch(startConfigureProfilePhoto());
        });
    };
};

export var startConfigureProfilePhoto = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var photoRef = storageRef.child(`users/${uid}/images`);
        return photoRef.getDownloadURL().then((url) => {
            dispatch(configureProfielPhoto(url));
        });
    };
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

export var startDeleteAgenda = (schema, agenda) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        return firebaseRef.child(`users/${uid}/schemas/${schema}/agendas/${agenda}`).remove().then(() => {
            dispatch(deleteAgenda(schema, agenda));
        });

    }

};

export var startAddSchemas = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var schemaRef = firebaseRef.child(`users/${uid}/schemas`);
        var ReactSchemas = [];
        return schemaRef.once('value').then((snapshot) => {
            var schemas = snapshot.val();
            if(schemas !== null) {
                var keys = Object.keys(schemas);

                keys.forEach((key) => {
                    var schema = schemas[key];
                    var agendaRef = schemaRef.child(`${key}/agendas`);
                    var ReactAgendas = [];
                    agendaRef.once('value').then((snapshot) => {
                        var agendas = snapshot.val();
                        if (agendas !== null) {
                            var agendaKeys = Object.keys(agendas);
                            agendaKeys.forEach((agendaKey) => {
                                var agenda = agendas[agendaKey];
                                ReactAgendas.push({
                                    id: agendaKey,
                                    datum: agenda.datum,
                                    activiteit: agenda.activiteit
                                });
                            });
                        }
                    });

                    ReactSchemas.push({
                        id: key,
                        name: schema.name,
                        agenda: ReactAgendas
                    });
                });
                dispatch(addSchemas(ReactSchemas));
            }
        });
    }
};

export var startDeleteSchema = (key) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        return firebaseRef.child(`users/${uid}/schemas/${key}`).remove().then(() => {
            dispatch(deleteSchema(key));
        });
    };
};

export var startAddProfile = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var profileRef = firebaseRef.child(`users/${uid}/profile`);
        var ReactProfile = {};
        return profileRef.once('value').then((snapshot) => {
            var ReactProfile = snapshot.val();
            dispatch(configureProfile(
                ReactProfile.naam,
                ReactProfile.geboortedatum,
                ReactProfile.woonplaats,
                ReactProfile.werk,

            ));
        });
    }
};