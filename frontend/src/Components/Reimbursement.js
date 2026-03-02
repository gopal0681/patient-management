import React from "react";
import "../CSS/Reimbursement.css";

const Reimbursement = () => {
  return (
    <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9">          
          <div className="reimbursement-header">
          <h1>Reimbursement Claim</h1>
          <p>
            This dashboard provides an overview of reimbursement claim performance metrics, including patient claims and revenue. 
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
                  <th>Patient Name</th>
                  <th>Hospital Name</th>
                  <th>Amount Claimed (INR)</th>
                  <th>Claim Status (Y/N/UP)</th>
                </tr>
              </thead>

              <tbody>
                 <tr>
                  <td>Anjali Verma</td>
                  <td>Max Super Speciality Hospital, Saket</td>
                  <td>158300</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>Siddharth Nair</td>
                  <td>Aster CMI Hospital, Bengaluru</td>
                  <td>88450</td>
                  <td>UNCLAIMED / PENDING</td>
                </tr>
                <tr>
                  <td>Meera Iyer</td>
                  <td>Ruby Hall Clinic, Pune</td>
                  <td>132900</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>Karan Malhotra</td>
                  <td>Sir Ganga Ram Hospital, New Delhi</td>
                  <td>247600</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>Farhan Ali</td>
                  <td>Care Hospitals, Hyderabad</td>
                  <td>71980</td>
                  <td>UNCLAIMED / PENDING</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
 );
};

export default Reimbursement;