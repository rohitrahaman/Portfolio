import { ChevronsDown, Github, Linkedin } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="flex justify-center items-center gap-6 py-16 mb-5">
        <div className="border border-b-black w-1/3"></div>
        <div className="text-2xl">
          <span>Contact</span>
        </div>
        <div className="border border-b-black w-1/3"></div>
      </div>
      <div>
        <div className=" flex flex-col items-center justify-center text-center  ">
          <div className="text-xl">
            <h1>
              I am currently seeking employment,and I would appreciate it if you
            </h1>
          </div>
          <div className="text-xl">
            <h2>could contact me with any available job opportunities</h2>
          </div>
          <div className="mt-16">
            <button className="border border-gray-300 py-2 px-2">
              Write Message
            </button>
          </div>
          <div className="flex gap-2 mt-10">
            <Github />
            <Linkedin />
          </div>
          <div className="py-20">
            <span>John Smith - 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
