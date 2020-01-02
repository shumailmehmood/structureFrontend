//help https://stackoverflow.com/questions/49500379/typical-file-structure-in-reactjs-application-grouping-api-calls-in-api-js
import axios from 'axios';
import resolve from './resolve';
require('dotenv').config()

let apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


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
//////////////////////////////SUBJECT//////////////////////////////////////////////
export const createSubject = async (name) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/createSubject`, {
        name
    }).then(res => res.data));
}

export const getSubjects = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/api/getSubjects`)
        .then(res => res.data));
}
export const getSpecificSubject = async (subjectId) => {
    return await resolve(axios.get(`${apiBaseUrl}/api/getSubjects?subjectId=${subjectId}`)
        .then(res => res.data));
}

export const editSubject = async (id, name) => {
    return await resolve(axios.put(`${apiBaseUrl}/api/editSubject/${id}`, { name })
        .then(res => res.data));
}

export const deactivateSubject = async (id, name) => {
    return await resolve(axios.put(`${apiBaseUrl}/api/deactivateSubject/${id}`)
        .then(res => res.data));
}
//////////////////////////////VIDEO//////////////////////////////////////////////
export const getVideoDocuments = async (subjectId) => {
    return await resolve(axios.get(`${apiBaseUrl}/api/getVideoDocuments?subjectId=${subjectId}`)
        .then(res => res.data));
}
export const createVideoDocument = async (subjectId, name, videoUrl, thumbUrl) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/createVideoDocument`, {
        subjectId, name, videoUrl, thumbUrl
    }).then(res => res.data));
}
export const editVideoDocument = async (id, name, videoUrl, thumbUrl) => {
    return await resolve(axios.put(`${apiBaseUrl}/api/editVideoDocument/${id}`, {
        name, videoUrl, thumbUrl
    }).then(res => res.data));
}
export const createQuiz = async (data) => {
   
        return await resolve(axios.post(`${apiBaseUrl}/api/createQuiz`, data)
            .then(res => res.data));
   
}
export const viewQuiz = async (params) => {
    return await resolve(axios.get(`${apiBaseUrl}/api/getQuiz?page=${params.page}&limit=${params.limit}&level=${params.level}&subject=${params.subject}`)
        .then(res => res.data));
}
export const removeQuiz = async (params) => {
    return await resolve(axios.get(`${apiBaseUrl}/api/deleteQuizQuestion?level=${params.level}&subjectId=${params.subject}&questionId=${params.id}`)
        .then(res => res.data));
}
export const editQuiz = async (params, body) => {
    return await resolve(axios.post(`${apiBaseUrl}/api/editQuiz?level=${params.level}&subjectId=${params.subject}&questionId=${params.id}`, body)
        .then(res => res.data));
}
export const uploadImage = async (body, config) => {
    return await resolve(axios.post(`${apiBaseUrl}/uploadimage`, body, config)
        .then(res => res.data));
}

