import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://api.ezfrontend.com/',
	headers: {
		'Content-Type': 'application/json',
	},
});

// Interceptor

export default axiosClient;
