import "./App.css";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

import "./index.css";
import mountain from "../src/assets/img_1_long.jpg.webp";
import video from "../src/assets/video-player.svg";
import food from "../src/assets/001-breakfast.svg";
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

function App() {
  return (
    <>
      <div className="background">
        <div className="flex justify-between p-5">
          <Logo />
          <Menu />
        </div>
        <div
          className="text-black flex flex-col 
        justify-center items-center h-80 text-3xl"
        >
          <h1 className="mb-5">Travel & Tours</h1>
          <h1>A free template by Colorlib. Download and share!</h1>
          <div>
            <button
              className="border-2 p-3 rounded-lg hover:bg-white hover:text-black
              mt-10 text-white  border-white border-solid"
            >
              VISIT COLORLIS
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 h-auto p-20">
        <div>
          <img src={mountain} alt="mountain image" />
        </div>
        <div className="pl-14">
          <h1 className="text-3xl mt-24">Welcome To Our Website</h1>
          <p className="mt-6 leading-loose">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="mt-6 leading-loose">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="mt-8 flex row-auto items-center">
            <img
              src={video}
              alt="video player"
              width={50}
              height={50}
              className="mr-4"
            />
            <a href="#">WATCH THE VIDEO</a>
          </div>
        </div>
      </div>

      {/* -------------- */}

      <div className="w-4/5 mx-auto h-auto">
        <div className="w-1/3 mx-auto">
          <h1 className="text-3xl p-3 text-center">
            Experience Once In Your Life Time
          </h1>
          <p className="leading-loose p-3 text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>

        <div className="grid grid-cols-3">
          <div className="">
            <img src={food} alt="food" width={80} height="auto" />
            <h1 className="font-bold">Food</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="">
            <img src={food} alt="food" width={80} height="auto" />
            <h1 className="font-bold">Travel Anywhere</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="">
            <img src={food} alt="food" width={80} height="auto" />
            <h1 className="font-bold">Airplace</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="">
            <img src={food} alt="food" width={80} height="auto" />
            <h1 className="font-bold">Food</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="">
            <img src={food} alt="food" width={80} height="auto" />
            <h1 className="font-bold">Travel Anywhere</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="">
            <img src={food} alt="food" width={80} height="auto" />
            <h1 className="font-bold">Airplace</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="h-20">{/* space */}</div>
        </div>
      </div>
      <div>
        <div className="w-3/5 mx-auto font-extrabold ">
          <div className="w-1/2 mx-auto text-center text-4xl p-5">
            <h2>International Tour Management.</h2>
          </div>
          <p className="px-12 py-10 text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
      <ImagesSlider />
      <div>
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
            <div className=" w-5/5 mr-10">
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
            <div className=" w-5/5 mr-10">
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
            <div className=" w-5/5 mr-10">
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
      </div>

      <div>
        <div className="w-4/5 mx-auto h-auto">
          <div className="w-2/3 mx-auto text-center py-32">
            <h2 className="p-5 text-5xl font-bold">Happy Customers</h2>
            <p className="leading-loose font">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className="w-5/5 mr-10">
              <img
                src={person1}
                width="wx-auto"
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className=" p-5">
                <p className="leading-loose px-3">
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
                <h3>— Clare Gupta</h3>
              </div>
            </div>
            <div className=" w-5/5 mr-10">
              <img
                src={person2}
                width="wx-auto"
                className="w-20 h-20 rounded-full object-cover"
                alt=""
              />
              <div className=" p-5">
                <p className="leading-loose px-3">
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
                <h3>— Rogie Slater</h3>
              </div>
            </div>
            <div className=" w-5/5 mr-10">
              <img
                src={person3}
                width="wx-auto"
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className=" p-5">
                <p className="leading-loose px-3">
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
                <h3>— John Doe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-4/5 mx-auto h-auto">
          <div className="w-2/3 mx-auto text-center py-32">
            <h2 className="p-5 text-5xl font-bold">Top Destination</h2>
            <p className="leading-loose font">
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
                <h2 className="py-2">Food & Wines</h2>
                <div className="grid grid-cols-2">
                  <ReviewStars rating={4} />
                  <h3>1033 reviews</h3>
                </div>
              </div>
            </div>
            <div className="w-5/5 mr-10">
              <img src={beach} width="wx-auto" alt="" />
              <div className="">
                <h2 className="py-2">Resort & Spa</h2>
                <div className="grid grid-cols-2">
                  <ReviewStars rating={5} />
                  <h3>2000 reviews</h3>
                </div>
              </div>
            </div>
            <div className=" w-5/5 mr-10">
              <img src={interior} width="wx-auto" alt="" />
              <div className="">
                <h2 className="py-2">Hotel Rooms</h2>
                <div className="grid grid-cols-2">
                  <ReviewStars rating={3} />
                  <h3>533 reviews</h3>
                </div>
              </div>
            </div>
            <div className=" w-5/5 mr-10">
              <img src={mountain_climb} width="wx-auto" alt="" />
              <div className="">
                <h2 className="py-2">Mountain Climbing</h2>
                <div className="grid grid-cols-2">
                  <ReviewStars rating={4} />
                  <h3>1333 reviews</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
      <Footer/>
    </>
  );
}

export default App;
