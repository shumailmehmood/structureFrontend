//help https://stackoverflow.com/questions/49500379/typical-file-structure-in-reactjs-application-grouping-api-calls-in-api-js
import axios from 'axios';
import resolve from './resolve';
require('dotenv').config()

let apiBaseUrl = 'http://172.16.14.150:3001';
<<<<<<< HEAD
// let apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
=======

>>>>>>> 8b4ac96870456ca355ab77abf38656be52a06044

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
    return await resolve(axios.post(`${apiBaseUrl}/api/createSubject`, name )
    .then(res => res.data));
}

export const getSubjects = async () => {
    return await resolve(axios.get(`${apiBaseUrl}/api/getSubjects`)
        .then(res => res.data));
}

export const getSubjectInfo = async (id) => {
    return await resolve(axios.get(`${apiBaseUrl}/api/getSubjectInfo/`+ id)
        .then(res => res.data));
}

export const getSpecificSubject = async (subjectId) => {
    return await resolve(axios.get(`${apiBaseUrl}/api/getSubjects?subjectId=${subjectId}`)
        .then(res => res.data));
}

<<<<<<< HEAD
export const editSubject = async (id, body) => {
    return await resolve(axios.put(`${apiBaseUrl}/api/editSubject/${id}`, body)
=======
export const editSubject = async (id, data) => {
    return await resolve(axios.put(`${apiBaseUrl}/api/editSubject/${id}`, data)
        .then(res => res.data));
}
export const editLevel = async (id, data) => {
    return await resolve(axios.put(`${apiBaseUrl}/api/editLevel/${id}`,data)
>>>>>>> 8b4ac96870456ca355ab77abf38656be52a06044
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


