var React = require('react');
var {Link, IndexLink} = require('react-router');


export var Nav = React.createClass({
	render: function () {
		return (
			<div className="left_col sport_nav">
				<div className="sidebar">
					<ul className="nav side-menu">
						<IndexLink activeClassName="sport_active" to="/"><li><i className="fa fa-dashboard"></i>Dashboard</li></IndexLink>
						<Link activeClassName="sport_active" to="/hardlopen"><li><i className="fa fa-child"></i>Hardlopen</li></Link>
						<Link activeClassName="sport_active" to="/schema"><li><i className="fa fa-calendar-check-o"></i>Schema</li></Link>
					</ul>
				</div>
				<div className="sidebar-footer">
					<p>Sport App by Job Vink</p>
				</div>
		</div>
		);
	}
});

export default Nav;