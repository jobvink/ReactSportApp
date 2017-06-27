var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import * as actions from 'actions';
var {Profile} = require('Profile');

describe('Profile', () => {
	it('Zou moeten bestaan', () => {
		expect(Profile).toExist();
	});

	it('Zou CONFIGURE_PROFILE_PHOTO moeten dispatchen met valide data', () => {
		var foto = new File([""], '../../utils/img/profile.png');
		var action = actions.configureProfielPhoto()
		var spy = expect.createSpy();
		var Profile = TestUtils.renderIntoDocument(<Profile dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(Profile));

		Profile.setState({
			profileState: 'EDIT_MODE'
		});
		Profile.refs.file.files[0] = foto;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

});