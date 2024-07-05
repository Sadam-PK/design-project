import Logo from "./Logo"
import Menu from "./Menu";


export default function Header() {
  return (
    <div className="background relative">
      {/* overlay for background */}
      <div className="absolute inset-0 bg-gray-600 opacity-50" />
      <div className="flex justify-between p-5 relative">
        <Logo />
        <Menu />
      </div>
      <div
        className="text-white flex flex-col 
        justify-center items-center h-80 relative"
      >
        <h1 className="mb-5 text-7xl font-fatface font-extrabold">
          Travel & Tours
        </h1>
        <h1 className="text-2xl font-light">
          A free template by{" "}
          <a
            href="#"
            className="text-gray-300 hover:underline hover:text-white"
          >
            Colorlib
          </a>
          . Download and share!
        </h1>
        <button
          className="border-2 p-3 rounded-md hover:bg-white hover:text-black w-48
              mt-10 text-white  border-white border-solid font-thin font-mukta"
        >
          VISIT COLORLIS
        </button>
      </div>
    </div>
  );
}
