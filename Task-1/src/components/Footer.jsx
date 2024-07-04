import React from "react";
import EmailInput from "./EmailInput";
import facebook from "../assets/fb.svg";
import linkedin from "../assets/in.svg";
import twitter from "../assets/twitter.svg";
export default function Footer() {
  return (
    <footer
      className="h-auto bg-black bg-opacity-90 text-white 
    border-b-0 border-gray-50"
    >
      {/* Upper Part */}
      <div className="h-32"></div>
      <div className="h-auto w-4/5 mx-auto flex border-b-2 border-gray-700">
        <div className=" w-1/4 grid grid-rows-5">
          Quick Links
          <div>About Us</div>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Help</div>
          <div>Rooms</div>
        </div>
        <div className="w-1/4 grid grid-rows-5">
          Support
          <div>About</div>
          <div>The Hosts</div>
          <div>About</div>
          <div>Contact</div>
          <div>Restaurant</div>
        </div>
        <div className="w-1/4 grid grid-rows-5">
          Contact Info
          <div>
            Address
            <address>
              98 West 21th Street, Suite 721 <br /> New York NY 10016
            </address>
          </div>
          <div>
            Phone:
            <p>(+1) 435 3533</p>
          </div>
          <div>
            Email
            <p>info@yourdomain.com</p>
          </div>
        </div>
        <div className="w-1/4 grid grid-rows-5">
          Subscribe
          <div>
            <p>Sign up for newsletter</p>
            <EmailInput />
          </div>
        </div>
      </div>
      <div className="h-16 "></div>

      {/* Lower Part */}
      <div className="w-3/5 mx-auto grid grid-rows-2">
        <div className="p-5 flex items-center justify-center">
          <p>
            Copyright © 2024 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
        <div className="p-5 flex items-center justify-center space-x-8">
          <img src={facebook} alt="Facebook" width={40} height={40}/>
          <img src={twitter} alt="Twitter" width={40} height={40} />
          <img src={linkedin} alt="LinkedIn" width={40} height={40} />
        </div>
      </div>
    </footer>
  );
}
