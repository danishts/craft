import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../../components/Table/Table";
import Searchbar from "../../components/Searchbar/Searchbar";

const originalData = [
  {
    "Customer Name": "Velvet Fabric",
    "Project Category": "Reupholstery",
    "Quote Identifier": "COM-001",
    "Current Progress": "On Route",
    Actions: "edit,delete",
  },

  {
    "Customer Name": "Velvet Fabric",
    "Project Category": "Reupholstery",
    "Quote Identifier": "COM-001",
    "Current Progress": "On Route",
    Actions: "edit,delete",
  },
  {
    "Customer Name": "Velvet Fabric",
    "Project Category": "Reupholstery",
    "Quote Identifier": "COM-001",
    "Current Progress": "On Route",
    Actions: "edit,delete",
  },
  {
    "Customer Name": "Velvet Fabric",
    "Project Category": "Reupholstery",
    "Quote Identifier": "COM-001",
    "Current Progress": "On Route",
    Actions: "edit,delete",
  },
  {
    "Customer Name": "Velvet Fabric",
    "Project Category": "Reupholstery",
    "Quote Identifier": "COM-001",
    "Current Progress": "On Route",
    Actions: "edit,delete",
  },
  
  // Add more items here for testing scroll
];

export default function OrderTracker() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const filteredData = originalData.filter((item) =>
    (item["Customer Name"] || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (rowData) => {
    navigate("/order-tracker/details", { state: rowData });
  };

  return (
    <div className="p-4 mt-4  flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h2 className="text-[24px] font-display font-semibold text-[#020617]">
          Order Tracker
        </h2>

        {location.pathname !== "/" && (
          <Searchbar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by customer name"
          />
        )}
      </div>

      {/* Scrollable Table Section */}
      <div className="overflow-y-auto flex-1 pr-2">
        <Table
          data={filteredData}
          onRowClick={handleRowClick}
          title="Textile Management" // ✅ Page name yahan send karo
        />
      </div>
    </div>
  );
}
