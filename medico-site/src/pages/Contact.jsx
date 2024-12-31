import React, { useEffect } from "react";
import headImg from "../assets/images/AboutUsImg/headImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneFlip,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import { Link } from "react-router-dom";

export default function Contact() {
  useEffect(() => {
    // Map initialization
    const map = L.map("map", {
      center: [40.7128, -74.006],
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: true,
      dragging: true,
      tap: true,
      touchZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([40.7128, -74.006]).addTo(map).bindPopup("Our Office").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Head title */}
      <div
        className="head bg-cover bg-center h-[100%] md:h-[200px] flex items-center "
        style={{
          backgroundImage: `url(${headImg})`,
        }}
      >
        <div className="about-us-text mx-2 p-4 text-[#13324e] space-y-2 font-bold text-xl md:text-3xl md:p-8 md:mx-14">
          <div>Contact Us</div>
          <div className="flex items-center text-sm md:text-base  text-gray-600">
            <Link to="/" className="hover:text-mainCyan text-[#13324e]">
              Home
            </Link>
            <span className="mx-2 text-[#13324e]">&gt;&gt;</span>
            <span className="text-mainCyan ">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Details & Form */}
      <div className="bg-gray-100 p-8 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Office Address */}
            <div className="flex items-center space-x-4">
              <div className="bg-teal-500 text-white rounded-full px-3 py-2 tablet:p-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-4 h-3 tablet:w-6 tablet:h-5   "
                />
              </div>
              <div>
                <h3 className="tablet:text-lg font-semibold">Office Address</h3>
                <p className="text-gray-600 text-sm tablet:text-base">
                  25/B Milford Elm Drive Road, New York, USA
                </p>
              </div>
            </div>
            {/* Call Us */}
            <div className="flex items-center space-x-4">
              <div className="bg-teal-500 text-white rounded-full px-3 py-2 tablet:p-4">
                <FontAwesomeIcon
                  icon={faPhoneFlip}
                  className="w-4 h-3 tablet:w-6 tablet:h-5"
                />
              </div>
              <div>
                <h3 className="tablet:text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600 text-sm tablet:text-base">
                  +2 123 4565 788
                </p>
                <p className="text-gray-600 text-sm tablet:text-base">
                  +2 123 4565 789
                </p>
              </div>
            </div>
            {/* Email Us */}
            <div className="flex items-center space-x-4">
              <div className="bg-teal-500 text-white rounded-full px-3 py-2 tablet:p-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 h-3 tablet:w-6 tablet:h-5"
                />
              </div>
              <div>
                <h3 className="tablet:text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600 text-sm tablet:text-base">
                  info@example.com
                </p>
                <p className="text-gray-600 text-sm tablet:text-base">
                  support@example.com
                </p>
              </div>
            </div>
            {/* Open Time */}
            <div className="flex items-center space-x-4">
              <div className="bg-teal-500 text-white rounded-full px-3 py-2 tablet:p-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-4 h-3 tablet:w-6 tablet:h-5 "
                />
              </div>
              <div>
                <h3 className="tablet:text-lg font-semibold">Open Time</h3>
                <p className="text-gray-600 text-sm tablet:text-base">
                  Mon - Sat (10AM - 05PM)
                </p>
                <p className="text-red-500 text-sm tablet:text-base">
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                placeholder="Write Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map */}
      <div
        id="map"
        className="w-full h-96 md:h-[300px] rounded-xl shadow-xl"
      ></div>
    </div>
  );
}
