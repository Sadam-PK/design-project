import mountain from "../assets/img_1_long.jpg.webp";
import VideoButton from "./VideoButton";

export default function Section1() {
  return (
    <div className="w-fit px-5 py-10 sm:grid grid-cols-2 h-auto sm:p-32">
      <div>
        <img src={mountain} alt="mountain image" />
      </div>
      <div className="sm:pl-14">
        <h1 className="text-2xl pt-10 sm:pt-0 px-0 sm:text-3xl sm:mt-44 font-fatface  ">
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
  );
}
