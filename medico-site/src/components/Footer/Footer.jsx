import React from "react";
import logo from "../../assets/images/logo-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import upi from "../../assets/images/PaymentLogo/UPI-Color.png";
import visa from "../../assets/images/PaymentLogo/visa.svg";
import mastercard from "../../assets/images/PaymentLogo/mastercard.svg";
import facebook from "../../assets/images/SocialIcon/facebook.svg";
import instagram from "../../assets/images/SocialIcon/Instagram.svg";
import linkedin from "../../assets/images/SocialIcon/linkedin.svg";
import whatsapp from "../../assets/images/SocialIcon/whatsapp.svg";
import youtube from "../../assets/images/SocialIcon/youtube.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1b324d] text-white py-10 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Logo" className="w-[210px] mb-4" />
            <p className="text-sm">
              We are many variations of the passages available but the majority
              have suffered alteration injected.
            </p>
            <div className="mt-6 space-y-2">
              <p className="flex items-center">
                <span className="bg-[#579f97] p-2 rounded-full mr-2 flex items-center justify-center w-8 h-8">
                  <FontAwesomeIcon icon={faPhone} className="text-white" />
                </span>
                +2 123 654 7898
              </p>
              <p className="flex items-center">
                <span className="bg-[#579f97] p-2 rounded-full mr-2 flex items-center justify-center w-8 h-8">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-white"
                  />
                </span>
                25/B Milford Road, New York
              </p>
              <p className="flex items-center">
                <span className="bg-[#579f97] p-2 rounded-full mr-2 flex items-center justify-center w-8 h-8">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                </span>
                info@example.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-cyan-500">About Us</li>
              <li className="hover:text-cyan-500">Contact Us</li>
              <li className="hover:text-cyan-500">FAQs</li>
              <li className="hover:text-cyan-500">Awards</li>
            </ul>
          </div>

          {/* My Profile */}
          <div>
            <h3 className="text-lg font-semibold mb-4">My Profile</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-cyan-500">Dashboard</li>
              <li className="hover:text-cyan-500">My Orders</li>
              <li className="hover:text-cyan-500">Recent Orders</li>
              <li className="hover:text-cyan-500">Update Profile</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-cyan-500">Terms & Condirion</li>
              <li className="hover:text-cyan-500">Privacy Policy</li>
              <li className="hover:text-cyan-500">Exchange & Return Policy</li>
            </ul>

            {/* Secure Payments */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Secure Payments</h3>
              <div className="flex space-x-4">
                <img src={visa} alt="Visa" className="h-7" />
                <img src={mastercard} alt="MasterCard" className="h-7" />
                <img
                  src={upi}
                  alt="Discover"
                  className="h-6 bg-white rounded-sm p-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-[#37506c] pt-6 px-16 flex justify-between items-center ">
          <div className="text-sm">
            <p>
              © Copyright 2024 <span className="font-semibold">Medion</span> All
              Rights Reserved.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="text-sm ">
            <h3 className="text-lg mb-1">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                <img src={facebook} alt="Facebook" className="h-8" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                <img src={instagram} alt="Instagram" className="h-8" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                <img src={linkedin} alt="LinkedIn" className="h-8" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                <img src={whatsapp} alt="WhatsApp" className="h-8" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                <img src={youtube} alt="YouTube" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
