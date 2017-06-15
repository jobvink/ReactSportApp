var React = require('react');
var {connect} = require('react-redux');

import {Link} from 'react-router';
import Page from 'Page';
import Panel from 'Panel';

var Hardlopen = React.createClass({
	render: function () {
		var {hardloopState} = this.props;
		var renderActionButton = function () {
			if (hardloopState == 'started'){
				return (
					<div>
						<Link className="btn btn-danger btn-lg" to="make">Stop je workout</Link>
						<Link className="btn btn-info btn-lg" to="make">Pauseer je workout</Link>
					</div>
					)
			} else if (hardloopState == 'paused') {
				return <Link className="btn btn-info btn-lg" to="make">Hervat je workout</Link>
			} else {
				return <Link className="btn btn-primary btn-lg" to="make">Begin je workout</Link>
			}
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