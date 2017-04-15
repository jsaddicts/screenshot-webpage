import React, {Component} from 'react';
import {Row, Col} from 'elemental';

class Home extends Component {
	render () {
		return (
			<div>
				<Row>
					<Col sm="1/3"></Col>
					<Col sm="1/3">
						<h1 className="text-center main-heading">
							Take A Picture
						</h1>
					</Col>
					<Col sm="1/3"></Col>
				</Row>
			</div>
		)
	}
}

export default Home;