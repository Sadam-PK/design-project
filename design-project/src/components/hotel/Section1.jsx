import mountain from "../../assets/hero_2_1.jpg.webp";
import hero_1_1 from "../../assets/hero_1_1.jpg.webp";

export default function Section1() {
  return (
    <div>
      <div className="w-fit px-5 sm:pb-0 sm:grid grid-cols-2 h-auto sm:p-28 sm:pt-10">
        <div className="flex justify-center items-center h-screen">
          <img
            src={hero_1_1}
            alt="mountain image"
            className="object-cover h-screen pt-20"
          />
        </div>
        <div className="sm:pl-20 pr-16">
          <h1 className="text-3xl  px-0 sm:text-4xl sm:mt-40 font-fatface  ">
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

      {/* ------------- */}

      <div className="w-fit sm:grid grid-cols-2 h-auto sm:p-32 sm:pb-0 sm:pt-0">
        <div className="sm:px-20">
          <h1 className="text-2xl px-0 sm:text-4xl sm:mt-20 font-fatface  ">
            Presidential Room
          </h1>
          <p
            className="mt-3 leading-loose text-gray-500 font-sans 
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
        <div>
          <img
            src={mountain}
            alt="mountain image"
            className="object-cover h-screen pb-20"
          />
        </div>
      </div>
    </div>
  );
}
