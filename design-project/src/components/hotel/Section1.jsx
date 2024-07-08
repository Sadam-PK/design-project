import mountain from "../../assets/hero_2_1.jpg.webp";
import hero_1_1 from "../../assets/hero_1_1.jpg.webp";

export default function Section1() {
  return (
    <div>
      {/* ---------- family room section ------------ */}
      <div
        className="w-full px-5 sm:pb-0 sm:grid grid-cols-2 
      h-auto sm:p-28 sm:pt-10 "
      >
        <div className="w-full flex justify-center mx-auto items-center h-auto sm:h-screen">
          <img
            src={hero_1_1}
            alt="mountain image"
            className="object-cover h-auto sm:h-screen pt-20"
          />
        </div>
        <div className="sm:pl-20 sm:py-0 sm:pr-16 px-0">
          <h1 className="text-3xl pt-10 px-0 sm:text-4xl sm:mt-40 font-fatface  ">
            Family Room
          </h1>
          <p
            className="mt-4 leading-loose text-gray-500 font-sans 
        font-light"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p
            className="mt-6 leading-loose text-gray-500 font-sans 
        font-light"
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
      {/* ------President room section ------- */}
      <div
        className="w-full sm:grid grid-cols-2  h-auto sm:p-32 
      sm:pb-0 sm:pt-0  py-10 sm:py-0 hidden"
      >
        <div className="sm:px-20">
          <h1
            className="text-2xl px-10 pt-10 pb-5 sm:px-0 
          sm:text-4xl sm:mt-20 font-fatface  "
          >
            Presidential Room
          </h1>
          <p
            className="mt-3 px-10 sm:px-0 leading-loose text-gray-500 font-sans 
        font-light"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p
            className="mt-6  sm:px-0 leading-loose text-gray-500 font-sans 
        font-light px-10"
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <button
            className="w-80 mb-10 ml-5 sm:ml-0 h-auto border-2 border-customTeal sm:border-2 p-3 rounded-md hover:bg-white
           hover:text-black sm:w-48 mt-10 text-gray-700 border-solid font-thin font-mukta"
          >
            LEARN MORE
          </button>
        </div>
        <div className="w-full">
          <img
            src={mountain}
            alt="mountain image"
            className="object-cover h-auto sm:h-screen pb-20"
          />
        </div>
      </div>

      {/* ----------- mobile view ------------- */}
      <div
        className="w-full grid-cols-2  h-auto sm:p-32 
      sm:pb-0 sm:pt-0  py-10 sm:py-0 sm:hidden block"
      >
         <div className="w-full">
          <img
            src={mountain}
            alt="mountain image"
            className="object-cover h-auto sm:h-screen pb-10"
          />
        </div>
        <div className="sm:px-20">
          <h1
            className="text-2xl px-5 sm:px-0 
          sm:text-4xl font-fatface  "
          >
            Presidential Room
          </h1>
          <p
            className="mt-3 px-5 sm:px-0 leading-loose text-gray-500 font-sans 
        font-light"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p
            className="mt-6  sm:px-0 leading-loose text-gray-500 font-sans 
        font-light px-5"
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <button
            className="w-80 mb-10 ml-5 sm:ml-0 h-auto border-2 border-customTeal sm:border-2 p-3 rounded-md hover:bg-white
           hover:text-black sm:w-48 mt-10 text-gray-700 border-solid font-thin font-mukta"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
