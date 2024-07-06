import fruits from "../../assets/person_4.jpg.webp";
import beach from "../../assets/person_5.jpg.webp";
import interior from "../../assets/person_6.jpg.webp";

export default function Section3() {
  return (
    <div className="h-max pb-20 sm:pb-32 pt-10 sm:pt-20">
      <div className="h-20 sm:h-52"></div>
      <h2 className="sm:p-0 text-center text-3xl sm:text-7xl font-fatface">
        Team
      </h2>
      <div className="w-4/5 sm:w-3/5 mx-auto h-auto pt-8 text-center py-32 sm:pt-10 sm:pb-16">
        <p className="py-4 sm:py-0 leading-loose font-light text-gray-600 font-sans text-lg">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>

      <div
        className="sm:w-5/5 mx-auto px-4 sm:px-40 grid gap-8 
      grid-cols-1 sm:grid-cols-3"
      >
        <div className="bg-white">
          <img src={fruits} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
              FEBRUARY 26, 2018
            </p>
            <h2 className="text-xl sm:text-2xl font-fatface pb-3">
              45 Best Places To Unwind
            </h2>
          </div>
        </div>

        <div className="bg-white">
          <img src={beach} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
              FEBRUARY 26, 2018
            </p>

            <h2 className="text-xl sm:text-2xl font-fatface pb-3">
              45 Best Places To Unwind
            </h2>
          </div>
        </div>

        <div className="bg-white">
          <img src={interior} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
              FEBRUARY 26, 2018
            </p>
            <h2 className="text-xl sm:text-2xl font-fatface pb-3">
              45 Best Places To Unwind
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <img src={fruits} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
              FEBRUARY 26, 2018
            </p>
            <h2 className="text-xl sm:text-2xl font-fatface pb-3">
              45 Best Places To Unwind
            </h2>
          </div>
        </div>

        <div className="bg-white">
          <img src={beach} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
              FEBRUARY 26, 2018
            </p>

            <h2 className="text-xl sm:text-2xl font-fatface pb-3">
              45 Best Places To Unwind
            </h2>
          </div>
        </div>

        <div className="bg-white">
          <img src={interior} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
              FEBRUARY 26, 2018
            </p>
            <h2 className="text-xl sm:text-2xl font-fatface pb-3">
              45 Best Places To Unwind
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
