import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListPatients from "./ListPatients";
import CashlessClaim from "./Cashlessclaim";
import Reimbursement from "./Reimbursement";
import HospitalManagement from "./HopitalManagement";
import Dashboard from "./Dashboard";
import "../CSS/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo"><Link to="/">PAMS</Link></div>

      <nav className="nav">
        <ul>
          <li className="dropdown">
            <button 
              className="dropbtn"
              onClick={() => setIsOpen(!isOpen)}
            >
              Dashboard ▼
            </button>

            {isOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/" element={<Dashboard />}> Home </Link></li>
                <li><Link to="/patients" element={<ListPatients />}> Patients </Link></li>    
                <li><Link to="/cashless-claim" element={<CashlessClaim />}>Cashless Claim</Link></li>
                <li><Link to="/reimbursement-claim" element={<Reimbursement />}>Reimbursement Claim</Link></li>
                <li><Link to="/hospital-management" element={<HospitalManagement />}>Hospital Management</Link></li>          
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;