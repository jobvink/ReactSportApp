var React = require('react');
var {Link} = require('react-router');

export var Head = React.createClass({
	render: function () {
		return (
			<div className="sport_head">
				<div className="navbar-brand head_title">
					<h1>Sport App</h1>
				</div>
				<div className="head_links">
					<Link to="/account" >account</Link>
					<Link to="/logout">logout</Link>
				</div>

			</div>
		);
	}
});

export default Head;