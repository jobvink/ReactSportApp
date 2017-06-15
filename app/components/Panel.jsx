var React = require('react');

export var Panel = React.createClass({
    render: function () {
        return (
            <div className="dashboard_item">
                <div className="row x_title">
                    <div className="col-md-12">
                        <h3>{this.props.largeTitle}
                            <small>&nbsp;{this.props.smallTitle}</small>
                        </h3>
                    </div>
                </div>
                <div className="col-12">
                    {this.props.children}
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
});

export default Panel