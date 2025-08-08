// import React from "react";
// import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
// import Button from "../Button/Button";

// export default function ContactCard({ name, email, phone, address, imageUrl }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
//       {/* Image */}
//       <div className="flex justify-center sm:justify-start">
//         <img
//           src={imageUrl}
//           alt={name}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//       </div>

//       {/* Info Section */}
//       <div className="flex-1 text-center sm:text-left">
//         {/* Name */}
//         <h2 className="text-lg font-semibold">{name}</h2>

//         {/* Details in one row on large screens, stacked on small */}
//         <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 mt-1 items-center sm:items-start sm:flex-wrap justify-center sm:justify-start">
//           <div className="flex items-center gap-1">
//             <MdEmail className="text-base" />
//             <span>{email}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <MdPhone className="text-base" />
//             <span>{phone}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <MdLocationOn className="text-base" />
//             <span>{address}</span>
//           </div>
//         </div>
//       </div>

//       {/* Button */}
//       <div className="flex justify-center sm:justify-end">
//         <Button />
//       </div>
//     </div>
//   );
// }







































import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Button from "../Button/Button";

export default function ContactCard({
  name,
  email,
  phone,
  address,
  imageUrl,
  showButton = false,
}) {
  return (
    <div className="bg-white  rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Image */}
      <div className="flex justify-center sm:justify-start">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 mt-1 items-center sm:items-start sm:flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1">
            <MdEmail className="text-base" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdPhone className="text-base" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdLocationOn className="text-base" />
            <span>{address}</span>
          </div>
        </div>
      </div>

      {/* Conditionally Render Button */}
      {showButton && (
        <div className="flex justify-center sm:justify-end">
          <Button />
        </div>
      )}
    </div>
  );
}
