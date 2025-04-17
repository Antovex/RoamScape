/*  eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
    try {
        // const res = await axios({
        //     method: 'PATCH',
        //     url: 'http://localhost:3000/api/v1/users/updateMe',
        //     data: {
        //         name,
        //         email,
        //     },
        // })

        // if (res.data.status === 'success') {
        //     showAlert('success', 'Updated successfully!');
        //     window.setTimeout(() => {
        //         location.assign('/me');
        //     }, 1500);
        // }
        const url =
            type === 'password'
                ? '/api/v1/users/updateMyPassword'
                : '/api/v1/users/updateMe';
        const res = await axios({
            method: 'PATCH',
            url,
            data,
        });
        if (res.data.status === 'success') {            
            showAlert('success', 'Updated successfully!');
            window.setTimeout(() => {
                location.assign('/me');
            }, 1500);
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
};
