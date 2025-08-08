// // src/components/Navbar.jsx
// import React from "react";
// import v from "../assets/v.png"; // Assuming you have a user avatar image
// import Fra from "../assets/Fra.png"; // Assuming you have a Fra image

// export default function Navbar({ onMenuClick }) {
//   return (
//     <header className="w-full bg-white  px-4 py-3 flex items-center justify-between">
//       {/* Hamburger only on mobile */}
//       <div className="md:hidden">
//         <button onClick={onMenuClick} className="text-2xl text-gray-700">
//           ☰
//         </button>
//       </div>
//       <div className="hidden md:flex px-4 flex-col">
//         <span>
//           <h1 className="text-[14px] text-[#1D1E1B]">
//             Wednesday, February 14th
//           </h1>
//         </span>
//         <span>
//           <h1 className="text-[32px] font-medium">GOOD MORNING, Jack</h1>
//         </span>
//       </div>

//       {/* You can add user avatar or other controls on the right */}
//       <div className="flex border-2 border-dashed border-[#0206171A]  mr-4 justify-center items-center  space-x-4 w-44 h-16">
//         <div >
//           <img src={v} alt="" className="rounded-full h-[38px] w-[38px]" />
//         </div>
//         <div className="flex flex-col">
//           <span className="text-[16px] font-displays text-[#1D1E1B]">Dani</span>
//           <span className="text-[14px] text-[#020617]">Admin</span>
//         </div>
//         <div>
//           {" "}
//           <img src={Fra} alt=""  />
//         </div>
//       </div>
//     </header>
//   );
// }









// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import v from "../assets/v.png"; 
import Fra from "../assets/Fra.png"; 

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="w-full bg-white px-4 py-3 flex items-center justify-between">
      {/* Hamburger only on mobile */}
      <div className="md:hidden">
        <button onClick={onMenuClick} className="text-2xl text-gray-700">
          ☰
        </button>
      </div>

      <div className="hidden md:flex px-4 flex-col">
        <span>
          <h1 className="text-[14px] text-[#1D1E1B]">
            Wednesday, February 14th
          </h1>
        </span>
        <span>
          <h1 className="text-[32px] font-medium">GOOD MORNING, Jack</h1>
        </span>
      </div>

      {/* User Avatar & Info */}
      <div
        className="flex border-2 border-dashed border-[#0206171A] mr-4 justify-center items-center space-x-4 w-44 h-16 cursor-pointer"
        onClick={handleAvatarClick} // Click to go to login
      >
        <div>
          <img src={v} alt="Avatar" className="rounded-full h-[38px] w-[38px]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-displays text-[#1D1E1B]">Dani</span>
          <span className="text-[14px] text-[#020617]">Admin</span>
        </div>
        <div>
          <img src={Fra} alt="Dropdown" />
        </div>
      </div>
    </header>
  );
}
