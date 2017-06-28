var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

import Page from 'Page';
import Chart from 'Chart';
import Table from 'Table';
import Panel from 'Panel';

var Dashboard = React.createClass({
	render: function () {
		var {hardloopData, schema} = this.props;

		var laatsteDrieMaanden = hardloopData.filter((maand) => {
			return (maand.time > moment().startOf('month').subtract(2, 'months'))
		});

		var arrLegenda = [];
		var arrData = [];
		laatsteDrieMaanden.forEach((maand) => {
			arrLegenda.push(maand.time.local('nl').format('MMMM'));
			arrData.push([maand.time.toDate().getTime(), maand.data]);
		});

		var data = [];
		for (let i = 0; i <= 2; i++){
		    let month = [];
		    arrData.forEach((val) => {
		        if (val[0] > moment().startOf('month').subtract(i, 'months').toDate().getTime()) {
		            month.push(val);
                }
            });
            data.push(month);
        }

		var uniqueLegenda = arrLegenda.filter((value, index, self) => {
            return self.indexOf(value) === index;
		});

		var agenda = [];
		schema.forEach((entry) => {
			console.log('entry: ', entry.agenda);
			entry.agenda.forEach((data) => {
				console.log('data: ', data);
				var datum = moment(data.datum).local('nl');
				agenda.push({
					datum: datum.format('D MMMM YYYY'),
					tijd: datum.format('HH:mm'),
					activiteit: data.activiteit,
					key: data.id
				});
			});
		});

		console.log('agenda: ', agenda);

		var renderRows = () => {
			return agenda.map((data) => {
				return (
					<tr key={data.key}>
						<td>{data.datum}</td>
						<td>{data.tijd}</td>
						<td>{data.activiteit}</td>
					</tr>
				)
			});
		};

		return (
			<div>
				<Page title="Dashboard">
					<Panel largeTitle="Hardloop activiteit" smallTitle="laatste 3 maanden">
						<Chart chartdata={data} chartlegenda={uniqueLegenda}/>
					</Panel>
					<Panel largeTitle="Agenda" >
						<table className="table table-striped">
							<thead>
								<td>Datum:</td>
								<td>Tijd:</td>
								<td>Activiteit</td>
							</thead>
							<tbody>
							{renderRows()}
							</tbody>
						</table>
					</Panel>
				</Page>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return {
		    hardloopData: state.hardloopData,
            schema: state.schema
        };
	}
)(Dashboard);