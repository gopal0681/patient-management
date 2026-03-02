import React from "react";
import "../CSS/Hospital.css";

const HospitalManagement = () => {
  return (
    <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9">          
          <div className="hospital-management-header">
          <h1>Hospital Management</h1>
          <p>
            This dashboard provides an overview of hospital performance metrics, including patient claims and revenue. 
            It helps hospital administrators track the number of patients who have claimed insurance benefits, those who haven't, 
            and the overall revenue generated from these claims. The data is updated in real-time to assist in making informed 
            decisions for improving hospital operations and patient care.
          </p>
          </div>
        </div>
        <div className="table-container">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Hospital Name</th>
                  <th>Patients Claimed</th>
                  <th>Patients Unclaimed</th>
                  <th>Overall Revenue (INR)</th>
                </tr>
              </thead>

              <tbody>
                  <tr>
                    <td>Sunrise Multispecialty Hospital</td>
                    <td>1,248</td>
                    <td>132</td>
                    <td>₹ 3,42,75,000</td>
                  </tr>
                  <tr>
                    <td>Green Valley Medical Center</td>
                    <td>982</td>
                    <td>87</td>
                    <td>₹ 2,58,40,500</td>
                  </tr>
                  <tr>
                    <td>CityCare Super Specialty Hospital</td>
                    <td>1,564</td>
                    <td>214</td>
                    <td>₹ 4,96,12,300</td>
                  </tr>
                  <tr>
                    <td>Lifeline Community Hospital</td>
                    <td>743</td>
                    <td>65</td>
                    <td>₹ 1,89,73,850</td>
                  </tr>
                  <tr>
                    <td>Harmony Health Institute</td>
                    <td>1,126</td>
                    <td>104</td>
                    <td>₹ 3,15,68,920</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
 );
};

export default HospitalManagement;