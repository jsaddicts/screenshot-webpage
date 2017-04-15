import React, {Component} from 'react';
import {Row, Col, FormInput, Button, InputGroup} from 'elemental';
import {takePicture} from '../utils';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			params: {
				url: 'http://www.google.com',
				width: 1360,
				height: 768
			}
		}
	}

	onSubmit = () => {
		takePicture(this.state.params)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	updateValue = (e) => {
		this.setState({
			params: {
				...this.state.params,
				[e.target.name]: e.target.value
			}
		})
	}

	render () {
		const {url, width, height} = this.state.params;
		return (
			<div>
				<Row>
					<Col sm="1/3"></Col>
					<Col sm="1/3" className="text-center container">
						<InputGroup>
							<InputGroup.Section grow>
								<FormInput name="url" value={url} onChange={this.updateValue} autoFocus type="text" placeholder="Webpage Url" />
							</InputGroup.Section>
						</InputGroup>
						<InputGroup>
							<InputGroup.Section grow>
								<FormInput name="width" value={width} onChange={this.updateValue} autoFocus type="text" placeholder="Width" />
							</InputGroup.Section>
							<InputGroup.Section grow>
								<FormInput name="height" value={height} onChange={this.updateValue} autoFocus type="text" placeholder="Height" />
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