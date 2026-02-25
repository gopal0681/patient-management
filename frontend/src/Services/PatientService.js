import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/patients/`;

export const getPatients = () => {
  return axios.get(BASE_URL);
};

export const addPatient = (patient) => {
  return axios.post(BASE_URL, {
    fullNamename: patient.fullName,
    age: patient.age,
    gender: patient.gender,
    insurance_provider: patient.insuranceProvider,
    policy_number: patient.policyNumber,
    doctor_name: patient.doctorName
  });
};

export const getPatientById = (patientId) => {
  return axios.get(`${BASE_URL}${patientId}/`);
};

export const deletePatient = (patientId) => {
  return axios.delete(`${BASE_URL}${patientId}/`);
};