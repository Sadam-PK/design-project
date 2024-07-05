import fruits from "../assets/img_1.jpg.webp";
import beach from "../assets/img_2.jpg.webp";
import interior from "../assets/img_3.jpg.webp";


export default function () {
  return (
    <div className="relative bg-customTeal h-max pb-60">
      <div className="relative w-4/5 mx-auto h-auto z-10 pt-8">
        <div className="w-2/3 mx-auto text-center py-32">
          <h2 className="p-5 text-6xl font-extrabold font-fatface">
            Recent Blog Post
          </h2>
          <p className="leading-loose font text-gray-200 font-sans text-lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="w-full bg-white">
            <img src={fruits} className="w-full" alt="" />
            <div className="p-5">
              <p className="p-3 text-gray-300">FEBRUARY 26, 2018</p>
              <h2 className="pl-3 pb-3 font-fatface font-extrabold text-3xl">
                45 Best Places To Unwind
              </h2>
              <p className="leading-loose px-3 font-sans text-gray-500">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="w-full bg-white">
            <img src={beach} className="w-full" alt="" />
            <div className="p-5">
              <p className="p-3 text-gray-300">FEBRUARY 26, 2018</p>
              <h2 className="pl-3 pb-3 font-fatface font-extrabold text-3xl">
                45 Best Places To Unwind
              </h2>
              <p className="leading-loose px-3 font-sans text-gray-500">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="w-full bg-white">
            <img src={interior} className="w-full" alt="" />
            <div className="p-5">
              <p className="p-3 text-gray-300">FEBRUARY 26, 2018</p>
              <h2 className="pl-3 pb-3 font-fatface font-extrabold text-3xl">
                45 Best Places To Unwind
              </h2>
              <p className="leading-loose px-3 font-sans text-gray-500">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
