import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const categories = {
  Medicine: [
    "Allergies & Sinus",
    "E.N.T Preparations",
    "Eye Preparations",
    "Vitamin & Nutritional",
    "Fever & Pain Relief",
    "Dermatological",
  ],
  Equipment: [
    "Biopsy Tools",
    "Monitoring",
    "Infusion Stands",
    "Lighting",
    "Machines",
    "Thermometer",
  ],
  "Wound Care": [
    "Surgical Sutures",
    "Bandages",
    "Patches And Tapes",
    "Stomatology",
    "Wound Healing",
    "Uniforms",
  ],
  Hygiene: [
    "Face Masks",
    "Sterilization",
    "Surgical Foils",
    "Disposable Products",
    "Protective Covers",
    "Diagnostic Tests",
  ],
};

const CategoriesDropdown = () => (
  <FlyoutLink href="#" FlyoutContent={CategoryContent}>
    Categories
  </FlyoutLink>
);

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-gray-700">
        {children}
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#509488] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black shadow-lg rounded-2xl"
          >
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CategoryContent = () => (
  <div className="w-[500px] bg-white p-6 rounded-2xl shadow-xl grid grid-cols-2 gap-4">
    {Object.entries(categories).map(([section, items]) => (
      <div key={section}>
        <h3 className="font-semibold mb-3">{section}</h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="block text-sm hover:underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default CategoriesDropdown;
