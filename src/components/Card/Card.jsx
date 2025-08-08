import React from "react";

export default function Card({ value, label, icon }) {
  return (
    <div className="bg-white p-6 min-h-[120px] rounded-xl shadow-md flex items-center justify-between w-full">
      <div>
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-base text-gray-500 mt-1">{label}</div>
      </div>
      {icon && <div className="text-gray-400 text-4xl">{icon}</div>}
    </div>
  );
}
