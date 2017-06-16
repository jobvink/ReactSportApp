var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

import {Link} from 'react-router';
import Page from 'Page';
import Panel from 'Panel';
import Timer from 'Timer';

var Hardlopen = React.createClass({
	render: function () {
		var {hardloopState} = this.props;
		var renderActionButton = function () {
			if (hardloopState == 'started'){
				return (
					<div>
						<button className="btn btn-danger btn-lg" onClick={handleClick('stop')}>Stop je workout</button>
						<button className="btn btn-info btn-lg" onClick={handleClick('pause')}>Pauseer je workout</button>
					</div>
					)
			} else if (hardloopState == 'paused') {
				return <Link className="btn btn-info btn-lg" onClick={handleClick('hervat')}>Hervat je workout</Link>
			} else {
				return <Link className="btn btn-primary btn-lg" onClick={handleClick('start')}>Begin je workout</Link>
			}
		};
		var state = 'stop';
		var handleClick = function(status) {
			state = status;
		};
		return (
			<div>

				<Page title="Hardlopen">
					<Panel largeTitle="Begin een workout" >
					<div className="jumbotron">
						<h1 className="display-3">Hou je workout bij!</h1>
						<p className="lead">Het is erg simple om je workout bij te houden druk op de knop hier onder, en als je klaar bent druk je er weer op</p>
						<div className="lead">
							{renderActionButton()}
						</div>
						<Timer state={state} startTime={moment()}/>
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