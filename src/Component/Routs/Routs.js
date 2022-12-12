import React from "react";
import { Routes, Route } from "react-router-dom";
import Charts from "../../pages/Charts";
import Customer from "../../pages/Customer/Customer";
import Dashboard from "../../pages/Dashboard";


const Routs = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Charts" element={<Charts/>} />
        <Route path="/customer" element={<Customer/>} />
        
      </Routes>
    </div>
  );
};

export default Routs;
