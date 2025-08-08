import React from "react";

export default function StatusFilter({ selected, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-sm font-medium whitespace-nowrap">
        Update Order Status
      </h2>

      <div className="relative inline-block w-24">
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full border font-displays text-[13px] text-[#50CD89] rounded-3xl px-4 py-2 text-sm pr-8 bg-[#E8FFF3]"
        >
          <option value="All">All</option>
          <option value="Cancel">Cancel</option>
          <option value="Pending">Pending</option>
          <option value="Active">Active</option>
          <option value="Complete">Complete</option>
          <option value="Withdraw">Withdraw</option>
        </select>

        {/* Custom down arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="h-4 w-4 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 7l4.5 4.5L14.5 7H5.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
