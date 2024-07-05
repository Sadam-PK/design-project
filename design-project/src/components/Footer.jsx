import React from "react";
import EmailInput from "./EmailInput";
import facebook from "../assets/fb.svg";
import linkedin from "../assets/in.svg";
import twitter from "../assets/twitter.svg";
export default function Footer() {
  return (
    <footer className="h-auto bg-black bg-opacity-90 text-white  border-gray-50">
      <div className="h-32"></div>
      {/* Upper Part */}
      <div className="w-4/5 mx-auto flex border-b-2 mb-4 border-gray-700 pb-24">
        {/* Quick Links */}
        <div className="w-2/4 flex flex-col space-y-5 text-gray-300 font-thin">
          <div className="font-extrabold text-xl mb-1 font-fatface text-white">
            Quick Link
          </div>
          <div className="mb-1">About Us</div>
          <div className="mb-1">Terms & Conditions</div>
          <div className="mb-1">Privacy Policy</div>
          <div className="mb-1">Help</div>
          <div>Rooms</div>
        </div>

        {/* Support */}
        <div className="w-2/4 flex flex-col space-y-5 text-gray-300 font-thin">
          <div className="font-fatface text-white font-extrabold text-xl">
            Support
          </div>
          <div>About</div>
          <div>The Hosts</div>
          <div>About</div>
          <div>Contact</div>
          <div>Restaurant</div>
        </div>

        {/* Contact Info */}
        <div className="w-2/4 flex flex-col space-y-5">
          <div className="font-fatface font-extrabold text-xl">
            Contact Info
          </div>
          <div className="italic text-gray-200 font-thin leading-loose">
            <p className="">Address:</p>
            <address className="text-gray-300 font-thin not-italic">
              98 West 21th Street, Suite 721 <br /> New York NY 10016
            </address>
          </div>
          <div className="">
            <p className="italic text-gray-300 font-thin">Phone:</p>
            <p className=" text-gray-300 font-thin">(+1) 435 3533</p>
          </div>
          <div className="py-2 leading-loose text-gray-200 font-thin italic">
            Email
            <p className="text-gray-300 font-thin not-italic">
              info@yourdomain.com
            </p>
          </div>
        </div>

        {/* Subscribe */}
        <div className="w-2/4 flex flex-col space-y-5">
          <div className="text-gray-200 font-fatface font-extrabold text-xl">
            Subscribe
          </div>
          <div>
            <p className="text-gray-300 font-thin">Sign up for our newsletter</p>
            <EmailInput />
          </div>
        </div>
      </div>

      {/* Lower Part */}
      <div className="w-3/5 mx-auto grid grid-rows-2">
        <div className="p-5 flex items-center justify-center font-thin text-gray-300">
          <p>
            Copyright © 2024 All rights reserved | This template is made with love by
            Colorlib
          </p>
        </div>
        <div className="px-3 pb-32 flex items-center justify-center space-x-4 text-white">
          <img
            src={facebook}
            style={{ fill: "#fff" }}
            alt="Facebook"
            width={30}
            height={30}
          />
          <img src={twitter} alt="Twitter" width={30} height={30} />
          <img src={linkedin} alt="LinkedIn" width={30} height={30} />
        </div>
      </div>
    </footer>
  );
}
