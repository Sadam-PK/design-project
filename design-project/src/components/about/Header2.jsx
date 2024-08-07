import Logo from "../../components/Logo";
import Menu from "../../components/Menu";

export default function Header2() {
  return (
    <div className="background3">
      <div className="background3 relative">
        {/* overlay for background */}
        <div className="absolute inset-0 bg-gray-600 opacity-25" />
        <div className="flex justify-between p-5 relative">
          <Logo />
          <Menu />
        </div>
        <div
          className="text-white justify-center items-center sm:text-white, flex flex-col 
        justify-center, items-center, relative"
        >
          <h1 className="text-4xl font-bold sm:text-7xl mt-16 sm:mt-0 font-fatface mb-4 sm:mb-5">
            About Us
          </h1>
          <h1 className="text-sm  md:text-2xl font-light">
            A free template by{" "}
            <a
              href="#"
              className="text-gray-400 hover:underline hover:text-white"
            >
              Colorlib
            </a>
            . Download and share!
          </h1>
        </div>
      </div>
    </div>
  );
}
