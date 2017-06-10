var React = require('react');

import {Link} from 'react-router';
import Page from 'Page';

var Hardlopen = React.createClass({
	render: function () {
		return (
			<div>

				<Page title="Hardlopen">
					<div className="jumbotron">
						<h1 className="display-3">Hou je workout bij!</h1>
						<p className="lead">Het is erg simple om je workout bij te houden druk op de knop hier onder, en als je klaar bent druk je er weer op</p>
						<p className="lead">
							<Link className="btn btn-primary btn-lg" to="make">Begin je workout</Link>
						</p>
					</div>

				</Page>
			</div>
		);
	}
});

export default Hardlopen;