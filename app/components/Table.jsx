var React = require('react');
var moment = require('moment');
var actions = require('actions');
var {connect} = require('react-redux');

import Row from 'Row';


export var Table = React.createClass({
    handleDelete: function (e) {
        e.preventDefault();
        console.log();
        var m = e.dispatchMarker;
        // var schemakey = m.slice(m.indexOf('$')+1,m.indexOf('.', m.indexOf('$')));
        // var agendaKey = m.slice(m.indexOf('$', m.indexOf(schemakey) + schemakey.length)+1,m.indexOf('.', m.indexOf('$'),m.indexOf(schemakey) + schemakey.length));
        // console.log(schemakey);
        // console.log(agendaKey);

    },
    renderTableRow: function (key, te) {
        return (
            <Row schemaKey={this.props.schemaKey} agendaKey={te.id} key={key} data={te} />
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
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Tijd</th>
                        <th>Activiteit</th>
                    </tr>
                </thead>
                {this.renderTableBody()}
            </table>
        );
    }
});

export default connect(
    (state) => {
        return {
            state
        }
    }
)(Table);