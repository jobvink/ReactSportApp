	import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
	onLogin() {
		var {dispatch} = this.props;

		dispatch(actions.startLogin());
	},
	render() {
		return (
			<div className="sport_login">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-xs-10">
							<h1>Sport App</h1>
							<p>Login met github account hieronder.</p>
							<div className="row">
								<div className="col-xs-10 col-md 6">
									<button onClick={this.onLogin} className="btn btn-info">Login met Github</button>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);

	}
});

export default Redux.connect()(Login);