var React = require('react');

import Nav from 'Nav';
import Head from 'Head';

export var Main = (props) => {
	return (
		<div className="container">
			<div className="col-12 no-padding">
			<Head/>
			</div>
			<div className="row" style={{margin: 0}}>
				<div className="sport_nav col-2">
					<Nav/>
				</div>
				<div className="sport_content col-10">
					{props.children}
				</div>

			</div>
		</div>
		);
	};


	export default Main