import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={handleClose}>PAMS</Link>
      </div>

      <nav className="nav">
        <ul>
          <li className="dropdown">
            <button className="dropbtn" onClick={handleToggle}>
              Management ▼
            </button>

            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/" onClick={handleClose}>
                    Dashboard
                  </Link>
                </li>
                 <li>
                  <Link to="/patients" onClick={handleClose}>
                    Patients
                  </Link>
                </li>

                <li>
                  <Link to="/cashless-claim" onClick={handleClose}>
                    Cashless Claim
                  </Link>
                </li>

                <li>
                  <Link to="/reimbursement-claim" onClick={handleClose}>
                    Reimbursement Claim
                  </Link>
                </li>

                <li>
                  <Link to="/hospital-management" onClick={handleClose}>
                    Hospital Management
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;