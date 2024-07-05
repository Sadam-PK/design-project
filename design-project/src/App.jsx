import "./App.css";
import "./index.css";
import "@fontsource/abril-fatface";
import "@fontsource/mukta-mahee";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import mountain from "../src/assets/img_1_long.jpg.webp";
import video from "../src/assets/video-player.svg";
import food from "../src/assets/001-breakfast.svg";
import planet from "../src/assets/002-planet-earth.svg";
import airplane from "../src/assets/003-airplane.svg";
import beach2 from "../src/assets/004-beach.svg";
import mountains from "../src/assets/005-mountains.svg";
import balloons from "../src/assets/006-hot-air-balloon.svg";
import ImagesSlider from "../src/components/Slider";
import fruits from "./assets/img_1.jpg.webp";
import beach from "./assets/img_2.jpg.webp";
import interior from "./assets/img_3.jpg.webp";
import person1 from "./assets/person_1.jpg.webp";
import person2 from "./assets/person_2.jpg.webp";
import person3 from "./assets/person_3.jpg.webp";
import mountain_climb from "./assets/img_5.jpg.webp";
import ReviewStars from "./components/ReviewStar";
import Footer from "./components/Footer";
import VideoButton from "./components/VideoButton";
import SkewedSection from "./components/SkewedSection";

function App() {
  return (
    <>
      <div className="background relative">
        {/* overlay for background */}
        <div className="absolute inset-0 bg-gray-600 opacity-50" />
        <div className="flex justify-between p-5 relative">
          <Logo />
          <Menu />
        </div>
        <div
          className="text-white flex flex-col 
        justify-center items-center h-80 relative"
        >
          <h1 className="mb-5 text-7xl font-fatface font-extrabold">
            Travel & Tours
          </h1>
          <h1 className="text-2xl font-light">
            A free template by{" "}
            <a
              href="#"
              className="text-gray-300 hover:underline hover:text-white"
            >
              Colorlib
            </a>
            . Download and share!
          </h1>
          <button
            className="border-2 p-3 rounded-md hover:bg-white hover:text-black w-48
              mt-10 text-white  border-white border-solid font-thin font-mukta"
          >
            VISIT COLORLIS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 h-auto p-20">
        <div>
          <img src={mountain} alt="mountain image" />
        </div>
        <div className="pl-14">
          <h1 className="text-4xl mt-44 font-fatface font-extrabold">
            Welcome To Our Website
          </h1>
          <p
            className="mt-6 leading-loose text-gray-500 font-sans 
          font-light"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p
            className="mt-6 leading-loose text-gray-500 font-sans 
          font-light"
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="">
            <VideoButton />
          </div>
        </div>
      </div>

      {/* -------------- */}

      <div className="w-4/5 mx-auto h-auto leading-loose">
        <div className="w-2/3 mx-auto pb-20">
          <h1 className="text-4xl font-extrabold p-3 text-center font-fatface">
            Experience Once In Your Life Time
          </h1>
          <p className="p-3 text-gray-500 font-sans text-lg font-light text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>

        <div className="grid grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <img src={food} alt="food photo" width={80} height="auto" />
            <h1 className="font-extrabold text-xl p-3 font-fatface">
              Good Foods
            </h1>
            <p className="text-gray-500 font-sans text-lg font-light text-center p-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={planet} alt="planet photo" width={80} height="auto" />
            <h1 className="font-extrabold text-xl p-3 font-fatface">
              Travel Anywhere
            </h1>
            <p className="text-gray-500 font-sans text-lg font-light text-center p-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="flex flex-col items-center pb-10">
            <img src={airplane} alt="airplane photo" width={80} height="auto" />
            <h1 className="font-extrabold text-xl p-3 font-fatface">
              Airplace
            </h1>
            <p className="text-gray-500 font-sans text-lg font-light text-center p-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="flex flex-col items-center pb-10">
            <img src={beach2} alt="beach photo" width={80} height="auto" />
            <h1 className="font-extrabold text-xl p-3 font-fatface">
              Beach Resort
            </h1>
            <p className="text-gray-500 font-sans text-lg font-light text-center p-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              src={mountains}
              alt="mountains photo"
              width={80}
              height="auto"
            />
            <h1 className="font-extrabold text-xl p-3 font-fatface">
              Mountain Climbing
            </h1>
            <p className="text-gray-500 font-sans text-lg font-light text-center p-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="flex flex-col items-center pb-10">
            <img src={balloons} alt="balloons photo" width={80} height="auto" />
            <h1 className="font-extrabold text-xl p-3 font-fatface">
              Hot Air Balloon
            </h1>
            <p className="text-gray-500 font-sans text-lg font-light text-center p-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="h-20">{/* space */}</div>
        </div>
      </div>
      <div>
        <div className="w-3/5 mx-auto font-extrabold ">
          <div className="w-3/3 mx-auto text-center text-4xl p-2">
            <h2 className="font-extrabold text-6xl font-fatface ">
              International Tour Management.
            </h2>
          </div>
          <p className="px-12 py-10 text-center text-lg leading-loose text-gray-500 font-sans font-light">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
      <ImagesSlider />
      {/* <div className=" bg-customTeal h-max pb-40">
        <div className="w-4/5 mx-auto h-auto">
          <div className="w-2/3 mx-auto text-center py-32">
            <h2 className="p-5 text-5xl font-bold">Recent Blog Post</h2>
            <p className="leading-loose font">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className=" w-5/5 mr-10 bg-white">
              <img src={fruits} width="wx-auto" alt="" />
              <div className=" p-5">
                <p className="p-3">FEBRUARY 26, 2018</p>
                <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
                <p className="leading-loose px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className=" w-5/5 mr-10 bg-white">
              <img src={beach} width="wx-auto" alt="" />
              <div className=" p-5">
                <p className="p-3">FEBRUARY 26, 2018</p>
                <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
                <p className="leading-loose px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className=" w-5/5 mr-10 bg-white">
              <img src={interior} width="wx-auto" alt="" />
              <div className="p-5">
                <p className="p-3">FEBRUARY 26, 2018</p>
                <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
                <p className="leading-loose px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="relative bg-customTeal h-max pb-60">
        <div className="absolute inset-0 -top-16 w-full h-16 transform -skew-y-3 bg-customTeal z-0"></div>
        <div className="relative w-4/5 mx-auto h-auto z-10">
          <div className="w-2/3 mx-auto text-center py-32">
            <h2 className="p-5 text-5xl font-bold">Recent Blog Post</h2>
            <p className="leading-loose font">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="w-full bg-white">
              <img src={fruits} className="w-full" alt="" />
              <div className="p-5">
                <p className="p-3">FEBRUARY 26, 2018</p>
                <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
                <p className="leading-loose px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <img src={beach} className="w-full" alt="" />
              <div className="p-5">
                <p className="p-3">FEBRUARY 26, 2018</p>
                <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
                <p className="leading-loose px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <img src={interior} className="w-full" alt="" />
              <div className="p-5">
                <p className="p-3">FEBRUARY 26, 2018</p>
                <h2 className="p-3 font-bold">45 Best Places To Unwind</h2>
                <p className="leading-loose px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative bg-customTeal h-max pb-60">
        <div className="relative w-4/5 mx-auto h-auto z-10 pt-8">
          <div className="w-2/3 mx-auto text-center py-32">
            <h2 className="p-5 text-6xl font-extrabold font-fatface">
              Recent Blog Post
            </h2>
            <p className="leading-loose font text-gray-200 font-sans text-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="w-full bg-white">
              <img src={fruits} className="w-full" alt="" />
              <div className="p-5">
                <p className="p-3 text-gray-300">FEBRUARY 26, 2018</p>
                <h2 className="pl-3 pb-3 font-fatface font-extrabold text-3xl">
                  45 Best Places To Unwind
                </h2>
                <p className="leading-loose px-3 font-sans text-gray-500">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <img src={beach} className="w-full" alt="" />
              <div className="p-5">
                <p className="p-3 text-gray-300">FEBRUARY 26, 2018</p>
                <h2 className="pl-3 pb-3 font-fatface font-extrabold text-3xl">
                  45 Best Places To Unwind
                </h2>
                <p className="leading-loose px-3 font-sans text-gray-500">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="w-full bg-white">
              <img src={interior} className="w-full" alt="" />
              <div className="p-5">
                <p className="p-3 text-gray-300">FEBRUARY 26, 2018</p>
                <h2 className="pl-3 pb-3 font-fatface font-extrabold text-3xl">
                  45 Best Places To Unwind
                </h2>
                <p className="leading-loose px-3 font-sans text-gray-500">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
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
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
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
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
                <h3 className="py-5 text-gray-400">— John Doe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-4/5 mx-auto h-auto">
          <div className="w-2/3 mx-auto text-center py-32">
            <h2 className="p-5 text-4xl font-extrabold font-fatface">
              Top Destination
            </h2>
            <p className="leading-loose font-sans text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim
              facilis laborum voluptate id porro, culpa maiores quis, blanditiis
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
      </div>
      <div className="h-40"></div>
      <Footer />
    </>
  );
}

export default App;
