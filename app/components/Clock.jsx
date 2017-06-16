var React = require('react');

var Clock = React.createClass({
	getDefaultProps: function () {
		totalSeconds: 0;
	},
	propTypes: {
		totalSeconds: React.PropTypes.number
	},
	formatSeconds: function (totalSeconds) {
		var seconds = totalSeconds % 60;
		var minutes = Math.floor(totalSeconds / 60);

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return minutes + ':' + seconds;
	},
	render: function () {
		var {totalSeconds} = this.props;
		return (
			<h1>Duur: {this.formatSeconds(totalSeconds)}</h1>
		);
	}
});

export default Clock