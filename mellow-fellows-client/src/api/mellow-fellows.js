import axios from 'axios';

export default axios.create({
    baseURL: 'http://7b5744fb.ngrok.io'
});

// instance.interceptors.request.use(
//     async config => {
//         const token = await localStorage.getItem("token");
//         console.log(token)
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// );

// export default instance;