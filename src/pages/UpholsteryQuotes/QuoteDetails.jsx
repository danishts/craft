
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import StatusFilter from "../../components/StatusFilter/StatusFilter";
// import ContactCard from "../../components/ContactCard/ContactCard";
// import dani from "../../assets/dani.jpg";

// export default function QuoteAndTrackDetails() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedStatus, setSelectedStatus] = useState("All");
//   const [activeSection, setActiveSection] = useState("quote");

//   const data = location.state;

//   // ✅ Show error if no data was passed
//   if (!data) {
//     return <div className="p-4 text-red-600">❌ No data received</div>;
//   }

//   return (
//     <div className="p-4 mt-4">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
//         <div className="flex items-center gap-2">
//           <button onClick={() => navigate(-1)} className="p-1">
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <h2 className="text-[18px] text-[#020617] font-semibold">
//             Details Page
//           </h2>
//         </div>

//         <StatusFilter
//           selected={selectedStatus}
//           onChange={(value) => setSelectedStatus(value)}
//         />
//       </div>

//       {/* Contact Card */}
//       <ContactCard
//         name={data.Name || "N/A"}
//         email="ali@example.com"
//         phone="+92 300 1234567"
//         address="Lahore, Pakistan"
//         imageUrl={dani}
//         showButton={true}
//       />

//       {/* Section switch buttons */}
//       <div className="flex gap-4 mb-6 mt-4">
//         <button
//           onClick={() => setActiveSection("quote")}
//           className={`px-4 py-2 rounded ${
//             activeSection === "quote"
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Quote Info
//         </button>
//         <button
//           onClick={() => setActiveSection("track")}
//           className={`px-4 py-2 rounded ${
//             activeSection === "track"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Tracking Info
//         </button>
//       </div>

//       {/* Info Details */}
//       <div className="space-y-4 mt-4">
//         {activeSection === "quote" ? (
//           <>
//             <div>
//               <strong>Name:</strong> {data.Name}
//             </div>
//             <div>
//               <strong>Quote:</strong> {data.Quote || "N/A"}
//             </div>
//             <div>
//               <strong>Status:</strong> {data.Status}
//             </div>
//           </>
//         ) : (
//           <>
//             <div>
//               <strong>Name:</strong> {data.Name}
//             </div>
//             <div>
//               <strong>Order ID:</strong> {data.OrderID || "N/A"}
//             </div>
//             <div>
//               <strong>Status:</strong> {data.Status}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import ContactCard from "../../components/ContactCard/ContactCard";
// import dani from "../../assets/dani.jpg";

// export default function QuoteAndTrackDetails() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeSection, setActiveSection] = useState("quote");

//   const data = location.state;

//   if (!data) {
//     return <div className="p-4 text-red-600">❌ No data received</div>;
//   }

//   return (
//     <div className="p-4 mt-4">
//       {/* Header */}
//       <div className="flex items-center gap-2 mb-4">
//         <button onClick={() => navigate(-1)} className="p-1">
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <h2 className="text-[18px] text-[#020617] font-semibold">
//           Quote / Track Info
//         </h2>
//       </div>

//       {/* Contact Card */}
//       <ContactCard
//         name={data.ClientName || "N/A"}
//         email="ali@example.com"
//         phone="+92 300 1234567"
//         address="Lahore, Pakistan"
//         imageUrl={dani}
//         showButton={true}
//       />

//       {/* Section Toggle */}
//       <div className="flex gap-4 mb-6 mt-4">
//         <button
//           onClick={() => setActiveSection("quote")}
//           className={`px-4 py-2 rounded ${
//             activeSection === "quote"
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Quote Info
//         </button>
//         <button
//           onClick={() => setActiveSection("track")}
//           className={`px-4 py-2 rounded ${
//             activeSection === "track"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Tracking Info
//         </button>
//       </div>

//       {/* Section Content */}
//       <div className="space-y-4 mt-4 bg-gray-50 p-4 rounded shadow">
//         {activeSection === "quote" ? (
//           <>
//             <div>
//               <strong>Client Name:</strong> {data.ClientName}
//             </div>
//             <div>
//               <strong>Item Type:</strong> {data.ItemType}
//             </div>
//             <div>
//               <strong>Quote Priority:</strong> {data.QuotePriority}
//             </div>
//             <div>
//               <strong>Status:</strong> {data.CurrentStatus}
//             </div>
//             <div>
//               <strong>Delivery Date:</strong> {data.DeliveryDate}
//             </div>
//             <div>
//               <strong>Operations:</strong> {data.Operations}
//             </div>
//           </>
//         ) : (
//           <>
//             <div>
//               <strong>Client Name:</strong> {data.ClientName}
//             </div>
//             <div>
//               <strong>Order ID:</strong> {data.OrderID || "Not Provided"}
//             </div>
//             <div>
//               <strong>Tracking Status:</strong> {data.CurrentStatus}
//             </div>
//             <div>
//               <strong>Estimated Delivery:</strong> {data.DeliveryDate}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


























// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import ContactCard from "../../components/ContactCard/ContactCard";
// import dani from "../../assets/dani.jpg";

// export default function QuoteAndTrackDetails() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeSection, setActiveSection] = useState("quote");

//   const data = location.state;

//   if (!data) {
//     return <div className="p-4 text-red-600">❌ No data received</div>;
//   }

//   return (
//     <div className="p-4 mt-4">
//       {/* Header */}
//       <div className="flex items-center gap-2 mb-4">
//         <button onClick={() => navigate(-1)} className="p-1">
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <h2 className="text-[18px] text-[#020617] font-semibold">
//           Quote / Track Info
//         </h2>
//       </div>

//       {/* Contact Card */}
//       <ContactCard
//         name={data.ClientName || "N/A"}
//         email="ali@example.com"
//         phone="+92 300 1234567"
//         address="Lahore, Pakistan"
//         imageUrl={dani}
//         showButton={true}
//       />
//       <div className="border-t border-gray-200  w-full"></div>
//       {/* Section Toggle */}
//       <div className="flex gap-4 mb-6 mt-4">
//         <button
//           onClick={() => setActiveSection("quote")}
//           className={`px-4 py-2 rounded ${
//             activeSection === "quote"
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Furniture
//         </button>
//         <button
//           onClick={() =>
//             navigate("/order-tracker/details", {
//               state: {
//                 Name: data.ClientName,
//                 OrderID: data.OrderID || "ORD-56789",
//                 Status: data.CurrentStatus || "On Route",
//               },
//             })
//           }
//           className="px-4 py-2 rounded bg-green-600 text-white"
//         >
//           Order traking
//         </button>
//       </div>

//       {/* Quote Info Section */}
//       {activeSection === "quote" && (
//         <div className="space-y-4 mt-4 bg-gray-50 p-4 rounded shadow">
//           <div>
//             <strong>Client Name:</strong> {data.ClientName}
//           </div>
//           <div>
//             <strong>Item Type:</strong> {data.ItemType}
//           </div>
//           <div>
//             <strong>Quote Priority:</strong> {data.QuotePriority}
//           </div>
//           <div>
//             <strong>Status:</strong> {data.CurrentStatus}
//           </div>
//           <div>
//             <strong>Delivery Date:</strong> {data.DeliveryDate}
//           </div>
//           <div>
//             <strong>Operations:</strong> {data.Operations}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
















// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import ContactCard from "../../components/ContactCard/ContactCard";
// import dani from "../../assets/dani.jpg";

// export default function QuoteAndTrackDetails() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeSection, setActiveSection] = useState("quote");

//   const data = location.state;

//   if (!data) {
//     return <div className="p-4 text-red-600">❌ No data received</div>;
//   }

//   return (
//     <div className="p-4 mt-4">
//       {/* Header */}
//       <div className="flex items-center gap-2 mb-4">
//         <button onClick={() => navigate(-1)} className="p-1">
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <h2 className="text-[18px] text-[#020617] font-semibold">
//           Quote / Track Info
//         </h2>
//       </div>

//       {/* Contact Card */}
//       <ContactCard
//         name={data.ClientName || "N/A"}
//         email="ali@example.com"
//         phone="+92 300 1234567"
//         address="Lahore, Pakistan"
//         imageUrl={dani}
//         showButton={true}
//       />
//       <div className="border-t border-gray-200 w-full"></div>

//       {/* Section Toggle */}
//       <div className="flex gap-8 mb-6 mt-4 border-b border-gray-300">
//         <button
//           onClick={() => setActiveSection("quote")}
//           className={`pb-2 text-sm font-medium ${
//             activeSection === "quote"
//               ? "border-b-2 border-blue-600 text-blue-600"
//               : "text-gray-600"
//           }`}
//         >
//           Furniture
//         </button>
//         <button
//           onClick={() =>
//             navigate("/order-tracker/details", {
//               state: {
//                 Name: data.ClientName,
//                 OrderID: data.OrderID || "ORD-56789",
//                 Status: data.CurrentStatus || "On Route",
//               },
//             })
//           }
//           className={`pb-2 text-sm font-medium ${
//             activeSection === "track"
//               ? "border-b-2 border-blue-600 text-blue-600"
//               : "text-gray-600"
//           }`}
//         >
//           Order Tracking
//         </button>
//       </div>

//       {/* Quote Info Section */}
//       {activeSection === "quote" && (
//         <div className="space-y-4 mt-4 bg-gray-50 p-4 rounded shadow">
//           <div>
//             <strong>Client Name:</strong> {data.ClientName}
//           </div>
//           <div>
//             <strong>Item Type:</strong> {data.ItemType}
//           </div>
//           <div>
//             <strong>Quote Priority:</strong> {data.QuotePriority}
//           </div>
//           <div>
//             <strong>Status:</strong> {data.CurrentStatus}
//           </div>
//           <div>
//             <strong>Delivery Date:</strong> {data.DeliveryDate}
//           </div>
//           <div>
//             <strong>Operations:</strong> {data.Operations}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

















































import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ContactCard from "../../components/ContactCard/ContactCard";
import dani from "../../assets/dani.jpg";

export default function QuoteAndTrackDetails() {
  const navigate = useNavigate();
  const { state: data } = useLocation();
  const [activeSection, setActiveSection] = useState("quote");

  if (!data) {
    return <div className="p-4 text-red-600">❌ No data received</div>;
  }

  return (
    <div className="p-4 mt-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-[18px] text-[#020617] font-semibold">
          Quote / Track Info
        </h2>
      </div>

      {/* Contact Card */}
      <ContactCard
        name={data.ClientName || data["Customer Name"] || "N/A"}
        email="ali@example.com"
        phone="+92 300 1234567"
        address="Lahore, Pakistan"
        imageUrl={dani}
        showButton={true}
      />


      {/* Tabs */}
      <div className="flex gap-8 mb-6 mt-4 border-b border-gray-300">
        <button
          onClick={() => setActiveSection("quote")}
          className={`pb-2 text-sm font-medium ${
            activeSection === "quote"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Furniture
        </button>
        <button
          onClick={() => setActiveSection("track")}
          className={`pb-2 text-sm font-medium ${
            activeSection === "track"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Order Tracking
        </button>
      </div>

      {/* Furniture Tab */}
      {activeSection === "quote" && (
        <div className="space-y-4 mt-4  p-4 rounded ">
          <div>
            <strong>Client Name:</strong>{" "}
            {data.ClientName || data["Customer Name"] || "N/A"}
          </div>
          <div>
            <strong>Item Type:</strong> {data.ItemType || "N/A"}
          </div>
          <div>
            <strong>Quote Priority:</strong> {data.QuotePriority || "N/A"}
          </div>
          <div>
            <strong>Status:</strong>{" "}
            {data.CurrentStatus || data["Current Progress"] || "N/A"}
          </div>
          <div>
            <strong>Delivery Date:</strong> {data.DeliveryDate || "N/A"}
          </div>
          <div>
            <strong>Operations:</strong> {data.Operations || "N/A"}
          </div>
        </div>
      )}

      {/* Order Tracking Tab */}
      {activeSection === "track" && (
        <div className="space-y-4 mt-4 p-4 rounded ">
          <div>
            <strong>Customer Name:</strong> {data["Customer Name"] || "N/A"}
          </div>
          <div>
            <strong>Project Category:</strong>{" "}
            {data["Project Category"] || "N/A"}
          </div>
          <div>
            <strong>Quote Identifier:</strong>{" "}
            {data["Quote Identifier"] || "N/A"}
          </div>
          <div>
            <strong>Current Progress:</strong>{" "}
            {data["Current Progress"] || "N/A"}
          </div>
        </div>
      )}
    </div>
  );
}
