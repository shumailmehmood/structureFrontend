//help https://stackoverflow.com/questions/49500379/typical-file-structure-in-reactjs-application-grouping-api-calls-in-api-js
import axios from 'axios';
import resolve from './resolve';

let apiBaseUrl = process.env.REACT_APP_API_BASEURL;


const testAuth = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/profile`).then(res => res.data));
}
const login = async (email, password) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/auth/login`, {
        user: {
            email,
            password
        }
    }).then(res => res.data));
}



export {
    testAuth,
  
    login

}
