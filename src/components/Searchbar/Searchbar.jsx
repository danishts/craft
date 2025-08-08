import React from "react";
import { Search } from "lucide-react";

export default function Searchbar({
  value = "",
  onChange = () => {},
  placeholder = "Search...",
}) {
  return (
    <div className="mb-4 w-full max-w-md relative">
      {/* Icon on the left */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>

      {/* Input with matching border color */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-[#F1F1F2] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}
