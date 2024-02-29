import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="col-span-2 mt-10 space-y-4">
      <div>
        <div>
          <motion.h3 className="space-x-5 text-xl flex items-center cursor-pointer" onClick={toggleAccordion} initial={false} animate={{ borderRadius: isOpen ? "0.375rem" : "1rem" }} whileHover={{ backgroundColor: "#e5e7eb", color: "black", padding: "0.5rem" }} whileTap={{ scale: 0.95 }}>
            <i className="fa-solid fa-folder-open"></i>
            <span className="flex-grow">All Downloads</span>
            <span className="inline-block pr-5">
              <motion.svg className={`fill-current h-4 w-4 transform transition duration-500 ease-in-out ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </motion.svg>
            </span>
          </motion.h3>
          <AnimatePresence>
            {isOpen && (
              <motion.div key="content" className="p-5 text-lg accordion" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                <ul className="space-y-2 [&>li]:flex [&>li]:items-center [&>li]:gap-3">
                  <li>
                    <i className="fa-solid fa-music"></i> <span>Music</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-file-zipper"></i> <span>compressed</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-video"></i> <span>Videos</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-bars-progress"></i> <span>Programs</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-file"></i> <span>Documents</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-masks-theater"></i> <span>APKs</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-images"></i> <span>Images</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h3 className="space-x-5 text-xl flex items-center">
            <i className="fa-solid fa-download"></i>
            <span className="flex-grow">Unfinished</span>
            <span className="inline-block pr-5">
              <svg className={`fill-current h-4 w-4 transform transition duration-500 ease-in-out`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </h3>
        </div>
        <div>
          <h3 className="space-x-5 text-xl flex items-center">
            <i className="fa-solid fa-check-to-slot"></i>
            <span className="flex-grow">Finished</span>
            <span className="inline-block pr-5">
              <svg className={`fill-current h-4 w-4 transform transition duration-500 ease-in-out`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </h3>
        </div>
      </div>
      <div className="h-1 w-full bg-white/20 my-2"></div>
      <div className="px-4 py-2 w-full mx-auto flex justify-center items-center flex-col space-y-3">
        <div className="flex items-center gap-3 text-lg">
          <i className="fa-regular fa-hard-drive"></i> <span className="flex-grow">Disk Space</span> <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div>
          <div>
            <div className="relative w-32 h-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-purple-500 to-red-500"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-red-500 to-red-600"></div>
            </div>
            <span>0%</span> <span className="text-5xl">😣</span> <span>100%</span>
          </div>
          <div>
            <button className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-4 py-2 rounded w-full mt-5">Disk Cleaner</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
