var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

import Page from 'Page';
import Chart from 'Chart';
import Table from 'Table';
import Panel from 'Panel';

var Dashboard = React.createClass({
	render: function () {
		var {hardloopData, agenda} = this.props;

		var laatsteDrieMaanden = hardloopData.filter((maand) => {
			return (maand.maand > moment().startOf('month').subtract(3, 'months'))
		});

		var arrLegenda = [];
		laatsteDrieMaanden.forEach((maand) => {
			arrLegenda.push(moment(maand.maand).local('nl').format('MMMM'))
		});

		var arrData = [];
		laatsteDrieMaanden.forEach((maand) => {
			arrData.push(maand.data);
		});

		return (
			<div>
				<Page title="Dashboard">
					<Panel largeTitle="Hardloop activiteit" smallTitle="laatste 3 maanden">
						<Chart chartdata={arrData} chartlegenda={arrLegenda}/>
					</Panel>
					<Panel largeTitle="Aankomende sport activiteit" smallTitle="1 week vooruit">
						<Table actie="Soort" data={agenda}/>
					</Panel>
				</Page>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	}
)(Dashboard);