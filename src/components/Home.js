import React, {Component} from 'react';
import {Row, Col, FormInput, Button, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Card, FormField} from 'elemental';
import {WebPreview} from './';
import {takePicture} from '../utils';

const Icon = ({name, href, color}) => {
	return (
		<span>
			<a className="icon-links" 
				href={href}
				style={{color: (color || 'black')}}
				target="_blank">
				<i className={`fa fa-${name}`} />
			</a>
		</span>
	)
}

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
				<Col>
				<Row>
					<Col sm="1/3"></Col>
					<Col sm="1/3" className="text-center container">
						<Row>
							<Col>
								<h1>
									Take A Picture
								</h1>
								<InputGroup>
									<InputGroup.Section grow>
										<FormField label="Webpage Address">
											<FormInput name="url" value={url} onChange={this.updateValue} autoFocus type="text" placeholder="Webpage Url" />
										</FormField>
									</InputGroup.Section>
								</InputGroup>
								<FormField label="Viewport Size">
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
								</FormField>
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
										<Button disabled={!image} type="primary" onClick={this.toggleModal}>Capture another</Button>
										<Button type="link-cancel" onClick={this.toggleModal}>Cancel</Button>
									</ModalFooter>
								</Modal>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card className="info">
									<div style={{textAlign: 'center'}}>
										Made by <strong><a href="http://www.manojsinghnegi.com/">Manoj Singh Negi</a></strong> with React, <a href="https://github.com/manojsinghnegiwd/screenshot-webpage-server" target="_blank">Screenshot Webpage Server</a> & Node.JS
										<br />
									</div>
								</Card>
								<div className="icons-container">
									<Icon color="#3b5998" name="facebook-official" href="https://www.facebook.com/manojsinghnegiwd/" />
									<Icon color="#1da1f2" name="twitter" href="https://twitter.com/manojnegiwd" />
									<Icon color="#333" name="github" href="https://github.com/jsaddicts/screenshot-webpage" />
								</div>
							</Col>
						</Row>
					</Col>
					<Col sm="1/3"></Col>
				</Row>
				</Col>
			</div>
		)
	}
}

export default Home;