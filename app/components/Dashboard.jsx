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

        var arrSchema = [];

        if (schema.length > 0) {
            schema.forEach((s) => {
                s.agenda.forEach((a) => {
                    let maandVanNu = moment().add(1, 'months').toDate();
                    let datum = new Date(a.datum).getTime();
                    if (maandVanNu > datum && datum > new Date()) {
                        arrSchema.push(a);
                    }
                })
            });
        }

		var uniqueLegenda = arrLegenda.filter((value, index, self) => {
            return self.indexOf(value) === index;
		});

		return (
			<div>
				<Page title="Dashboard">
					<Panel largeTitle="Hardloop activiteit" smallTitle="laatste 3 maanden">
						<Chart chartdata={data} chartlegenda={uniqueLegenda}/>
					</Panel>
					<Panel largeTitle="Aankomende sport activiteit" smallTitle="1 maand vooruit">
						<Table data={arrSchema}/>
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