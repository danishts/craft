// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function MobileSidebar({ onClose }) {
//   const links = [
//     { to: "/", label: "Dashboard" },
//     { to: "/upholstery-quotes", label: "Upholstery Quotes" },
//     { to: "/pillow-orders", label: "Pillow Orders" },
//     { to: "/bookings", label: "Bookings" },
//     { to: "/fabric-management", label: "Fabric Management" },
//     { to: "/order-tracker", label: "Order Tracker" },
//   ];

//   return (
//     <div className="h-full p-4 bg-[#745535] font-displays text-[16px] w-64 shadow-lg">
//       <button
//         onClick={onClose}
//         className="text-sm text-red-500 font-semibold mb-4"
//       >
//         ✕ Close
//       </button>

//       <nav className="space-y-2">
//         {links.map((link) => (
//           <NavLink
//             key={link.to}
//             to={link.to}
//             onClick={onClose}
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded hover:bg-gray-200 ${
//                 isActive ? "bg-blue-100 font-semibold" : ""
//               }`
//             }
//           >
//             {link.label}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// }


import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Quote,
  Package,
  CalendarCheck,
  Layers,
  Truck,
} from "lucide-react";
import Massk from "../../assets/Massk.png";

export default function MobileSidebar({ onClose }) {
  const links = [
    {
      to: "/",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      to: "/upholstery-quotes",
      label: "Upholstery Quotes",
      icon: <Quote className="w-4 h-4" />,
    },
    {
      to: "/pillow-orders",
      label: "Pillow Orders",
      icon: <Package className="w-4 h-4" />,
    },
    {
      to: "/bookings",
      label: "Bookings",
      icon: <CalendarCheck className="w-4 h-4" />,
    },
    {
      to: "/fabric-management",
      label: "Fabric Management",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      to: "/order-tracker",
      label: "Order Tracker",
      icon: <Truck className="w-4 h-4" />,
    },
  ];

  return (
    <div className="h-full p-4 bg-[#745535] font-displays text-[16px] w-64 shadow-lg">
      {/* Logo and Close Button in Row */}
      <div className="flex items-center justify-evenly mb-4">
        <img
          src={Massk}
          alt="logo"
          className="w-36 h-auto object-contain" // Increased size, removed centering
        />
        <button
          onClick={onClose}
          className="text-sm text-red-500 font-semibold"
        >
          ✕
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:bg-[#8c6f4a] hover:text-white ${
                isActive
                  ? "bg-white font-semibold text-[#745535]"
                  : "text-white"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
