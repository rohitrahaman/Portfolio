import { ChevronsDown } from "lucide-react";
import React from "react";

function Nameinfo() {
  return (
    <div className="bg-white w-full">
      <div className="h-screen flex flex-col items-center justify-center text-center  ">
        <div className="text-4xl font-semibold">
          <h1>Hi, I'm John Smith</h1>
        </div>
        <div className="text-sm">
          <h2>I design and build things</h2>
        </div>
        <div className="py-20">
          <ChevronsDown />
        </div>
      </div>
    </div>
  );
}

export default Nameinfo;
