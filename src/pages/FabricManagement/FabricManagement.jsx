import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../../components/Table/Table";
import Searchbar from "../../components/Searchbar/Searchbar";

const originalData = [
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
  {
    "Polyester Fabric": "Satin Fabric",
    "Material Type (COM/Process)": "COM",
    "Current Status": "12345678901",
    "type of furniture": "type of furniture",
    Actions: "edit,delete",
  },
];

export default function FabricManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ FIXED: Safe filter across multiple possible name keys
  const filteredData = originalData.filter((item) => {
    const name =
      item.Name || item["Polyester Fabric"] || item.CustomerName || "";
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleRowClick = (rowData) => {
    navigate("/fabric-management/details", { state: rowData });
  };

  return (
    <div className="p-4 mt-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h2 className="text-[24px] font-display font-semibold text-[#020617]">
          Fabric Management
        </h2>

        {location.pathname !== "/" && (
          <Searchbar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by name"
          />
        )}
      </div>

      <div className="overflow-x-auto">
        <Table
          data={filteredData}
          onRowClick={handleRowClick}
          title="Browse All Fabrics" // ✅ yahan page ka naam pass kar do
        />
      </div>
    </div>
  );
}
