import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPatients, deletePatient } from "../Services/PatientService.js";
import StatsModal from "./StatsModal.js";
import "../CSS/List.css";

const ListPatients = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadPatients = () => {
    getPatients()
      .then(res => setPatients(res.data))
      .catch(err => console.error("Error fetching patients:", err));
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleView = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this patient?");
    if (confirmDelete) {
      deletePatient(id)
        .then(() => {
          alert("Patient deleted successfully!");
          loadPatients();
        })
        .catch(err => console.error("Error deleting patient:", err));
    }
  };

  return (
    <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9">
        
          <h2>Patient List</h2>
  
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Doctor</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.fullName}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.doctorName}</td>
                <td>
                  <button className="action-buttons" onClick={() => handleView(patient)}>
                    View
                  </button>
                   <button
                    className="delete-btn"
                    onClick={() => handleDelete(patient.id)}>
                    Delete
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="add-patient-wrapper">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => navigate("/add-patient")} >
            Add Patient
          </button>
        </div>

        {showModal && (
          <StatsModal
            patient={selectedPatient}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
      
  );
};

export default ListPatients;
