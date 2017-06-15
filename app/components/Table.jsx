var React = require('react');
var moment = require('moment');

export var Table = React.createClass({
    renderTableHead: function () {
        var iter = 0;
        return (
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Tijd</th>
                    <th>{this.props.actie}</th>
                    <th>Actie</th>
                </tr>
            </thead>
        )
    },
    renderTableRow: function (key, te) {
        var datum = moment(te.datum).local('nl');
        return (
            <tr key={key}>
                <th>{datum.format('D MMMM YYYY')}</th>
                <th>{datum.format('HH:mm')}</th>
                <th>{te.actie}</th>
                <th>ga</th>
            </tr>
        )
    },
    renderTableBody: function () {
        var iter = 0;
        return (
            <tbody>
            {this.props.data.map((tbb) => {
                return this.renderTableRow(iter++, tbb)
            })}
            </tbody>
        )
    },
    render: function () {
        return (
            <table className="table table-hover table-striped">
                {this.renderTableHead()}
                {this.renderTableBody()}
            </table>
        );
    }
});

export default Table;