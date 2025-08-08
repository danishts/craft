// // src/layouts/MainLayout.jsx
// import React from "react";
// import { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import MobileSidebar from "../MobileSidebar/MobileSidebar";
// import Navbar from "../Navbar";


// export default function MainLayout({ children }) {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggleMobileSidebar = () => {
//     setMobileOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:block w-64 bg-white shadow-lg">
//         <Sidebar />
//       </aside>

//       {/* Mobile Sidebar Drawer */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 z-40  bg-opacity-30"
//           onClick={toggleMobileSidebar}
//         >
//           <div
//             className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <MobileSidebar onClose={toggleMobileSidebar} />
//           </div>
//         </div>
//       )}

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Pass handler here */}
//         <Navbar onMenuClick={toggleMobileSidebar} />
//         <main className="flex-1 p-4">{children}</main>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-20">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-opacity-30"
          onClick={toggleMobileSidebar}
        >
          <div
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileSidebar onClose={toggleMobileSidebar} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 overflow-y-auto h-screen">
        {/* Navbar (not fixed) */}
        {/* Fixed & responsive Navbar */}
        <div className="fixed top-0 left-0 right-0 h-24   z-10 md:ml-64">
          <Navbar onMenuClick={toggleMobileSidebar} />
        </div>

        {/* Scrollable Content (includes navbar) */}
        <main className="flex-1 p-4 mt-14 bg-white">{children}</main>
      </div>
    </div>
  );
}
