import React, {Component} from 'react';
import {Row, Col, FormInput, Button, InputGroup} from 'elemental';
import {WebPreview} from './';
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
						<Row>
							<Col sm="1/1">
								<InputGroup>
									<InputGroup.Section grow>
										<FormInput name="url" value={url} onChange={this.updateValue} autoFocus type="text" placeholder="Webpage Url" />
									</InputGroup.Section>
								</InputGroup>
								<InputGroup>
									<InputGroup.Section grow>
										<FormInput name="width" type="number" value={width} onChange={this.updateValue} placeholder="Width" />
									</InputGroup.Section>
									<InputGroup.Section grow>
										<FormInput name="height" type="number" value={height} onChange={this.updateValue} placeholder="Height" />
									</InputGroup.Section>
									<InputGroup.Section>
										<Button type="success" onClick={this.onSubmit}>Take Picture</Button>
									</InputGroup.Section>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col sm="1/1">
								<WebPreview />
							</Col>
						</Row>
					</Col>
					<Col sm="1/3"></Col>
				</Row>
			</div>
		)
	}
}

export default Home;