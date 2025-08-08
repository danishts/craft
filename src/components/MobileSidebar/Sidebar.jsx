// // src/components/Sidebar/Sidebar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   const links = [
//     { to: "/", label: "Dashboard" },
//     { to: "/upholstery-quotes", label: "Upholstery Quotes" },
//     { to: "/pillow-orders", label: "Pillow Orders" },
//     { to: "/bookings", label: "Bookings" },
//     { to: "/fabric-management", label: "Fabric Management" },
//     { to: "/order-tracker", label: "Order Tracker" },
//   ];

//   return (
//     <aside className="w-64 h-screen bg-white shadow p-4 space-y-4">
//       <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
//       <nav className="space-y-2">
//         {links.map((link) => (
//           <NavLink
//             key={link.to}
//             to={link.to}
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
//     </aside>
//   );
// }














// src/components/Sidebar/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Quote,
  Package,
  CalendarCheck,
  Layers,
  Truck,
} from "lucide-react"; // Icons from lucide-react
import Massk from "../../assets/massk.png"; // Assuming you have a logo image

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { to: "/upholstery-quotes", label: "Upholstery Quotes", icon: <Quote className="w-4 h-4" /> },
    { to: "/pillow-orders", label: "Pillow Orders", icon: <Package className="w-4 h-4" /> },
    { to: "/bookings", label: "Bookings", icon: <CalendarCheck className="w-4 h-4" /> },
    { to: "/fabric-management", label: "Fabric Management", icon: <Layers className="w-4 h-4" /> },
    { to: "/order-tracker", label: "Order Tracker", icon: <Truck className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 h-screen bg-[#745535] text-white rounded-3xl text-[16px] font-displays p-4 space-y-4">
      <img src={Massk} alt="logo" />
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:translate-x-3 hover:bg-[#8c6f4a] ${
                isActive
                  ? "bg-white font-semibold text-[#745535]"
                  : "text-white "
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
