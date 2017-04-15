import React, {Component} from 'react';
import {Row, Col, FormInput, Button, InputGroup} from 'elemental';

class Home extends Component {
	render () {
		return (
			<div>
				<Row>
					<Col sm="1/3"></Col>
					<Col sm="1/3" className="text-center container">
						<InputGroup>
							<InputGroup.Section grow>
								<FormInput autoFocus type="text" placeholder="Webpage Url" />
							</InputGroup.Section>
						</InputGroup>
						<InputGroup>
							<InputGroup.Section grow>
								<FormInput autoFocus type="text" placeholder="Width" />
							</InputGroup.Section>
							<InputGroup.Section grow>
								<FormInput autoFocus type="text" placeholder="Height" />
							</InputGroup.Section>
							<InputGroup.Section>
								<Button type="success">Take Picture</Button>
							</InputGroup.Section>
						</InputGroup>
					</Col>
					<Col sm="1/3"></Col>
				</Row>
			</div>
		)
	}
}

export default Home;