var React = require('react');

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},
	onStatusChange: function (newStatus){
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	render: function () {
		var {countdownStatus} = this.props;
        var renderActionButton = () => {
            if (countdownStatus == 'started'){
                return (
					<div>
						<button className="btn btn-danger btn-lg" onClick={this.onStatusChange('stopped')}>Stop je workout</button>
						<button className="btn btn-info btn-lg" onClick={this.onStatusChange('paused')}>Pauseer je workout</button>
					</div>
                )
            } else if (countdownStatus == 'paused') {
                return <button className="btn btn-info btn-lg" onClick={this.onStatusChange('started')}>Hervat je workout</button>
            } else {
                return <button className="btn btn-primary btn-lg" onClick={this.onStatusChange('started')}>Begin je workout</button>
            }
        };

		return (
			<div className="lead">
				{renderActionButton()}
			</div>
		)
	}
});

export default Controls;