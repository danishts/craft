// src/pages/OrderTracker/TrackDetails.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StatusFilter from "../../components/StatusFilter/StatusFilter";
import ContactCard from "../../components/ContactCard/ContactCard";
import dani from "../../assets/dani.jpg";

export default function TrackDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("All");

  if (!state) return <div className="p-4">No tracking data found.</div>;

  return (
    <div className="p-4 mt-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate("/order-tracker")}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-[18px] text-[#020617] font-semibold">
            Tracking Details
          </h2>
        </div>

        <StatusFilter
          selected={selectedStatus}
          onChange={(value) => setSelectedStatus(value)}
        />
      </div>

      <ContactCard
        name="Ali Khan"
        email="ali@example.com"
        phone="+92 300 1234567"
        address="Lahore, Pakistan"
        imageUrl={dani}
      />

      <div className="space-y-2 mt-4">
        <div>
          <strong>Customer Name:</strong> {state["Customer Name"]}
        </div>
        <div>
          <strong>Project Category:</strong> {state["Project Category"]}
        </div>
        <div>
          <strong>Quote Identifier:</strong> {state["Quote Identifier"]}
        </div>
        <div>
          <strong>Current Progress:</strong> {state["Current Progress"]}
        </div>
      </div>
    </div>
  );
}
