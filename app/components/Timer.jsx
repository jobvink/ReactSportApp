var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

import Controls from 'Controls'
import Clock from 'Clock';

var Timer = React.createClass({
    componentDidUpdate: function (prevProps, prevState) {
        if (this.props.hardloopState !== prevProps.hardloopState){
            switch (this.props.hardloopState){
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
    },
    handleStart: function () {
        this.timer = setInterval(() => {
            this.props.dispatch(actions.setCount(this.props.currCount+1));
        }, 1000);
    },
    handleStatusChange: function (status) {
        this.props.dispatch(actions.setHardloopState(status));
    },
    render: function () {
        var {hardloopState, currCount} = this.props;
        return (
            <div>
                <Controls countdownStatus={hardloopState} onStatusChange={this.handleStatusChange}/>
                <Clock totalSeconds={currCount}/>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            hardloopState: state.hardloopState,
            currCount: state.currCount
        }
    }
)(Timer);