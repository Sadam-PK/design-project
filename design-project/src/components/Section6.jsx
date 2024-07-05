import fruits from "../assets/img_1.jpg.webp";
import beach from "../assets/img_2.jpg.webp";
import interior from "../assets/img_3.jpg.webp";
import mountain_climb from "../assets/img_5.jpg.webp";

import ReviewStars from "./ReviewStar"


export default function Section6() {
  return (
    <div>
      <div className="w-4/5 mx-auto h-auto">
        <div className="w-2/3 mx-auto text-center py-32">
          <h2 className="p-5 text-4xl font-extrabold font-fatface">
            Top Destination
          </h2>
          <p className="leading-loose font-sans text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
            laborum voluptate id porro, culpa maiores quis, blanditiis
            laboriosam alias. Sed.
          </p>
        </div>
        <div className="grid grid-cols-4">
          <div className="w-5/5 mr-10">
            <img src={fruits} width="wx-auto" alt="" />
            <div className="">
              <h2 className="py-2 font-fatface font-extrabold text-xl">
                Food & Wines
              </h2>
              <div className="flex flex-cols-2 justify-between items-center">
                <ReviewStars rating={4} />
                <h3 className="text-gray-300 italic">1033 reviews</h3>
              </div>
            </div>
          </div>
          <div className="w-5/5 mr-10">
            <img src={beach} width="wx-auto" alt="" />
            <div className="">
              <h2 className="py-2 font-fatface font-extrabold text-xl">
                Resort & Spa
              </h2>
              <div className="flex flex-cols-2 justify-between items-center">
                <ReviewStars rating={5} />
                <h3 className="text-gray-300 italic">2000 reviews</h3>
              </div>
            </div>
          </div>
          <div className=" w-5/5 mr-10">
            <img src={interior} width="wx-auto" alt="" />
            <div className="">
              <h2 className="py-2 font-fatface font-extrabold text-xl">
                Hotel Rooms
              </h2>
              <div className="flex flex-cols-2 justify-between items-center">
                <ReviewStars rating={3} />
                <h3 className="text-gray-300 italic">533 reviews</h3>
              </div>
            </div>
          </div>
          <div className=" w-5/5 mr-10">
            <img src={mountain_climb} width="wx-auto" alt="" />
            <div className="">
              <h2 className="py-2 font-fatface font-extrabold text-xl">
                Mountain Climbing
              </h2>
              <div className="flex flex-cols-2 justify-between items-center">
                <ReviewStars rating={4} />
                <h3 className="text-gray-300 italic">1333 reviews</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
}
