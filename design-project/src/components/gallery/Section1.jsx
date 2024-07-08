import fruits from "../../assets/img_1.jpg.webp";
import beach from "../../assets/img_2.jpg.webp";
import interior from "../../assets/img_3.jpg.webp";
import mountain_climb from "../../assets/img_5.jpg.webp";

export default function Section1() {
  return (
    <div className="pt-16 sm:pt-28 pb-32">
      <div className="sm:w-4/5 mx-auto h-auto">
        <div className="sm:grid grid-cols-4 p-3 sm:p-0 gap-5">
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={fruits} alt="Food & Wines" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={beach} alt="Resort & Spa" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={interior} alt="Hotel Rooms" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 aspect-w-4 aspect-h-3">
            <img
              src={mountain_climb}
              alt="Mountain Climbing"
              className="object-cover"
            />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------ */}
      <div className="sm:w-4/5 mx-auto h-auto">
        <div className="sm:grid grid-cols-4 p-3 sm:p-0 gap-5">
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={fruits} alt="Food & Wines" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={beach} alt="Resort & Spa" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={interior} alt="Hotel Rooms" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 aspect-w-4 aspect-h-3">
            <img
              src={mountain_climb}
              alt="Mountain Climbing"
              className="object-cover"
            />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------- */}

      <div className="sm:w-4/5 mx-auto h-auto">
        <div className="sm:grid grid-cols-2 p-3 sm:p-0 gap-5">
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={fruits} alt="Food & Wines" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={beach} alt="Resort & Spa" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------- */}
      <div className="sm:w-4/5 mx-auto h-auto">
        <div className="sm:grid grid-cols-4 p-3 sm:p-0 gap-5">
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={fruits} alt="Food & Wines" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={beach} alt="Resort & Spa" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 sm:mr-5 aspect-w-4 aspect-h-3">
            <img src={interior} alt="Hotel Rooms" className="object-cover" />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
          <div className="w-full mb-5 aspect-w-4 aspect-h-3">
            <img
              src={mountain_climb}
              alt="Mountain Climbing"
              className="object-cover"
            />
            <div>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-40"></div> */}
    </div>
  );
}
