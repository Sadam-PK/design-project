import fruits from "../../assets/img_1.jpg.webp";
import beach from "../../assets/img_2.jpg.webp";
import interior from "../../assets/img_3.jpg.webp";

export default function Section4() {
  return (
    <div className="bg-gray-200 h-max pb-20 sm:pb-32 pt-10 sm:pt-44">
      <div className="h-20 sm:h-52"></div>
      <h2 className="sm:p-0 text-center text-3xl sm:text-6xl font-fatface">
        More Hotel Features
      </h2>

      <div
        className="w-4/5 sm:w-3/5 mx-auto h-auto pt-8 text-center py-32
        sm:pt-10 sm:pb-16"
      >
        <p
          className="py-2 sm:py-0 sm:px-12 leading-loose font-light text-gray-500 
        font-sans text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>
      </div>

      <div
        className="sm:w-5/5 mx-auto px-4 sm:px-32 grid gap-8 
      grid-cols-1 sm:grid-cols-3 "
      >
        <div className="bg-white shadow-sm shadow-gray-300">
          <img src={fruits} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <h6 className="text-xl sm:text-2xl font-fatface pb-3">
              Five Reasons to Stay at Villa Resort
            </h6>
          </div>
        </div>

        <div className="bg-white shadow-sm shadow-gray-300">
          <img src={beach} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <h6 className="text-xl sm:text-2xl font-fatface pb-3">
              Five Reasons to Stay at Villa Resort
            </h6>
          </div>
        </div>

        <div className="bg-white shadow-sm shadow-gray-300">
          <img src={interior} className="w-full" alt="" />
          <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
            <h6 className="text-xl sm:text-2xl font-fatface pb-3">
              Five Reasons to Stay at Villa Resort
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
