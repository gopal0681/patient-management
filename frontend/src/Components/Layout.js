import { Outlet, Link } from "react-router-dom";
import ListPatients from "./ListPatients";
import CashlessClaim from "./Cashlessclaim";
import Reimbursement from "./Reimbursement";
import HospitalManagement from "./HopitalManagement";
import "../CSS/Layout.css";

function Layout() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/patients" element={<ListPatients />}> Patients </Link></li>    
          <li><Link to="/cashless-Claim" element={<CashlessClaim />}>Cashless Claim</Link></li>
          <li><Link to="/reimbursement-Claim" element={<Reimbursement />}>Reimbursement Claim</Link></li>
          <li><Link to="/hospital-Management" element={<HospitalManagement />}>Hospital Management</Link></li>          
        </ul>
      </aside>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;