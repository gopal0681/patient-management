import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/patients/`;

export const getPatients = () => {
  return axios.get(BASE_URL);
};

export const addPatient = (patient) => {
  return axios.post(BASE_URL, {
    fullName: patient.fullName,
    age: parseInt(patient.age),
    gender: patient.gender,
    insuranceProvider: patient.insuranceProvider,
    policyNumber: patient.policyNumber,
    doctorName: patient.doctorName
  });
};

export const getPatientById = (patientId) => {
  return axios.get(`${BASE_URL}${patientId}/`);
};

export const deletePatient = (patientId) => {
  return axios.delete(`${BASE_URL}${patientId}/`);
};