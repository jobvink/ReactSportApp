var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');


import * as actions from 'actions';
var {trophys} = require('../../trophy');
var {Profile} = require('Profile');

describe('Profile', () => {
	it('Zou moeten bestaan', () => {
		expect(Profile).toExist();
	});

	describe('Trophies', () => {
		it('Zou het goede aantal tropheen moeten laden', () => {
		    var t = [];
            Object.keys(trophys).forEach((key) => {
		        let trophy = trophys[key];
                t.push({
                    id: trophy.id,
                    title: trophy.title,
                    description: trophy.description,
                    finished: false
                });
            });
            let Profiel = TestUtils.renderIntoDocument(
		        <Profile trophys={t} profile={{
                    naam: 'Test naam',
                    geboortedatum: new Date(),
                    woonplaats: 'Test woonplaats',
                    werk: 'Test baan',
                    url: 'https://firebasestorage.googleapis.com/v0/b/reactsportapptest.appspot.com/o/profile-placeholder.gif?alt=media&token=f48fc36d-bd98-4b84-a9af-8cf5df22de0b'
                }}/>
            );
            let $el = $(ReactDOM.findDOMNode(Profiel));
            let $achievements = $el.find('#achievements');

            expect($achievements.children().length).toBe(Object.keys(trophys).length);
        });

        it('Zou het goede aantal trofeen behaald moeten zetten', () => {
            var t = [];
            Object.keys(trophys).forEach((key) => {
                let trophy = trophys[key];
                t.push({
                    id: trophy.id,
                    title: trophy.title,
                    description: trophy.description,
                    finished: false
                });
            });
            t[0].finished = true;
            t[3].finished = true;
            let Profiel = TestUtils.renderIntoDocument(
                <Profile trophys={t} profile={{
                    naam: 'Test naam',
                    geboortedatum: new Date(),
                    woonplaats: 'Test woonplaats',
                    werk: 'Test baan',
                    url: 'https://firebasestorage.googleapis.com/v0/b/reactsportapptest.appspot.com/o/profile-placeholder.gif?alt=media&token=f48fc36d-bd98-4b84-a9af-8cf5df22de0b'
                }}/>
            );
            let $el = $(ReactDOM.findDOMNode(Profiel));
            let $achievements = $el.find('.finished');

            expect($achievements.length).toBe(2);
        })
	});

});