import axiosClient from './axiosClient';

const categoryApi = {
	getAll(params) {
		const url = '/categories';
		return axiosClient.get(url, { params });
	},

	get(id) {
		const url = `categories/${id}`;
		axiosClient.get(url);
	},

	add(data) {
		const url = 'categories';
		axiosClient.post(url, data);
	},

	update(data) {
		const url = `categories/${data.id}`;
		axiosClient.patch(url, data);
	},

	delete(id) {
		const url = `categories/${id}`;
		axiosClient.delete(url);
	},
};

export default categoryApi;
