var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var uuid = require('node-uuid');
var moment = require('moment');

describe('Reducers', () => {

    it('Zou moeten bestaan', () => {
        expect(reducers).toExist();
    });


    describe('profileReducer', () => {
        it('Zou profiel gegevens moeten opslaan', () => {
            var action = {
                type: 'CONFIGURE_PROFILE',
                naam: 'Test persoon',
                geboortedatum: new Date(),
                woonplaats: 'Test plaats',
                werk: 'Test baan'
            };
            var res = reducers.profileReducer(df({}), df(action));

            expect(res.naam).toEqual(action.naam);
            expect(res.geboortedatum).toEqual(action.geboortedatum);
            expect(res.woonplaats).toEqual(action.woonplaats);
            expect(res.werk).toEqual(action.werk);
        });

        it('Zou profiel url moeten opslaan', () => {
            var action = {
                type: 'CONFIGURE_PROFILE_PHOTO',
                url: 'https://firebasestorage.googleapis.com/v0/b/reactsportapptest.appspot.com/o/profile-placeholder.gif?alt=media&token=f48fc36d-bd98-4b84-a9af-8cf5df22de0b'
            };
            var res = reducers.profileReducer(df({}), df(action));

            expect(res.url).toEqual(action.url);
        });
    });

    describe('hardloopDataReducer', () => {
        it('Zou hardloop data toe moeten voegen', () => {
            var data = {
                time: moment(),
                data: 100
            };
            var action = {
                type: 'ADD_HARDLOOP_DATA',
                data
            };

            var res = reducers.hardloopDataReducer(df([]), df(action));

            expect(res).toEqual([data]);

        });

        it('Zou alle hardloop data toe moeten voegen', () => {
            var data = [{
                time: moment(),
                data: 100
            }, {
                time: moment(),
                data: 500
            }];
            var action = {
                type: 'ADD_ALL_HARDLOOP_DATA',
                data
            };

            var res = reducers.hardloopDataReducer(df([]), df(action));

            expect(res).toEqual(data);

        });


    });

    describe('trophyReducer', () => {
        it('Zou een trophy toe moeten voegen', () => {
            var action = {
                type: 'ADD_TROPHY',
                id: 'test_id',
                title: 'test title',
                description: 'test beschrijving',
                finished: false
            };

            var res = reducers.trophyReducer(df([]), df(action));

            expect(res[0].id).toEqual(action.id);
            expect(res[0].finished).toEqual(false);
        });

        it('Zou een trophy toe moeten voegen', () => {
            var action = {
                type: 'SET_FINISHED',
                id: 'test_id'
            };
            var res = reducers.trophyReducer(df([

                {
                    id: 'test_id',
                    title: 'test title',
                    description: 'test beschrijving',
                    finished: false
                }

            ]), df(action));

            expect(res[0].id).toEqual(action.id);
            expect(res[0].finished).toEqual(true);
        });

    });
});



