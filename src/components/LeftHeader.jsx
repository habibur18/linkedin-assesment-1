import React from "react";

export default function LeftHeader() {
  return (
    <header className="">
      <nav className="flex flex-wrap gap-10 items-center mt-8">
        <div className="relative flex items-center">
          <input type="text" className="bg-gray-200/30 px-11 py-2 rounded-lg" placeholder="Add Url" />
          <i className="absolute left-3 fa fa-solid fa-link"></i>
          <i className="-ml-12 px-2 py-2 rounded-lg  bg-gradient-to-b from-sky-500 to-purple-600 fa-solid fa-cloud-arrow-down text-white"></i>
        </div>
        <div className="flex flex-col text-center text-xl">
          <i className="fa-regular fa-circle-pause"></i>
          <span>Resume</span>
        </div>
        <div className="flex flex-col  text-center text-xl">
          <i className="fa-solid fa-stop"></i>
          <span>Stop</span>
        </div>
        <div className="text-center text-xl flex flex-col items-center">
          <i className="fa-solid fa-hourglass-end block mr-2"></i>
          <span>Stop All</span>
        </div>
        <div className="flex flex-col text-center text-xl">
          <i className="fa-solid fa-trash"></i>
          <span>Delete</span>
        </div>
        <div className="flex flex-col text-center text-xl">
          <i className="fa-solid fa-filter"></i>
          <span>Options</span>
        </div>
        <div className="flex flex-col text-center text-xl">
          <i className="fa-solid fa-clipboard-list"></i>
          <span>Queues</span>
        </div>
        <div className="flex flex-col text-center text-xl">
          <i className="fa-solid fa-calendar"></i>
          <span>Schedule</span>
        </div>
        <div className="flex flex-col text-center text-xl">
          <i className="fa-solid fa-share"></i>
          <span>Share</span>
        </div>
      </nav>
    </header>
  );
}
