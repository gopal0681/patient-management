import React from "react";
import "../CSS/CashlessClaim.css";

const CashlessClaim = () => {
  return (
    <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9">          
          <div className="cashlessclaim-header">
          <h1>Cashless Claim</h1>
          <p>
            This dashboard provides an overview of cashless claim performance metrics, including patient claims and revenue. 
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
                  <td>Rohan Mehta</td>
                  <td>Apollo Hospitals, Chennai</td>
                  <td>185000</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>Priya Sharma</td>
                  <td>Fortis Memorial Research Institute, Gurugram</td>
                  <td>92000</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>Arjun Reddy</td>
                  <td>Manipal Hospital, Bengaluru</td>
                  <td>145500</td>
                  <td>UNCLAIMED / PENDING</td>
                </tr>
                <tr>
                  <td>Neha Kulkarni</td>
                  <td>Kokilaben Dhirubhai Ambani Hospital, Mumbai</td>
                  <td>210750</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>Imran Khan</td>
                  <td>Medanta – The Medicity, Gurugram</td>
                  <td>67500</td>
                  <td>UNCLAIMED / PENDING</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
 );
};

export default CashlessClaim;