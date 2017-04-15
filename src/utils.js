import axios from 'axios';

export const takePicture = (params) => {
	return new Promise ((res, rej) => {
		axios.get(`${api_url}/screenshot`, {
			params
		})
		.then(data => res(data))
		.catch(err => rej(err))
	})
}