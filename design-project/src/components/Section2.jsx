import food from "../assets/001-breakfast.svg";
import planet from "../assets/002-planet-earth.svg";
import airplane from "../assets/003-airplane.svg";
import beach2 from "../assets/004-beach.svg";
import mountains from "../assets/005-mountains.svg";
import balloons from "../assets/006-hot-air-balloon.svg";
import Experience from "./ExperienceSection";

export default function Section2() {
  return (
    <div className="mx-auto border-t-2 h-auto leading-loose bg-gray-50">
      <Experience />

      {/* ------------------------------ */}

      <div className="sm:px-20 sm:grid grid-cols-3 text-center">
        <div className="pb-10 sm:p-0 sm:mb-10 flex flex-col items-center">
          <img src={food} alt="food photo" width={80} height="auto" />
          <h1 className="text-3xl pt-6 pb-4 font-fatface">Good Foods</h1>
          <p className="text-gray-500 font-sans text-lg font-light text-center px-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="py-10 sm:py-0 flex flex-col items-center">
          <img src={planet} alt="planet photo" width={80} height="auto" />
          <h1 className="text-3xl pt-6 pb-4  font-fatface">Travel Anywhere</h1>
          <p className="text-gray-500 font-sans text-lg font-light text-center px-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="py-10 sm:py-0 flex flex-col items-center pb-10">
          <img src={airplane} alt="airplane photo" width={80} height="auto" />
          <h1 className="text-3xl pt-6 pb-4  font-fatface">Airplace</h1>
          <p className="text-gray-500 font-sans text-lg font-light text-center px-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="py-10 sm:py-0 flex flex-col items-center pb-10">
          <img src={beach2} alt="beach photo" width={80} height="auto" />
          <h1 className="text-3xl pt-6 pb-4  font-fatface">Beach Resort</h1>
          <p className="text-gray-500 font-sans text-lg font-light text-center px-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="py-10 sm:py-0 flex flex-col items-center pb-10">
          <img src={mountains} alt="mountains photo" width={80} height="auto" />
          <h1 className=" text-3xl pt-6 pb-4  font-fatface">
            Mountain Climbing
          </h1>
          <p className="text-gray-500 font-sans text-lg font-light text-center px-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="py-10 sm:py-0 flex flex-col items-center pb-10">
          <img src={balloons} alt="balloons photo" width={80} height="auto" />
          <h1 className="text-3xl pt-6 pb-4  font-fatface">Hot Air Balloon</h1>
          <p className="text-gray-500 font-sans text-lg font-light text-center px-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="h-20">{/* space */}</div>
      </div>
    </div>
  );
}
