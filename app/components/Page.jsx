var React = require('react');

export var Page = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">{this.props.title}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});

export default Page;