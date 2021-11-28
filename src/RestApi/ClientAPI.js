import axios from "axios";
import firebase from "firebase";

const getFirebaseToken = () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) return currentUser.getIdToken();
    const token = localStorage.getItem('firebaseToken');
    if (token) return token;
}
const axiosCliean = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'conten-type': 'applycation/json',
    }
});

axiosCliean.interceptors.request.use(async (config) => {
    const token = getFirebaseToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosCliean.interceptors.response.use(function (response) {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});


export default axiosCliean;