// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io"; // Close icon

// function Button() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [vendorName, setVendorName] = useState("");

//   const handleAssign = () => {
//     alert(`Vendor "${vendorName}" assigned!`);
//     setIsOpen(false);
//     setVendorName("");
//   };

//   return (
//     <div>
//       {/* Main Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Assign Vendor
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
//             {/* Close Icon */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               <IoMdClose size={20} />
//             </button>

//             {/* Modal Content */}
//             <h2 className="text-xl font-semibold mb-4">
//               Assign Vendor to Order
//             </h2>

//             {/* Input with label */}
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               User Email
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Vendor Name"
//               value={vendorName}
//               onChange={(e) => setVendorName(e.target.value)}
//               className="w-full border px-3 py-2 rounded mb-4"
//             />

//             {/* Buttons */}
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAssign}
//                 className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
//               >
//                 Assign
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Button;






import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Button() {
  const [isOpen, setIsOpen] = useState(false);
  const [vendorName, setVendorName] = useState("");

  const handleAssign = () => {
    alert(`Vendor "${vendorName}" assigned!`);
    setIsOpen(false);
    setVendorName("");
  };

  return (
    <div>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-3 text-[13px] font-displays text-center bg-[#3A2414] text-white rounded-3xl "
      >
        Assign Vendor
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative max-h-screen overflow-y-auto">
            {/* Close Icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={20} />
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold mb-4">
              Assign Vendor to Order
            </h2>

            {/* Input with label */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Name
            </label>
            <input
              type="text"
              placeholder="Enter Vendor Name"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4"
            />

            {/* Buttons */}
            <div className="flex justify-end  gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 w-1/2 bg-[#DCDCDC] hover:bg-gray-400 rounded-2xl"
              >
                Cancel
              </button>
              <button
                onClick={handleAssign}
                className="px-4 py-2 w-1/2 bg-[#3A2414] text-white hover:bg-red-700 rounded-2xl"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;
