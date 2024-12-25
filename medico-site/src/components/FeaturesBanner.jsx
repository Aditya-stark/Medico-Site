import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faSyncAlt, faWallet, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function FeaturesBanner() {
  return (
    <div className="bg-[#1b324d] text-white my-32 rounded-lg col-span-1 sm:col-span-2 md:col-span-5 lg:col-span-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {/* Feature 1 */}
        <div className="flex flex-col items-center space-y-3 p-4 bg-[#1b324d] rounded-lg">
          <div className="bg-teal-500 p-4 rounded-full">
            <FontAwesomeIcon icon={faTruck} className="text-white text-2xl" />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg">Free Delivery</h4>
            <p className="text-sm">Orders Over $120</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center space-y-3 p-4 bg-[#1b324d] rounded-lg">
          <div className="bg-teal-500 p-4 rounded-full">
            <FontAwesomeIcon icon={faSyncAlt} className="text-white text-2xl" />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg">Get Refund</h4>
            <p className="text-sm">Within 30 Days Returns</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center space-y-3 p-4 bg-[#1b324d] rounded-lg">
          <div className="bg-teal-500 p-4 rounded-full">
            <FontAwesomeIcon icon={faWallet} className="text-white text-2xl" />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg">Safe Payment</h4>
            <p className="text-sm">100% Secure Payment</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center space-y-3 p-4 bg-[#1b324d] rounded-lg">
          <div className="bg-teal-500 p-4 rounded-full">
            <FontAwesomeIcon icon={faHeadset} className="text-white text-2xl" />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg">24/7 Support</h4>
            <p className="text-sm">Feel Free To Call Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
