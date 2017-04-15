import React, {Component} from 'react';
import {Row, Col, FormInput, Button, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter, Spinner} from 'elemental';
import {WebPreview} from './';
import {takePicture} from '../utils';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			params: {
				url: 'http://www.google.com',
				width: 1360,
				height: 768,
				format: 'base64' 
			},
			image: null,
			modalIsOpen: false
		}
	}

	onSubmit = () => {
		this.toggleModal();
		takePicture(this.state.params)
			.then(res => {
				console.log(res.data)
				this.setState({image: res.data.src})
			})
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

	toggleModal = () => {
		this.setState((prevState) => ({
			image: null,
			modalIsOpen: !prevState.modalIsOpen
		}))
	}

	render () {
		const {image, params} = this.state;
		const {url, width, height} = params;
		return (
			<div>
				<Row>
					<Col sm="1/3"></Col>
					<Col sm="1/3" className="text-center container">
						<Row>
							<Col>
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
								<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
									<ModalHeader text="Right Click on the image and choose Save Image As..." showCloseButton onClose={this.toggleModal} />
									<ModalBody className="ModalBody">
										{image ? <WebPreview image={image} /> : <Spinner size="md" type="primary" />}
									</ModalBody>
									<ModalFooter>
										<Button type="primary" onClick={this.toggleModal}>Capture another</Button>
										<Button type="link-cancel" onClick={this.toggleModal}>Cancel</Button>
									</ModalFooter>
								</Modal>
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