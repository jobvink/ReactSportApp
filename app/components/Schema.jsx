var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import Page from 'Page';
import Panel from 'Panel';
import SportSchema from 'SportSchema';


var Schema = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		var {dispatch} = this.props;

		var naam = this.refs.naam.value;

        if (naam.length > 0) {
            this.refs.naam.value = '';
            dispatch(actions.startAddSchema(naam));
        }
    },
	render: function () {
		var {schema} = this.props;

		var renderSchemas = function () {
			if(schema.length === 0){
			    return null;
            } else if( schema === undefined) {
			    return null;
            } else {
                return schema.map((s) => {
                    return <Panel key={s.id} largeTitle={s.name}><SportSchema schemaKey={s.id}
                                                                                        agenda={s.agenda}/></Panel>
                })
            }
        };

		return (
			<div id="Schema">
				<Page title="Schema">
					<Panel largeTitle="Maak een niew schema">
						<div className="jumbotron">
							<h1 className="display-3">Voer hieronder je schema in!</h1>
							<p className="lead">Een goede planning is de weg naar succes, zet hem op!!!</p>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group row">
									<label className="col-2 col-form-label">Schema naam:</label>
									<div className="col-10">
										<input required ref="naam" className="form-control" type="text" placeholder="Naam" id="naam" name="naam" />
									</div>
								</div>
								<div className="form-group col-12">
									<br/>
									<input type="submit" className="btn btn-lg btn-success"/>
								</div>
							</form>
						</div>
					</Panel>
					{renderSchemas()}
				</Page>
				<div style={{clear: "both"}}/>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return {
			schema: state.schema
		}
	}
)(Schema);