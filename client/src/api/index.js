import axios from 'axios';

const API = axios.create({ baseURL: 'https://rezeptmanagment.herokuapp.com/' });

export const getUser = (formData) => API.post(`/api/user`, formData);
export const fetchUsers = () => API.get(`/api/user/all`);
export const fetchUserByID = (id) => API.get(`/api/user/${id}`);

export const getMedication = (formData) => API.post(`/api/medication`, formData);
export const fetchMedication = () => API.get(`/api/medication/all`);
export const fetchMedicationByID = (id) => API.get(`/api/medication/${id}`);

export const createReceipt = (formData) => API.post(`/api/receipt/create`, formData);
export const fetchReceipt = () => API.get(`/api/receipt/all`);
export const fetchReceiptByID = (id) => API.get(`/api/receipt/${id}`);
export const getReceiptByUserID = (id) => API.get(`/api/receipt/userId/${id}`);
export const updateReceipt = (id, form) => API.patch(`/api/receipt/${id}`, form);