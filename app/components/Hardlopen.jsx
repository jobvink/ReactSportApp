var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

import {Link} from 'react-router';
import Page from 'Page';
import Panel from 'Panel';
import Timer from 'Timer';

var Hardlopen = React.createClass({
	render: function () {
		return (
			<div>
				<Page title="Hardlopen">
					<Panel largeTitle="Begin een workout" >
					<div className="jumbotron">
						<h1 className="display-3">Hou je workout bij!</h1>
						<p className="lead">Het is erg simple om je workout bij te houden druk op de knop hier onder, en als je klaar bent druk je er weer op</p>
						<Timer/>
					</div>
					</Panel>

				</Page>
			</div>
		);
	}
});

export default connect(
	(state) => {
        return {
            hardloopState: state.hardloopState
        };
	}
)(Hardlopen);