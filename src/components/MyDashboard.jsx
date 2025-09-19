import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import RationCard from "./RationCard";
import AddMember from "./AddMember";
import MyStock from "./MyStock";
import DistributedStock from "./DistributedStock";

function MyDashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="rationcard" element={<RationCard />} />
          <Route path="addmember" element={<AddMember />} />
          <Route path="mystock" element={<MyStock />} />
          <Route path="distributedstock" element={<DistributedStock />} />
        </Routes>
      </div>
    </div>
  );
}

export default MyDashboard;
