import * as api from '../api/index.js';

export const generateReceipt = async (formData, router) => {
    try {
        await api.createReceipt(formData);

        router("/dash")
    } catch (error) {
        return { err: error, message: `Wrong credentials` };
    }
};

export const updateReceipt = async (id, formData, router) => {
    try {
        await api.updateReceipt(id, formData);

        router("/dash")
    } catch (error) {
        return { err: error, message: `Wrong credentials` };
    }
};