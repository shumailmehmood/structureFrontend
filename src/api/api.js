//help https://stackoverflow.com/questions/49500379/typical-file-structure-in-reactjs-application-grouping-api-calls-in-api-js
import axios from 'axios';
import resolve from './resolve';
require('dotenv').config()

// let apiBaseUrl = 'http://loca';
let apiBaseUrl = 'http://localhost:4000';

export const testAuth = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/profile`).then(res => res.data));
}
export const login = async (email, password) => {

    try {

        return await resolve(axios.post(`${apiBaseUrl}/api/auth/login`, {
            user: {
                email,
                password
            }
        }).then(res => res.data))
    }
    catch (err) {
        console.log(err)
    }
}
//////////////////////////////POST//////////////////////////////////////////////
export const createCategory = async (data) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/v1/registerCategory`, data)
        .then(res => res.data));
}
export const createCompany = async (data) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/v1/registerCompany`, data)
        .then(res => res.data));
}
export const createSeller = async (data) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/v1/registerSeller`, data)
        .then(res => res.data));
}
export const createItem = async (data) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/v1/registerItem`, data)
        .then(res => res.data));
}

//==========================GET========================//
export const getAllCategories = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/api/v1/getAllCategories`)
        .then(res => res.data));
}
export const getAllSellers = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/api/v1/getAllSellers`)
        .then(res => res.data));
}
export const getAllCompanies = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/api/v1/getAllCompanies`)
        .then(res => res.data));
}
export const getStock = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/api/v1/getSearchItems`)
        .then(res => res.data));
}



