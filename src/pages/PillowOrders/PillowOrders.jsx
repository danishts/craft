import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../../components/Table/Table";
import Searchbar from "../../components/Searchbar/Searchbar";

const originalData = [
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Emily R.",
    "PillowType&Qty": "Memory Foam Pillow",
    Status: "On the Way",
    "Fabric Type": "Cotton Blend",
    "Order Date": "2023-10-15",
    "Delivery Date": "2023-10-20",
    Actions: "edit,delete",
  },

  // Add more objects as needed
];

export default function PillowOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Safe search using correct key
  const filteredData = originalData.filter((item) =>
    (item.CustomerName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (rowData) => {
    navigate("/pillow-orders/details", { state: rowData });
  };

  return (
    <div className="p-4 mt-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 mt-4 gap-2">
        <h2 className="text-[24px] font-display font-semibold text-[#020617]">
          Pillow Orders
        </h2>

        {/* ✅ Only show Searchbar if not on Dashboard */}
        {location.pathname !== "/" && (
          <Searchbar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by customer name"
          />
        )}
      </div>

      {/* ✅ Table Section */}
      <div className="overflow-x-auto">
        <Table
          data={filteredData}
          onRowClick={handleRowClick}
          title="Overview of All Pillow Orders" // ✅ yahan page ka naam pass kar do
        />
      </div>
    </div>
  );
}
