var React = require('react');
var {connect} = require('react-redux');
var momemnt = require('moment');


var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus){
        	debugger;
            switch (this.state.timerStatus){
                case 'start':
                    this.handleStart();
                    break;
                case 'stop':
                    this.setState({
                        count: 0
                    });
                case 'pause':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
				case 'hervat':
					this.handleStart();
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
    },
    handleStart: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    handleStatusChange: function (status) {
        this.setState({timerStatus: status});
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
		var {hardloopState, startTime} = this.props;

		return (
			<div className="lead">
				<h1 className="page-title">Duur: {this.formatSeconds(this.state.count)}</h1>
			</div>
		);
	}
});

module.exports = connect(
	(state) => {
	return {
		hardloopState: state.hardloopState
	};
})(Timer);