import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <ul className="flex space-x-10 font-semibold">
        <li>Tasks</li>
        <li>File</li>
        <li>Downloads</li>
        <li>View</li>
        <li>Help</li>
      </ul>
      <div>
        <input className="bg-gray-200/30 px-11 py-2 rounded-lg" type="search" placeholder="Search in the List" />
      </div>
    </header>
  );
}
