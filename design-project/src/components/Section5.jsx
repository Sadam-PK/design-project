import person1 from "../assets/person_1.jpg.webp";
import person2 from "../assets/person_2.jpg.webp";
import person3 from "../assets/person_3.jpg.webp";

export default function () {
  return (
    <div>
      <div className="w-4/5 mx-auto h-auto">
        <div className="w-2/3 mx-auto text-center py-32">
          <h2 className="p-5 text-6xl font-extrabold font-fatface">
            Happy Customers
          </h2>
        </div>
        <div className="grid grid-cols-3 italic">
          <div className="w-5/5">
            <img
              src={person1}
              width="wx-auto"
              alt=""
              className="w-20 h-20 rounded-full object-cover ml-8"
            />
            <div className=" p-5">
              <p className="leading-loose px-3  font-sans text-gray-900">
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
            <div className=" p-5">
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
            <div className=" p-5">
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
