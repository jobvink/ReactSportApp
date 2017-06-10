var React = require('react');

import Page from 'Page';
import Chart from 'Chart';

var Dashboard = React.createClass({
	componentWillMount: function () {
		var data1 = [
			[gd(2017, 1, 1), 17],
			[gd(2017, 1, 2), 74],
			[gd(2017, 1, 3), 6],
			[gd(2017, 1, 4), 39],
			[gd(2017, 1, 5), 20],
			[gd(2017, 1, 6), 85],
			[gd(2017, 1, 7), 7]
		];

		var data2 = [
			[gd(2017, 1, 1), 82],
			[gd(2017, 1, 2), 23],
			[gd(2017, 1, 3), 66],
			[gd(2017, 1, 4), 9],
			[gd(2017, 1, 5), 119],
			[gd(2017, 1, 6), 6],
			[gd(2017, 1, 7), 9]
		];

		var data3 = [
			[gd(2017, 1, 1), 43],
			[gd(2017, 1, 2), 21],
			[gd(2017, 1, 6), 23],
			[gd(2017, 1, 7), 85]
		];

		var data = [data1, data2, data3];

		var legenda = ["Jannuari", "Februari", "Morgen"];

		var colors = ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)", "rgba(3, 45, 56, 0.38)"];
		this.setState({
			data,
			legenda,
			colors
		});
		function gd(year, month, day) {
			return new Date(year, month - 1, day).getTime();
		}
	},
	render: function () {
		return (
			<div>
				<Page title="Dashboard">
					<Chart chartdata={this.state.data} chartcolors={this.state.colors} chartlegenda={this.state.legenda}/>
					<div className="dashboard_item">
						<div className="row x_title">
							<div className="col-md-12">
								<h3>Aankomende sport activiteit
									<small>1 week vooruit</small>
								</h3>
							</div>
						</div>
						<div className="col-12">
							<table className="table table-hover table-striped">
								<thead>
								<tr>
									<th>datum</th>
									<th>Tijd</th>
									<th>soort</th>
									<th>Ga</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<th>Vrijdag 1 Januari</th>
									<td>11:30</td>
									<td>Hardlopen</td>
									<td>ga</td>
								</tr>
								<tr>
									<th>Vrijdag 3 Januari</th>
									<td>21:30</td>
									<td>Sportschool</td>
									<td>ga</td>
								</tr>
								<tr>
									<th>Dinsdag 5 Januari</th>
									<td>14:30</td>
									<td>Hardlopen</td>
									<td>ga</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div className="clearfix"></div>
					</div>
				</Page>
			</div>
		);
	}
});

export default Dashboard;