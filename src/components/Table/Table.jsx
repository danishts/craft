// // src/components/Table/Table.jsx
// import React from "react";

// export default function Table({ data, onRowClick }) {
//   return (
//     <table className="min-w-full bg-white border rounded shadow">
//       <thead>
//         <tr className="bg-gray-100 text-gray-700">
//           {Object.keys(data[0]).map((key) => (
//             <th key={key} className="text-left px-4 py-2 border">
//               {key}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, idx) => (
//           <tr
//             key={idx}
//             onClick={() => onRowClick(row)}
//             className="hover:bg-blue-50 cursor-pointer"
//           >
//             {Object.values(row).map((val, i) => (
//               <td key={i} className="px-4 py-2 border">
//                 {val}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }








// // src/components/Table/Table.jsx
// import React from "react";

// export default function Table({ data = [], onRowClick = () => {} }) {
//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="text-gray-500 text-sm px-4 py-2">
//         No data available.
//       </div>
//     );
//   }

//   return (
//     <table className="min-w-full bg-white border rounded shadow">
//       <thead>
//         <tr className="bg-gray-100 text-gray-700">
//           {Object.keys(data[0]).map((key) => (
//             <th key={key} className="text-left px-4 py-2 border">
//               {key}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, idx) => (
//           <tr
//             key={idx}
//             onClick={() => onRowClick(row)}
//             className="hover:bg-blue-50 cursor-pointer"
//           >
//             {Object.values(row).map((val, i) => (
//               <td key={i} className="px-4 py-2 border">
//                 {val}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }






// // src/components/Table/Table.jsx
// import React from "react";

// export default function Table({ data = [], onRowClick = () => {} }) {
//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="text-gray-500 text-sm px-4 py-2">
//         No data available.
//       </div>
//     );
//   }

//   return (
//     <table className="min-w-full bg-white border rounded shadow">
//       <thead>
//         <tr className="bg-gray-100 text-gray-700">
//           {Object.keys(data[0]).map((key) => (
//             <th key={key} className="text-left px-4 py-2 border">
//               {key}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, idx) => (
//           <tr
//             key={idx}
//             onClick={() => onRowClick(row)}
//             className="hover:bg-blue-50 cursor-pointer"
//           >
//             {Object.values(row).map((val, i) => (
//               <td key={i} className="px-4 py-2 border">
//                 {val}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }





// import React from "react";

// export default function Table({ data = [], onRowClick = () => {} }) {
//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="text-gray-500 text-sm px-4 py-2">No data available.</div>
//     );
//   }

//   // All unique keys from all rows
//   const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row))));

//   return (
//     <table className="min-w-full bg-white border-2 border-rounded-3xl border-[#F1F1F2]">
//       <thead>
//         <tr className="mt-2  font-displays text-[12px] text-[#A1A5B7] font-semibold">
//           {allKeys.map((key) => (
//             <th key={key} className="text-left px-4 py-2">
//               {key}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, idx) => (
//           <tr
//             key={idx}
//             onClick={() => onRowClick(row)}
//             className="hover:bg-blue-50 cursor-pointer"
//           >
//             {allKeys.map((key) => (
//               <td
//                 key={key}
//                 className="px-4 py-2 border-b-3 text-[#48525B] font-semibold text-[13px] font-displays border-dashed border-[#F1F1F2]"
//               >
//                 {row[key] !== undefined ? row[key] : "—"}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }














// import React, { useState } from "react";

// export default function Table({ data = [], onRowClick = () => {} }) {
//   const [selectedRow, setSelectedRow] = useState(null);

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="text-gray-500 text-sm px-4 py-2">No data available.</div>
//     );
//   }

//   // All unique keys from all rows
//   const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row))));

//   // Get a title from the selected row
//   const getRowTitle = (row) => {
//     return (
//       row.Name ||
//       row["Customer Name"] ||
//       row["CustomerName"] ||
//       row["Project Category"] ||
//       row["BookingType"] ||
//       "Selected Row"
//     );
//   };

//   return (
//     <div className="space-y-4">
//       {/* Show selected row name/title above the table */}
//       {selectedRow && (
//         <div className="text-lg font-semibold text-[#020617] px-2">
//           Selected: {getRowTitle(selectedRow)}
//         </div>
//       )}

//       <table className="min-w-full bg-white border-2  border-[#F1F1F2]">
//         <thead>
//           <tr className="mt-2 font-displays text-[12px] text-[#A1A5B7] font-semibold">
//             {allKeys.map((key) => (
//               <th key={key} className="text-left px-4 py-2">
//                 {key}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, idx) => (
//             <tr
//               key={idx}
//               onClick={() => {
//                 setSelectedRow(row); // update local state
//                 onRowClick(row); // fire external handler
//               }}
//               className="hover:bg-blue-50 cursor-pointer"
//             >
//               {allKeys.map((key) => (
//                 <td
//                   key={key}
//                   className="px-4 py-2 border-b-3 text-[#48525B] font-semibold text-[13px] font-displays border-dashed border-[#F1F1F2]"
//                 >
//                   {row[key] !== undefined ? row[key] : "—"}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



































// import React, { useState } from "react";

// export default function Table({ data = [], onRowClick = () => {}, title }) {
//   const [selectedRow, setSelectedRow] = useState(null);

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="text-gray-500 text-sm px-4 py-2">No data available.</div>
//     );
//   }

//   // All unique keys from all rows
//   const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row))));

//   return (
//     <div className="space-y-0 border border-[#F1F1F2] rounded-lg overflow-hidden">
//       {/* ✅ Fixed Title (page ka naam) */}
//       {title && (
//         <div className="bg-white px-4 py-2 font-semibold font-displays  text-[18px]  border-[#F1F1F2]">
//           {title}
//         </div>
//       )}

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr className="mt-2 font-displays text-[12px] text-[#A1A5B7] font-semibold">
//               {allKeys.map((key) => (
//                 <th key={key} className="text-left px-4 py-2">
//                   {key}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, idx) => (
//               <tr
//                 key={idx}
//                 onClick={() => {
//                   setSelectedRow(row);
//                   onRowClick(row);
//                 }}
//                 className="hover:bg-blue-50 cursor-pointer"
//               >
//                 {allKeys.map((key) => (
//                   <td
//                     key={key}
//                     className="px-4 py-2 border-b text-[#48525B] font-semibold text-[13px] font-displays border-dashed border-[#F1F1F2]"
//                   >
//                     {row[key] !== undefined ? row[key] : "—"}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

//icon add kia last wala

// import React, { useState } from "react";
// import arrowsImg from "../../assets/arrows.png"; // ✅ image import

// export default function Table({ data = [], onRowClick = () => {}, title }) {
//   const [selectedRow, setSelectedRow] = useState(null);

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="text-gray-500 text-sm px-4 py-2">No data available.</div>
//     );
//   }

//   const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row))));

//   return (
//     <div className="space-y-0 border border-[#F1F1F2] rounded-lg overflow-hidden">
//       {title && (
//         <div className="bg-white px-4 py-2 font-semibold text-lg">{title}</div>
//       )}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr className="mt-2 font-displays text-[12px] text-[#A1A5B7] font-semibold">
//               {allKeys.map((key) => (
//                 <th key={key} className="text-left px-4 py-2">
//                   {key}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, idx) => (
//               <tr
//                 key={idx}
//                 onClick={() => {
//                   setSelectedRow(row);
//                   onRowClick(row);
//                 }}
//                 className="hover:bg-blue-50 cursor-pointer"
//               >
//                 {allKeys.map((key) => (
//                   <td
//                     key={key}
//                     className="px-4 py-2 border-b text-[#48525B] font-semibold text-[13px] font-displays border-dashed border-[#F1F1F2]"
//                   >
//                     {/* ✅ Agar Operations ya Actions column hai → Image show karo */}
//                     {["Operations", "Actions"].includes(key) ? (
//                       <img
//                         src={arrowsImg}
//                         alt="arrows"
//                         className="w-5 h-5 cursor-pointer"
//                         onClick={(e) => {
//                           e.stopPropagation(); // Row click prevent
//                           console.log("Arrow clicked for row:", row);
//                         }}
//                       />
//                     ) : (
//                       row[key] || "—"
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




















//ICON ADD KIA IS MAIN

// import React, { useState } from "react";
// import arrowsImg from "../../assets/arrows.png";

// export default function Table({ data = [], onRowClick = () => {}, title }) {
//   const [selectedRow, setSelectedRow] = useState(null);

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="text-gray-500 text-sm px-4 py-2">No data available.</div>
//     );
//   }

//   const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row))));

//   return (
//     <div className="space-y-0 border border-[#F1F1F2] rounded-lg overflow-hidden">
//       {title && (
//         <div className="bg-white px-4 py-2 font-semibold text-lg">{title}</div>
//       )}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr className="mt-2 font-displays text-[12px] text-[#A1A5B7] font-semibold">
//               {allKeys.map((key) => (
//                 <th key={key} className="text-left px-4 py-2">
//                   {key}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, idx) => (
//               <tr
//                 key={idx}
//                 onClick={() => {
//                   setSelectedRow(row);
//                   onRowClick(row);
//                 }}
//                 className="hover:bg-blue-50 cursor-pointer"
//               >
//                 {allKeys.map((key) => (
//                   <td
//                     key={key}
//                     className="px-4 py-2 border-b text-[#48525B] font-semibold text-[13px] font-displays border-dashed border-[#F1F1F2]"
//                   >
//                     {["operations", "actions"].includes(key.toLowerCase()) ? (
//                       <img
//                         src={arrowsImg}
//                         alt="actions"
//                         className="w-5 h-5 cursor-pointer"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           console.log("Arrow clicked for row:", row);
//                         }}
//                       />
//                     ) : (
//                       row[key] || "—"
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }






























import React, { useState } from "react";
import arrowsImg from "../../assets/arrows.png";

export default function Table({ data = [], onRowClick = () => {}, title }) {
  const [menuRowIndex, setMenuRowIndex] = useState(null); // kis row ka menu open hai

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-gray-500 text-sm px-4 py-2">No data available.</div>
    );
  }

  const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row))));

  // Menu close karna (jab bahar click ho)
  const handleOutsideClick = () => setMenuRowIndex(null);

  return (
    <div
      className="space-y-0 border border-[#F1F1F2] rounded-lg overflow-hidden relative"
      onClick={handleOutsideClick}
    >
      {title && (
        <div className="bg-white px-4 py-2 font-semibold text-lg">{title}</div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="mt-2 font-displays text-[12px] text-[#A1A5B7] font-semibold">
              {allKeys.map((key) => (
                <th key={key} className="text-left px-4 py-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick(row)}
                className="hover:bg-blue-50 cursor-pointer relative"
              >
                {allKeys.map((key) => (
                  <td
                    key={key}
                    className="px-4 py-2 border-b text-[#48525B] font-semibold text-[13px] font-displays border-dashed border-[#F1F1F2]"
                  >
                    {["operations", "actions"].includes(key.toLowerCase()) ? (
                      <div className="relative">
                        <img
                          src={arrowsImg}
                          alt="actions"
                          className="w-5 h-5 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMenuRowIndex(menuRowIndex === idx ? null : idx);
                          }}
                        />

                        {/* Dropdown menu */}
                        {menuRowIndex === idx && (
                          <div
                            className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50"
                            onClick={(e) => e.stopPropagation()} // menu click row click ko prevent kare
                          >
                            <button
                              className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                              onClick={() => {
                                alert(
                                  `Edit clicked for ${row.id || "this row"}`
                                );
                                setMenuRowIndex(null);
                              }}
                            >
                              ✏️ Edit
                            </button>
                            <button
                              className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                              onClick={() => {
                                alert(
                                  `Delete clicked for ${row.id || "this row"}`
                                );
                                setMenuRowIndex(null);
                              }}
                            >
                              🗑 Delete
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      row[key] || "—"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
