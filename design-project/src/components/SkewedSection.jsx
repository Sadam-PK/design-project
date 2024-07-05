import fruits from "../assets/img_1.jpg.webp";


export default function SkewedSection() {
  return (
    <div className="relative bg-customTeal h-max pb-60">
      <div className="absolute inset-0 -top-16 w-full h-16 transform -skew-y-3 bg-customTeal z-0"></div>
      <div className="relative w-4/5 mx-auto h-auto z-10">
        <div className="w-2/3 mx-auto text-center py-32">
          <h2 className="p-5 text-5xl font-bold">Recent Blog Post</h2>
          <p className="leading-loose font">
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
              <p className="p-3">FEBRUARY 26, 2018</p>
              <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
              <p className="leading-loose px-3">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="w-full bg-white">
            <img src={beach} className="w-full" alt="" />
            <div className="p-5">
              <p className="p-3">FEBRUARY 26, 2018</p>
              <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
              <p className="leading-loose px-3">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="w-full bg-white">
            <img src={interior} className="w-full" alt="" />
            <div className="p-5">
              <p className="p-3">FEBRUARY 26, 2018</p>
              <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
              <p className="leading-loose px-3">
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
