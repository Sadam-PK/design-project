export default function Section1() {
  return (
    <div className="flex p-28 border-2">
      <div className="w-3/5 p-10 border-2 mr-10 shadow-lg
       shadow-gray-300 text-gray-500 font-light">
        <div className="flex flex-row items-center">
          <label htmlFor="" className="py-2 mr-32">
            Name
          </label>
          <label htmlFor="" className="py-2 ml-32">
            Phone
          </label>
        </div>

        <div className="flex flex-row py-2 w-auto">
          <input type="text" className="border-2 p-3 mr-5" />
          <input type="text" className="border-2 ml-2" />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="" className="py-2">
            Email
          </label>
          <input type="text" className="border-2  p-3" />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="" className="py-2">
            Write Message
          </label>
          <textarea type="textarea" className="border-2  p-3 h-40" />
        </div>

        <button
          className="w-80 h-auto border-2 border-customTeal sm:border-2 p-3 rounded-md hover:bg-white
         hover:text-black sm:w-48 mt-10 text-gray-700 border-solid font-thin font-mukta"
        >
          SEND MESSAGE
        </button>
      </div>

      {/* ---------- */}

      <div className="w-2/5  ml-10 px-6">
        <p className=" font-mukta font-bold text-customTeal">ADDRESS:</p>
        <h2 className="py-2 font-fatface text-3xl mb-8">
          98 West 21th Street, Suite 721 New York NY 10016
        </h2>

        <p className="py-2 font-mukta font-bold text-customTeal">PHONE:</p>
        <h2 className="py-2 font-fatface text-3xl mb-8">(+1) 435 3533</h2>
        <p className="py-2 font-mukta font-bold text-customTeal">EMAIL:</p>
        <h2 className="py-2 font-fatface text-3xl mb-8">info@yourdomain.com</h2>
      </div>
    </div>
  );
}
