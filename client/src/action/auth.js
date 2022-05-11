import * as api from '../api/index.js';

export const signin = async (formData, router) => {
    try {
        const reqbody = {
            email: formData.email || '',
            password: formData.password || '',
        }

        const user = await api.getUser(reqbody);

        localStorage.setItem('user', JSON.stringify(user.data));

        router("/dash")
    } catch (error) {
        return { err: error, message: `Wrong credentials` };
    }
};

export const logout = async (router) => {
    try {

        localStorage.removeItem('user');

        router("/")
    } catch (error) {
        return { err: error, message: `Wrong credentials` };
    }
};
