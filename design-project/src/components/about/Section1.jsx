import mountain from "../../assets/hero_1_1.jpg.webp";
import VideoButton from "../VideoButton";

export default function Section1() {
  return (
    <div className="w-fit px-5 py-10 sm:grid grid-cols-2 h-auto sm:p-32">
      <div>
        <img
          src={mountain}
          alt="mountain image"
          className="object-cover h-auto sm:h-screen pb-10"
        />
      </div>
      <div className="sm:px-20">
        <h1 className="text-2xl pt-0 sm:text-4xl sm:mt-24 font-fatface px-3">
          Welcome Travel & Tours
        </h1>
        <p
          className="mt-4 leading-loose text-gray-500 font-sans 
        font-light px-3"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p
          className="mt-6 leading-loose text-gray-500 font-sans 
        font-light pr-20 px-3"
        >
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button
          className="w-80 h-auto border-2 border-customTeal sm:border-2 p-3 rounded-md hover:bg-white
           hover:text-black sm:w-48 mt-10 text-gray-700 border-solid font-thin font-mukta"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
