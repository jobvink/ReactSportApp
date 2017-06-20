var React = require('react');
var {Link} = require('react-router');
var {connect} = require('react-redux');
var actions = require('actions');
var Router = require('react-router');

export var Head = React.createClass({
    onLogout(e) {
        var {dispatch} = this.props;
        dispatch(actions.startLogout());
    },
	render: function () {
		return (
			<div className="sport_head">
				<div className="navbar-brand head_title">
					<h1>Sport App</h1>
				</div>
				<div className="head_links">
					<Link to="/profile" >account</Link>
					<a href="#/login" onClick={this.onLogout}>logout</a>
				</div>

			</div>
		);
	}
});

export default connect(
    (state) => {
        return {
            state
        }
    }
)(Head);