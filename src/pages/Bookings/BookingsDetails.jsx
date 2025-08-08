import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StatusFilter from "../../components/StatusFilter/StatusFilter";
import ContactCard from "../../components/ContactCard/ContactCard";
import dani from "../../assets/dani.jpg";

export default function BookingDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("All");

  if (!state) return <div className="p-4">No booking data found.</div>;

  return (
    <div className="p-4 mt-4">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        {/* Back + Title */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/bookings")}
            className="p-2 rounded hover:bg-gray-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-[18px] text-[#020617] font-semibold">
            Booking Details
          </h2>
        </div>

        {/* Status Filter */}
        <StatusFilter
          selected={selectedStatus}
          onChange={(value) => setSelectedStatus(value)}
        />
      </div>

      {/* Contact Card */}
      <ContactCard
        name="Ali Khan"
        email="ali@example.com"
        phone="+92 300 1234567"
        address="Lahore, Pakistan"
        imageUrl={dani}
      />

      {/* Divider */}
      <div className="border-t border-gray-200 my-4 w-full"></div>

      {/* Booking Info */}
      <div className="space-y-2 text-sm sm:text-base">
        <div>
          <strong>Customer Name:</strong> {state["CustomerName"]}
        </div>
        <div>
          <strong>Booking Type:</strong> {state["BookingType"]}
        </div>
        <div>
          <strong>Date/Time:</strong> {state["Date/Time"]}
        </div>
      </div>
    </div>
  );
}
