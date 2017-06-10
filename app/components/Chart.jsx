var React = require('react');

export var Chart = React.createClass({
	componentDidMount: function () {
		var that = this;
		$(document).ready(function () {

			$("#canvas_dahs").length && $.plot($("#canvas_dahs"), [
				...that.props.chartdata
			], {
				series: {
					lines: {
						show: false,
						fill: true
					},
					splines: {
						show: true,
						tension: 0.4,
						lineWidth: 1,
						fill: 0.4
					},
					points: {
						radius: 0,
						show: true
					},
					shadowSize: 2
				},
				grid: {
					verticalLines: true,
					hoverable: true,
					clickable: true,
					tickColor: "#d5d5d5",
					borderWidth: 1,
					color: '#fff'
				},
				colors: [...that.props.chartcolors],
				xaxis: {
					tickColor: "rgba(51, 51, 51, 0.06)",
					mode: "time",
					tickSize: [1, "day"],
					//tickLength: 10,
					axisLabel: "Date",
					axisLabelUseCanvas: true,
					axisLabelFontSizePixels: 12,
					axisLabelFontFamily: 'Verdana, Arial',
					axisLabelPadding: 10
				},
				yaxis: {
					ticks: 8,
					tickColor: "rgba(51, 51, 51, 0.06)",
				},
				tooltip: false
			});
		});
	},
	renderLegenda: function (legenda, colors) {
		var newLegenda = [];
		for (var i = 0; i < legenda.length; i++) {
			newLegenda.push(<li><span style={{background: colors[i]}}></span><p>{legenda[i]}</p></li>)
		}
		return newLegenda;
	},
	render: function () {
		return (
			<div className="dashboard_graph sport_dashboard">
				<div className="row x_title">
					<div className="col-md-12">
						<h3>Hardloop activiteit <small>laatste 3 maanden</small></h3>
					</div>
				</div>
				<div className="col-md-10 col-sm-10 col-xs-10">
					<div>
						<div id="canvas_dahs" className="demo-placeholder"></div>
					</div>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-2 sport_dashboard_legenda">
					<h3>Legenda</h3>
					<ul>
						{this.renderLegenda(this.props.chartlegenda, this.props.chartcolors)}
					</ul>

				</div>
				<div className="clearfix"></div>
			</div>
		);
	}
});

export default Chart;