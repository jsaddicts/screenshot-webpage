import axios from 'axios';
import {API_URL} from './constants';

export const takePicture = (params) => {
	return new Promise ((res, rej) => {
		axios.get(`${API_URL}/screenshot`, {
			params
		})
		.then(data => res(data))
		.catch(err => rej(err))
	})
}