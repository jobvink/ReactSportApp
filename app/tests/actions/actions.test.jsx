import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
var moment = require('moment');

import firebase, {firebaseRef} from 'app/firebase/';
import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('Zou SET_HARDLOOP_DATA action moeten genereren', () => {
        let action = {
            type: 'SET_HARDLOOP_DATA',
            data: {
                time: moment(),
                data: 100
            }
        };
        let res = actions.setHardloopData(action.data);

        expect(res).toEqual(action)
    });
    it('Zou ADD_HARDLOOP_DATA action moeten genereren', () => {
        let action = {
            type: 'ADD_HARDLOOP_DATA',
            data: {
                time: moment(),
                data: 100
            }
        };
        let res = actions.addHardloopData(action.data);

        expect(res).toEqual(action)
    });
    it('Zou ADD_ALL_HARDLOOP_DATA action moeten genereren', () => {
        let action = {
            type: 'ADD_ALL_HARDLOOP_DATA',
            data: [{
                time: moment(),
                data: 100
            },{
                time: moment(),
                data: 400
            }]
        };
        let res = actions.addAllHardloopData(action.data);

        expect(res).toEqual(action)
    });
    it('Zou SET_HARDLOOP_STATE action moeten genereren', () => {
        let action = {
            type: 'SET_HARDLOOP_STATE',
            state: 'stopped'
        };
        let res = actions.setHardloopState(action.state);

        expect(res).toEqual(action);
    });
    it('Zou SET_COUNT action moeten genereren', () => {
        let action = {
            type: 'SET_COUNT',
            count: 4
        };
        let res = actions.setCount(action.count);

        expect(action).toEqual(action)
    });
    it('Zou DELETE_AGENDA action moeten genereren', () => {
        let action = {
            type: 'DELETE_AGENDA',
            schema: '123_test_schema',
            agenda: '123_test_agenda'
        };
        let res = actions.deleteAgenda(action.schema, action.agenda);

        expect(res).toEqual(action)
    });
    it('Zou DELETE_SCHEMA action moeten genereren', () => {
        let action = {
            type: 'DELETE_SCHEMA',
            key: '123_test_schema'
        };
        let res = actions.deleteSchema(action.key);

        expect(res).toEqual(action)
    });
    it('Zou DELETE_SCHEMA action moeten genereren', () => {
        let action = {
            type: 'DELETE_SCHEMA',
            key: '123_test_schema'
        };
        let res = actions.deleteSchema(action.key);

        expect(res).toEqual(action)
    });
    it('Zou ADD_AGENDA action moeten genereren', () => {
        let action = {
            type: 'ADD_AGENDA',
            schema: '123_test_schema',
            agenda: '123_test_agenda',
            datum: new Date(),
            activiteit: 'test activiteit'
        };
        let res = actions.addAgenda(action.schema, action.agenda, action.datum, action.activiteit);

        expect(res).toEqual(action)
    });
    it('Zou ADD_AGENDAS action moeten genereren', () => {
        let action = {
            type: 'ADD_AGENDAS',
            id: '123_test agenda',
            agendas: ['1', '2']
        };
        let res = actions.addAgendas(action.id, action.agendas);

        expect(res).toEqual(action)
    });

    describe('Tests met firebase hardloop data', () => {
        let testFirebaseRef;

        beforeEach((done) => {
            let hardloopDataRef = firebaseRef.child('hardloopdata');

            hardloopDataRef.remove().then(() => {
                testFirebaseRef = firebaseRef.child('hardloopdata').push();
                
                return hardloopDataRef.set({
                    time: new Date().getTime(),
                    data: 100
                });
            }).then(() => done()).catch(done);
        });
        
        afterEach((done) => {
            testFirebaseRef.remove().then(() => done())
        });

        it('Zou hardloopdata moeten vullen', (done) => {
            const store = createMockStore({auth: {uid: 'test_user'}});
            const action = actions.startAddHardloopdata({
                time: moment(),
                data: 100
            });

            store.dispatch(action).then(() => {
                const mockAction = store.getActions();

                expect(mockAction[0]).toInclude({
                    type: 'ADD_HARDLOOP_DATA',
                    data: {
                        time: moment(),
                        data: 100
                    }
                });

                done();
            }, done());
        });

        it('zou login actie moeten genereren', () => {
            var uid = 'some_uid';
            var auth = {
                type: 'LOGIN',
                uid
            };
            var res = actions.login(uid);

            expect(res).toEqual(auth);
        });
    });

});