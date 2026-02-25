import axios from "axios";

console.log("API URL:", process.env.REACT_APP_API_URL);

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/patients/`;

export const getPatients = () => {
    return axios.get(BASE_URL);
};

export const addPatient = (patient) => {
    return axios.post(BASE_URL, patient);
};


export const getPatientById = (patientId) => {
    return axios.get(`${BASE_URL}${patientId}/`);
};


export const deletePatient = (patientId) => {
    return axios.delete(`${BASE_URL}${patientId}/`);
};