import React from "react";

export default function Pagination() {
  return (
    <div className="flex w-full bg-gray-100 sm:pl-32 sm:pb-32 sm:pt-4">
      <div
        className="cursor-pointer w-12 h-12 flex items-center justify-center 
      rounded-full mx-1 bg-customTeal shadow-lg text-white"
      >
        1
      </div>
      <div
        className="cursor-pointer w-12 h-12 flex items-center justify-center 
      rounded-full mx-1 bg-gray-50 text-customTeal"
      >
        2
      </div>
      <div
        className="cursor-pointer w-12 h-12 flex items-center justify-center 
      rounded-full mx-1 bg-gray-50 text-customTeal"
      >
        3
      </div>
    </div>
  );
}
