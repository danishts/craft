// src/pages/OrderTracker/OrderDetails.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StatusFilter from "../../components/StatusFilter/StatusFilter"; // Make sure path is correct
import ContactCard from "../../components/ContactCard/ContactCard";
import dani from "../../assets/dani.jpg"; // Importing the image

export default function OrderDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("All");

  if (!state) return <div className="p-4">No order data found.</div>;

  return (
    <div className="p-4 mt-4 bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate("/pillow-orders")}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-[18px] text-[#020617] font-semibold">
            Order Details
          </h2>
        </div>

        {/* Status Filter on right */}
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
        showButton={true}
      />
      <div className="border-t border-gray-200  w-full"></div>

      <div className="space-y-2 mt-4">
        <div>
          <strong>Customer Name:</strong> {state.CustomerName}
        </div>
        <div>
          <strong>Pillow Type & Qty:</strong> {state["PillowType&Qty"]}
        </div>
        <div>
          <strong>Status:</strong> {state.Status}
        </div>
        <div>
          <strong>Fabric Type:</strong> {state["Fabric Type"]}
        </div>
        <div>
          <strong>Order Date:</strong> {state["Order Date"]}
        </div>
        <div>
          <strong>Delivery Date:</strong> {state["Delivery Date"]}
        </div>
      </div>
    </div>
  );
}
