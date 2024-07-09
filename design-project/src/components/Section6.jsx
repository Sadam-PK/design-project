import fruits from "../assets/img_1.jpg.webp";
import beach from "../assets/img_2.jpg.webp";
import interior from "../assets/img_3.jpg.webp";
import mountain_climb from "../assets/img_5.jpg.webp";

import ReviewStars from "./ReviewStar";

export default function Section6() {
  return (
    <div className="pt-16 sm:pt-28">
      <div className="sm:w-4/5 mx-auto h-auto">
        <h2 className="w-2/3 text-center sm:p-5 mx-auto text-3xl sm:text-4xl font-fatface">
          Top Destination
        </h2>
        <div className="sm:w-2/3 mx-auto text-center pt-5 pb-10 sm:pt-0 sm:pb-20">
          <p className="leading-loose font-sans text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
            laborum voluptate id porro, culpa maiores quis, blanditiis
            laboriosam alias. Sed.
          </p>
        </div>

        <div className="sm:grid grid-cols-4 p-3 sm:p-0 gap-5">
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={fruits} alt="Food & Wines" className="object-cover" />
            <div>
              <h2 className="py-1 font-fatface text-xl">
                Food & Wines
              </h2>
              <div className="flex justify-between items-center">
                <ReviewStars rating={4} />
                <h3 className="text-gray-300 italic">1033 reviews</h3>
              </div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={beach} alt="Resort & Spa" className="object-cover" />
            <div>
              <h2 className="py-1 font-fatface text-xl">
                Resort & Spa
              </h2>
              <div className="flex justify-between items-center">
                <ReviewStars rating={5} />
                <h3 className="text-gray-300 italic">2000 reviews</h3>
              </div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={interior} alt="Hotel Rooms" className="object-cover" />
            <div>
              <h2 className="py-1 font-fatface text-xl">
                Hotel Rooms
              </h2>
              <div className="flex justify-between items-center">
                <ReviewStars rating={3} />
                <h3 className="text-gray-300 italic">533 reviews</h3>
              </div>
            </div>
          </div>
          <div className="w-full mb-5 aspect-w-4 aspect-h-3">
            <img
              src={mountain_climb}
              alt="Mountain Climbing"
              className="object-cover"
            />
            <div>
              <h2 className="py-1 font-fatface text-xl">
                Mountain Climbing
              </h2>
              <div className="flex justify-between items-center">
                <ReviewStars rating={4} />
                <h3 className="text-gray-300 italic">1333 reviews</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 sm:h-40"></div>
    </div>
  );
}
