import fruits from "../../assets/img_1.jpg.webp";
import beach from "../../assets/img_2.jpg.webp";
import interior from "../../assets/img_3.jpg.webp";
import Pagination from "../Pagination";
import SearchInput from "../SearchInput";

export default function Section1() {
  return (
    <div>
      <div className="sm:flex pb-14 bg-gray-100 pt-16 sm:pt-0">
        <div className="sm:w-3/5">
          <div
            className="sm:w-5/5 mx-auto px-4 sm:pl-32 sm:pt-32 grid gap-8 
      grid-cols-1 sm:grid-cols-2"
          >
            <div className="bg-white shadow-gray-200 h-auto">
              <img src={fruits} className="w-full" alt="" />
              <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
                <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
                  FEBRUARY 26, 2018
                </p>
                <h2 className="text-xl sm:text-2xl font-fatface pb-3">
                  Free Template by Colorlib
                </h2>
              </div>
            </div>

            <div className="bg-white h-auto">
              <img src={beach} className="w-full" alt="" />
              <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
                <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
                  FEBRUARY 26, 2018
                </p>
                <h2 className="text-xl sm:text-2xl font-fatface pb-3">
                  Free Template by Colorlib
                </h2>
              </div>
            </div>

            <div className="bg-white h-auto">
              <img src={interior} className="w-full" alt="" />
              <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
                <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
                  FEBRUARY 26, 2018
                </p>
                <h2 className="text-xl sm:text-2xl font-fatface pb-3">
                  Free Template by Colorlib
                </h2>
              </div>
            </div>

            <div className="bg-white shadow-gray-200 h-auto">
              <img src={fruits} className="w-full" alt="" />
              <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
                <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
                  FEBRUARY 26, 2018
                </p>
                <h2 className="text-xl sm:text-2xl font-fatface pb-3">
                  Free Template by Colorlib
                </h2>
              </div>
            </div>

            <div className="bg-white h-auto">
              <img src={beach} className="w-full" alt="" />
              <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
                <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
                  FEBRUARY 26, 2018
                </p>
                <h2 className="text-xl sm:text-2xl font-fatface pb-3">
                  Free Template by Colorlib
                </h2>
              </div>
            </div>

            <div className="bg-white h-auto">
              <img src={interior} className="w-full" alt="" />
              <div className="p-5 sm:pt-5 sm:pb-8 py-8 sm:px-8">
                <p className="text-gray-300 font-light sm:pt-5 sm:pb-2">
                  FEBRUARY 26, 2018
                </p>

                <h2 className="text-xl sm:text-2xl font-fatface pb-3">
                  Free Template by Colorlib
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- */}

        <div className="sm:w-2/5 mt-10 sm:mt-0 shadow-sm ">
          <div className="grid grid-rows-3 sm:pl-12 sm:pt-32 gap-8 ">
            <div
              className="bg-white sm:mr-32 flex justify-center 
            items-center h-24  shadow-gray-300 shadow-sm"
            >
              <div className="flex flex-col p-5 ">
                <SearchInput />
              </div>
            </div>

            {/*  */}

            <div className="bg-white sm:mr-32 p-5 -mt-60  shadow-gray-300 shadow-sm">
              <h2 className="py-10 sm:py-3">Popular Post</h2>
              {/* popular k baaad */}
              <div className="flex">
                <div
                  className="h-auto w-2/5 flex justify-center
                items-center"
                >
                  <img src={fruits} className="w-full" alt="" />
                </div>

                <div className=" w-3/5 flex flex-col h-fit text-sm">
                  <p className="text-left text-gray-300 font-light sm:pt-4 pl-3">
                    FEBRUARY 26, 2018
                  </p>
                  <h2 className="font-fatface px-3 sm:p-3">
                    Free Template by Colorlib
                  </h2>
                </div>
              </div>

              {/*  */}

              <div className="flex">
                <div
                  className="h-auto w-2/5 flex justify-center
                items-center"
                >
                  <img src={beach} className="w-full" alt="" />
                </div>

                <div className="h-auto w-3/5 flex text-sm flex-col">
                  <p className="text-gray-300 font-light sm:pt-4 pl-3">
                    FEBRUARY 26, 2018
                  </p>
                  <h2 className="font-fatface font-light p-3">
                    Free Template by Colorlib
                  </h2>
                </div>

                {/*  */}
              </div>

              <div className="flex">
                <div
                  className="h-auto w-2/5 flex justify-center
                items-center"
                >
                  <img src={fruits} className="w-full" alt="" />
                </div>

                <div className="text-sm h-auto w-3/5 flex flex-col">
                  <p className="text-gray-300 font-light sm:pt-4 pl-3">
                    FEBRUARY 26, 2018
                  </p>
                  <h2 className="font-fatface font-light p-3">
                    Free Template by Colorlib
                  </h2>
                </div>

                {/*  */}
              </div>

              <div className="flex">
                <div
                  className="h-auto w-2/5 flex justify-center
                items-center"
                >
                  <img src={beach} className="w-full" alt="" />
                </div>

                <div className="text-sm h-auto w-3/5 flex flex-col">
                  <p className="text-gray-300  sm:pt-4 pl-3">
                    FEBRUARY 26, 2018
                  </p>
                  <h2 className="font-fatface p-3 font-light">
                    Free Template by Colorlib
                  </h2>
                </div>

                {/*  */}
              </div>

              <div className="flex">
                <div
                  className="h-auto w-2/5 flex justify-center
                items-center"
                >
                  <img src={interior} className="w-full" alt="" />
                </div>

                <div className="h-auto w-3/5 flex flex-col text-sm">
                  <p className="text-left text-gray-300 font-light sm:pt-4 pl-3">
                    FEBRUARY 26, 2018
                  </p>
                  <h2 className="font-light  font-fatface p-3">
                    Free Template by Colorlib
                  </h2>
                </div>
              </div>
            </div>

            {/* ------------------ */}

            <div className="bg-white sm:mr-32 h-80  shadow-gray-300 shadow-sm">
              <div className="p-8">
                <p>Categories</p>
              </div>
              <div className="px-8">
                <div
                  className="grid grid-flow-col justify-between border-gray-100 
                border-b-2 py-3"
                >
                  <p className="text-customTeal font-light">Events</p>
                  <p className="text-gray-500 font-light">{"(12)"}</p>
                </div>

                <div
                  className="grid grid-flow-col justify-between border-gray-100 
                border-b-2 py-3"
                >
                  <p className="text-customTeal font-light">Restro bar</p>
                  <p className="text-gray-500 font-light">{"(4)"}</p>
                </div>
                <div
                  className="grid grid-flow-col justify-between border-gray-100 
                border-b-2 py-3"
                >
                  <p className="text-customTeal font-light">Celebrations</p>
                  <p className="text-gray-500 font-light">{"(23)"}</p>
                </div>

                <div
                  className="grid grid-flow-col justify-between border-gray-100 
                border-b-2 py-3"
                >
                  <p className="text-customTeal font-light">Promos</p>
                  <p className="text-gray-500 font-light">{"(8)"}</p>
                </div>
              </div>
            </div>

            {/* ----------- */}
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
}
