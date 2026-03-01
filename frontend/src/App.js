import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPatient from "./Components/AddPatient";
import CashlessClaim from "./Components/Cashlessclaim";
import Reimbursement from "./Components/Reimbursement";
import HospitalManagement from "./Components/HopitalManagement";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import ListPatients from "./Components/ListPatients";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid mt-4">
        
        <div className="app">
          <Header />

          <main className="content">
            <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              </Route>
              <Route path="/patients" element={<ListPatients />} />
              <Route path="/patients/add" element={<AddPatient />} />
              <Route path="/cashless-claim" element={<CashlessClaim />} />
              <Route path="/reimbursement-claim" element={<Reimbursement />} />
              <Route path="/hospital-management" element={<HospitalManagement />} />
              </Routes>
          </main>

          <Footer />
        </div>
      </div> 
    </Router>
  );
}

export default App;