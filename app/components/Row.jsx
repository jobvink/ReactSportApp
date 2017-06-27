var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

var Row = React.createClass({
    handleDelete: function (e) {
        e.preventDefault();
        var {dispatch, schemaKey, agendaKey} = this.props;
        dispatch(actions.startDeleteAgenda(schemaKey, agendaKey))
    },
    render: function () {
        var {data, agendaKey, schemaKey} = this.props;
        var datum = moment(data.datum).local('nl');
        return (
            <tr>
                <th>{datum.format('D MMMM YYYY')}</th>
                <th>{datum.format('HH:mm')}</th>
                <th>{data.activiteit}</th>
                <th>
                    <form onSubmit={this.handleDelete}>
                        <input type="submit" value="Verwijder" className="btn btn-danger" />
                    </form>
                </th>
            </tr>
        )
    }
});

export default connect(
    (state) => {
        return {
            state
        }
    }
)(Row);