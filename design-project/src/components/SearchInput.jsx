import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

// --------------------
export default function SearchInput() {
  return (
    <div className="relative flex justify-center items-center h-auto m-0 p-0">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </span>
        <input
          type="text"
          className="pl-10 pr-4 py-2 border rounded"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
