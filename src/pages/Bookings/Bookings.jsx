// // src/pages/Bookings/Bookings.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Table from "../../components/Table/Table";
// import Searchbar from "../../components/Searchbar/Searchbar";

// const originalData = [
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "John D.",
//     BookingType: "Repair",
//     "Date/Time": "2023-10-02 2:00 PM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Sophia P.",
//     BookingType: "Maintenance",
//     "Date/Time": "2023-10-03 4:00 PM",
//     Actions: "edit,delete",
//   },
//   // more data for scroll testing...
// ];

// export default function Bookings() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filteredData = originalData.filter((item) =>
//     (item.CustomerName || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleRowClick = (rowData) => {
//     navigate("/bookings/details", { state: rowData });
//   };

//   return (
//     <div className="p-4 mt-4  flex flex-col">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 flex-shrink-0">
//         <h2 className="text-xl font-bold">Bookings</h2>
//         <Searchbar
//           value={searchTerm}
//           onChange={setSearchTerm}
//           placeholder="Search by name"
//         />
//       </div>

//       {/* Scrollable Table Section */}
//       <div className="overflow-y-auto flex-1">
//         <Table
//           data={filteredData}
//           onRowClick={handleRowClick}
//           title="All Client Consultations & Pickups" // ✅ yahan page ka naam pass kar do
//         />
//       </div>
//     </div>
//   );
// }







// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Table from "../../components/Table/Table";
// import Searchbar from "../../components/Searchbar/Searchbar";

// const originalData = [
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   {
//     CustomerName: "Emily R.",
//     BookingType: "Consultation",
//     "Date/Time": "2023-10-01 10:00 AM",
//     Actions: "edit,delete",
//   },
//   // Add more rows here to test scrolling
// ];

// export default function Bookings() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const filteredData = originalData.filter((item) =>
//     (item.Name || item.CustomerName || "")
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   const handleRowClick = (rowData) => {
//     navigate("/bookings/details", { state: rowData });
//   };

//   return (
//     <div className="p-4 mt-4">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
//         <h2 className="text-[24px] font-display font-semibold text-[#020617]">
//           Bookings
//         </h2>

//         {location.pathname !== "/" && (
//           <Searchbar
//             value={searchTerm}
//             onChange={setSearchTerm}
//             placeholder="Search by name"
//           />
//         )}
//       </div>

//       {/* Table Section with Scroll */}
//       <div className="max-h-[500px] overflow-auto rounded border">
//         <Table data={filteredData} onRowClick={handleRowClick} />
//       </div>
//     </div>
//   );
// }




































// src/pages/Bookings/Bookings.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import Searchbar from "../../components/Searchbar/Searchbar";

const originalData = [
  {
    CustomerName: "Emily R.",
    BookingType: "Consultation",
    "Date/Time": "2023-10-01 10:00 AM",
    Actions: "edit,delete",
  },
  {
    CustomerName: "John D.",
    BookingType: "Repair",
    "Date/Time": "2023-10-02 2:00 PM",
    Actions: "edit,delete",
  },
  {
    CustomerName: "Sophia P.",
    BookingType: "Maintenance",
    "Date/Time": "2023-10-03 4:00 PM",
    Actions: "edit,delete",
  },

  // ...baaki data
];

export default function Bookings({ showSearch = true }) { // ✅ prop add
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredData = originalData.filter((item) =>
    (item.CustomerName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (rowData) => {
    navigate("/bookings/details", { state: rowData });
  };

  return (
    <div className="p-4 mt-4 flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 flex-shrink-0">
        <h2 className="text-xl font-bold">Bookings</h2>
        {showSearch && ( // ✅ sirf tab render hoga jab true ho
          <Searchbar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by name"
          />
        )}
      </div>

      {/* Scrollable Table Section */}
      <div className="overflow-y-auto flex-1">
        <Table
          data={filteredData}
          onRowClick={handleRowClick}
          title="All Client Consultations & Pickups"
        />
      </div>
    </div>
  );
}
