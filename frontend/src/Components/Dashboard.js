import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { getPatients } from "../Services/PatientService";
import "../CSS/Dashboard.css";

ChartJS.register(...registerables);

function Dashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients()
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patients",
        data: [12, 19, 8, 15, 22, 30],
        borderColor: "#6777ef",
        backgroundColor: "rgba(103,119,239,0.2)",
      },
    ],
  };

  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-user-injured"></i>
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Total Patients</h4>
                </div>
                <div className="card-body">
                  {patients.length}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-danger">
                <i className="fas fa-calendar"></i>
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Appointments</h4>
                </div>
                <div className="card-body">
                  45
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Revenue</h4>
                </div>
                <div className="card-body">
                  RS.2,300
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Doctors</h4>
                </div>
                <div className="card-body">
                  8
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="card">
          <div className="card-header">
            <h4>Monthly Patient Visits</h4>
          </div>
          <div className="card-body">
            <Line data={data} />
          </div>
        </div>

      </section>
    </div>
  );
}

export default Dashboard;