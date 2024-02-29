import React from "react";
import LeftHeader from "./LeftHeader";
import QueList from "./QueList";

export default function LeftSide() {
  return (
    <div className="col-span-10">
      <LeftHeader />
      <div className="bg-white/50 w-full h-[2px] mt-8"></div>
      <QueList />
    </div>
  );
}
