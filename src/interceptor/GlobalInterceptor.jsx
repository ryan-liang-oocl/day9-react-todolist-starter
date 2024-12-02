import axios from "axios";
import {Modal} from "antd";

const instance = axios.create({
    baseURL: 'http://localhost:8082/todolist',
});


let startTime;
let endTime;


instance.interceptors.request.use(
    (config) => {
        startTime = new Date();
        console.log('Request Start Time: ', startTime);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (response) => {
        endTime = new Date();
        console.log('Request End Time: ', endTime);
        console.log('Request Duration: ', endTime - startTime);
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href = '/notFound';
        }
        if (error.response && error.response.status >= 500 && error.response.status < 600) {
            Modal.error({
                title: 'Error',
                content: error.response.data,
            });
        }
        return Promise.reject(error);
    }
);

export default instance;
