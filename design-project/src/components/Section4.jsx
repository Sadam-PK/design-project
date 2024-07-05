import fruits from "../assets/img_1.jpg.webp";
import beach from "../assets/img_2.jpg.webp";
import interior from "../assets/img_3.jpg.webp";

export default function () {
  return (
    <div className="bg-customTeal h-max pb-60 px-3 pt-10 sm:p-0">
      <div className="w-4/5 sm:w-3/5 mx-auto h-auto pt-8 text-center py-32">
        <h2 className="sm:p-5 text-3xl sm:text-7xl font-fatface">
          Recent Blog Post
        </h2>
        <p className="py-2 leading-loose font text-gray-200 font-sans text-lg">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>

      <div className="sm:grid grid-cols-3 justify-center place-items-center">
        <div className="sm:w-4/5 bg-white mb-10">
          <img src={fruits} className="w-full" alt="" />
          <div className="p-5">
            <p className="p-3 sm:p-0 text-gray-300">FEBRUARY 26, 2018</p>
            <h2 className="sm:px-0 text-xl pl-3 pb-3 font-fatface sm:text-3xl">
              45 Best Places To Unwind
            </h2>
            <p className="px-3 sm:px-0 leading-loose font-sans text-gray-500">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="sm:w-4/5 bg-white mb-10">
          <img src={beach} className="w-full" alt="" />
          <div className="p-5">
            <p className="p-3 sm:p-0 text-gray-300">FEBRUARY 26, 2018</p>
            <h2 className="sm:px-0 pl-3 pb-3 font-fatface text-xl sm:text-3xl">
              45 Best Places To Unwind
            </h2>
            <p className="px-3 sm:px-0 leading-loose font-sans text-gray-500">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="sm:w-4/5 bg-white mb-10">
          <img src={interior} className="w-full" alt="" />
          <div className="p-5">
            <p className="p-3 sm:p-0 text-gray-300">FEBRUARY 26, 2018</p>
            <h2 className="px-3 sm:px-0 pl-3 pb-3 font-fatface text-xl sm:text-3xl">
              45 Best Places To Unwind
            </h2>
            <p className="px-3 sm:px-0 leading-loose font-sans text-gray-500">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
