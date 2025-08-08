// // src/pages/UpholsteryQuotes/UpholsteryQuotes.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Table from "../../components/Table/Table";
// import Searchbar from "../../components/Searchbar/Searchbar";

// const originalData = [
//   { Name: "Ali", Quote: "$150", Status: "Pending" },
//   { Name: "Sara", Quote: "$200", Status: "Approved" },
// ];

// export default function UpholsteryQuotes() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filteredData = originalData.filter((item) =>
//     item.Name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleRowClick = (rowData) => {
//     navigate("/upholstery-quotes/details", { state: rowData });
//   };

//   return (
//     <div className="p-4">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
//         <h2 className="text-xl font-bold">Upholstery Quotes</h2>
//         <Searchbar
//           value={searchTerm}
//           onChange={setSearchTerm}
//           placeholder="Search by name"
//         />
//       </div>
//       <Table data={filteredData} onRowClick={handleRowClick} />
//     </div>
//   );
// }









import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import Searchbar from "../../components/Searchbar/Searchbar";

const originalData = [
  {
    ClientName: "Emily R.",
    ItemType: "Item Type",
    CurrentStatus: "On Route",
    QuotePriority: "Affirmative",
    DeliveryDate: "2023-10-15",
    Operations: "edit,delete",
  },

  {
    ClientName: "Emily R.",
    ItemType: "Item Type",
    CurrentStatus: "On Route",
    QuotePriority: "Affirmative",
    DeliveryDate: "2023-10-15",
    Operations: "edit,delete",
  },
  {
    ClientName: "Emily R.",
    ItemType: "Item Type",
    CurrentStatus: "On Route",
    QuotePriority: "Affirmative",
    DeliveryDate: "2023-10-15",
    Operations: "edit,delete",
  },
  {
    ClientName: "Emily R.",
    ItemType: "Item Type",
    CurrentStatus: "On Route",
    QuotePriority: "Affirmative",
    DeliveryDate: "2023-10-15",
    Operations: "edit,delete",
  },

  {
    ClientName: "Emily R.",
    ItemType: "Item Type",
    CurrentStatus: "On Route",
    QuotePriority: "Affirmative",
    DeliveryDate: "2023-10-15",
    Operations: "edit,delete",
  },
  {
    ClientName: "Emily R.",
    ItemType: "Item Type",
    CurrentStatus: "On Route",
    QuotePriority: "Affirmative",
    DeliveryDate: "2023-10-15",
    Operations: "edit,delete",
  },
];

export default function UpholsteryQuotes() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Safe search by ClientName
  const filteredData = originalData.filter((item) =>
    (item.ClientName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (rowData) => {
    navigate("/upholstery-quotes/details", { state: rowData });
  };

  return (
    <div className="p-4 mt-4">
      {/* Header Section */}
      <div className="flex  flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h2 className="text-[24px] font-display font-semibold text-[#020617]">
          Upholstery Quotes
        </h2>

        {/* Show Searchbar only if not on Dashboard */}
        {location.pathname !== "/" && (
          <Searchbar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by client name"
          />
        )}
      </div>

      {/* ✅ Only Table is scrollable on small screens */}
      {/* <div className="overflow-x-auto">
        <h1> UpholsteryQuotes</h1>
        <Table data={filteredData} onRowClick={handleRowClick} />
      </div> */}

      <Table
        data={filteredData}
        onRowClick={handleRowClick}
        title="Overview of all submitted quotes"
      />
    </div>
  );
}
