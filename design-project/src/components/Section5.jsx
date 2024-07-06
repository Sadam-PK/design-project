import person1 from "../assets/person_1.jpg.webp";
import person2 from "../assets/person_2.jpg.webp";
import person3 from "../assets/person_3.jpg.webp";

export default function () {
  return (
    <div className="bg-gray-50">
      <div className="sm:w-4/5 mx-auto text-center  pt-10 sm:pt-28 h-auto">
        <h2 className="text-3xl sm:p-5 sm:text-7xl  font-fatface">
          Happy Customers
        </h2>
        <div className="h-16"></div>

        <div className="sm:grid grid-cols-3 italic">
          <div className="w-5/5">
            <img
              src={person1}
              width="wx-auto"
              alt=""
              className="w-20 h-20 rounded-full object-cover ml-8"
            />
            <div className=" p-5 text-start">
              <p className="leading-loose px-3 text-start  font-sans text-gray-900">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <h3 className="py-5 font-sans text-gray-400">— Clare Gupta</h3>
            </div>
          </div>
          <div className=" w-5/5 mr-10">
            <img
              src={person2}
              width="wx-auto"
              className="w-20 h-20 rounded-full object-cover ml-8"
              alt=""
            />
            <div className=" p-5 text-start">
              <p className="leading-loose px-3 font-sans text-gray-900">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <h3 className="py-5 font-sans text-gray-400">— Rogie Slater</h3>
            </div>
          </div>
          <div className=" w-5/5 mr-10">
            <img
              src={person3}
              width="wx-auto"
              alt=""
              className="w-20 h-20 rounded-full object-cover ml-8"
            />
            <div className=" p-5 text-start">
              <p className="leading-loose px-3 font-sans text-gray-900">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <h3 className="py-5 text-gray-400">— John Doe</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
