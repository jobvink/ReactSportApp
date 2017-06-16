var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

import Table from 'Table';

var SportSchema = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();

        var {dispatch, schemaKey} = this.props;

        var datum = this.refs.date.value;
        var activiteit = this.refs.activiteit.value;

        if (datum.length > 0 && activiteit.length > 0) {
            this.refs.date.value = '';
            this.refs.activiteit.value = '';

            dispatch(actions.addAgenda(schemaKey, {datum, activiteit}))
        }
    },
    render: function () {
        var {agenda} = this.props;

        var renderAgenda = function () {
            if(agenda.length > 0){
                return <Table actie="Activiteit" data={agenda}/>
            } else {
                return <p>Nog geen activiteiten gepland voor deze sport</p>
            }

        };

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <label className="mr-sm-2">Datum:</label>
                    <input type="datetime-local" className="custom-select mb-2 mr-sm-2 mb-sm-0" ref="date" id="data" name="date" />
                    <label className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">Activiteit:</label>
                    <input type="text" className="custom-select mb-2 mr-sm-2 mb-sm-0" ref="activiteit" id="activiteit" name="activiteit"/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
                <br/>
                {renderAgenda()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            state
        }
    }
)(SportSchema)